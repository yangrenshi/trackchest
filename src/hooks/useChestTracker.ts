"use client";

import { useState, useEffect, useCallback } from "react";
import { ChestType, ChestTrackerState, ExportDataPayload, ChestActionLog } from "@/types/chest";

const STORAGE_KEY = "trackchest_state_v1";

const getTodayString = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
};

const INITIAL_COUNTS: Record<ChestType, number> = {
  regular: 0,
  rare: 0,
  sprite: 0,
  pirate: 0,
  faction: 0,
  cash: 0,
};

const getInitialState = (): ChestTrackerState => {
  return {
    counts: { ...INITIAL_COUNTS },
    sessionTotal: 0,
    todayTotal: 0,
    allTimeTotal: 0,
    dailyBest: 0,
    lastActiveDate: getTodayString(),
    history: [],
  };
};

export const MILESTONES = [10, 25, 50, 100, 250, 500, 1000];

export function useChestTracker() {
  const [state, setState] = useState<ChestTrackerState>(getInitialState);
  const [isLoaded, setIsLoaded] = useState(false);
  const [latestMilestone, setLatestMilestone] = useState<number | null>(null);

  // 1. 初始化从 LocalStorage 读取
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: ChestTrackerState = JSON.parse(saved);
        const today = getTodayString();
        
        // 如果跨天了，重置 todayTotal，但保留 dailyBest 和 allTimeTotal
        if (parsed.lastActiveDate !== today) {
          setState({
            ...parsed,
            todayTotal: 0,
            sessionTotal: 0,
            lastActiveDate: today,
            history: [],
          });
        } else {
          setState(parsed);
        }
      }
    } catch {
      // 容错处理
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // 2. 状态变动自动保存
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // 容错处理
    }
  }, [state, isLoaded]);

  // 检查里程碑
  const checkMilestone = useCallback((newTotal: number) => {
    if (MILESTONES.includes(newTotal)) {
      setLatestMilestone(newTotal);
      // 触发震动 (如果支持)
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        try {
          navigator.vibrate([80, 40, 120]);
        } catch {
          // 忽略
        }
      }
    }
  }, []);

  // 增加计数 (支持指定类型，默认 regular)
  const increment = useCallback((type: ChestType = "regular") => {
    setState((prev) => {
      const currentCount = prev.counts[type] || 0;
      const newCounts = { ...prev.counts, [type]: currentCount + 1 };
      const newSessionTotal = prev.sessionTotal + 1;
      const newTodayTotal = prev.todayTotal + 1;
      const newAllTimeTotal = prev.allTimeTotal + 1;
      const newDailyBest = Math.max(prev.dailyBest, newTodayTotal);

      const actionLog: ChestActionLog = {
        id: Math.random().toString(36).substring(2, 9),
        type,
        delta: 1,
        timestamp: Date.now(),
      };

      // 最多保留 50 步历史
      const newHistory = [actionLog, ...prev.history.slice(0, 49)];

      checkMilestone(newTodayTotal);

      return {
        counts: newCounts,
        sessionTotal: newSessionTotal,
        todayTotal: newTodayTotal,
        allTimeTotal: newAllTimeTotal,
        dailyBest: newDailyBest,
        lastActiveDate: getTodayString(),
        history: newHistory,
      };
    });
  }, [checkMilestone]);

  // 减少计数 (针对特定宝箱微调)
  const decrement = useCallback((type: ChestType = "regular") => {
    setState((prev) => {
      const currentCount = prev.counts[type] || 0;
      if (currentCount <= 0) return prev;

      const newCounts = { ...prev.counts, [type]: currentCount - 1 };
      const newSessionTotal = Math.max(0, prev.sessionTotal - 1);
      const newTodayTotal = Math.max(0, prev.todayTotal - 1);
      const newAllTimeTotal = Math.max(0, prev.allTimeTotal - 1);

      const actionLog: ChestActionLog = {
        id: Math.random().toString(36).substring(2, 9),
        type,
        delta: -1,
        timestamp: Date.now(),
      };

      return {
        ...prev,
        counts: newCounts,
        sessionTotal: newSessionTotal,
        todayTotal: newTodayTotal,
        allTimeTotal: newAllTimeTotal,
        history: [actionLog, ...prev.history.slice(0, 49)],
      };
    });
  }, []);

  // 撤销上一步操作
  const undo = useCallback(() => {
    setState((prev) => {
      if (prev.history.length === 0) return prev;
      const [lastAction, ...remainingHistory] = prev.history;
      const { type, delta } = lastAction;

      const currentCount = prev.counts[type] || 0;
      // 撤销动作：若上次是 +1，则 -1；若上次是 -1，则 +1
      const restoredCount = Math.max(0, currentCount - delta);
      const newCounts = { ...prev.counts, [type]: restoredCount };

      const newSessionTotal = Math.max(0, prev.sessionTotal - delta);
      const newTodayTotal = Math.max(0, prev.todayTotal - delta);
      const newAllTimeTotal = Math.max(0, prev.allTimeTotal - delta);

      return {
        ...prev,
        counts: newCounts,
        sessionTotal: newSessionTotal,
        todayTotal: newTodayTotal,
        allTimeTotal: newAllTimeTotal,
        history: remainingHistory,
      };
    });
  }, []);

  // 重置当前战局 (Session) 计数
  const resetSession = useCallback(() => {
    setState((prev) => ({
      ...prev,
      counts: { ...INITIAL_COUNTS },
      sessionTotal: 0,
      history: [],
    }));
  }, []);

  // 重置全部数据
  const resetAll = useCallback(() => {
    const fresh = getInitialState();
    setState(fresh);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // 忽略
    }
  }, []);

  // 导出 JSON 数据
  const exportData = useCallback((): string => {
    const payload: ExportDataPayload = {
      version: 1,
      exportedAt: new Date().toISOString(),
      state,
    };
    return JSON.stringify(payload, null, 2);
  }, [state]);

  // 导入 JSON 数据
  const importData = useCallback((jsonString: string): boolean => {
    try {
      const parsed: ExportDataPayload = JSON.parse(jsonString);
      if (parsed && parsed.state && typeof parsed.state.allTimeTotal === "number") {
        setState({
          ...parsed.state,
          lastActiveDate: getTodayString(),
        });
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  const dismissMilestone = useCallback(() => {
    setLatestMilestone(null);
  }, []);

  return {
    state,
    isLoaded,
    latestMilestone,
    increment,
    decrement,
    undo,
    resetSession,
    resetAll,
    exportData,
    importData,
    dismissMilestone,
  };
}
