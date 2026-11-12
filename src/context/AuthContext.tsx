"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  loginModalOpen: boolean;
  setLoginModalOpen: (open: boolean) => void;
  login: (userData?: Partial<User>) => void;
  logout: () => void;
  consumeCredit: (amount?: number) => boolean;
  addCredits: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "saas_user_session";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      } else {
        // 初始访客默认拥有 10 试用积分
        const guestUser: User = {
          id: "guest_" + Math.random().toString(36).substring(2, 9),
          email: "guest@example.com",
          name: "Guest Explorer",
          credits: 10,
          plan: "free",
          createdAt: new Date().toISOString(),
        };
        setUser(guestUser);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(guestUser));
      }
    } catch (e) {
      console.error("Failed to load auth session:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveUser = (u: User | null) => {
    setUser(u);
    if (u) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(u));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  const login = (userData?: Partial<User>) => {
    const newUser: User = {
      id: userData?.id || "usr_" + Math.random().toString(36).substring(2, 9),
      email: userData?.email || "user@gmail.com",
      name: userData?.name || "Happy Learner",
      avatar: userData?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      credits: (user?.credits || 0) + (userData?.credits || 50),
      plan: userData?.plan || "free",
      createdAt: user?.createdAt || new Date().toISOString(),
      subscriptionEnd: userData?.subscriptionEnd,
    };
    saveUser(newUser);
    setLoginModalOpen(false);
  };

  const logout = () => {
    saveUser(null);
  };

  const consumeCredit = (amount = 1): boolean => {
    if (!user || user.credits < amount) {
      setLoginModalOpen(true);
      return false;
    }
    const updated = { ...user, credits: user.credits - amount };
    saveUser(updated);
    return true;
  };

  const addCredits = (amount: number) => {
    if (!user) return;
    const updated = { ...user, credits: user.credits + amount };
    saveUser(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginModalOpen,
        setLoginModalOpen,
        login,
        logout,
        consumeCredit,
        addCredits,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
