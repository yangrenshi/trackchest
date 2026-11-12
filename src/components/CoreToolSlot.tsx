"use client";

import React from "react";
import { ChestMainDashboard } from "./CoreTracker/ChestMainDashboard";

/**
 * CoreToolSlot (TrackChest 核心交互插槽)
 * 纯前端极速免登录 Fortnite 宝箱计数器。
 * 杜绝任何前端面向开发者的说明提示，保持极简玩家原生沉浸感。
 */
export function CoreToolSlot() {
  return (
    <section className="py-6 px-4 md:px-6">
      <ChestMainDashboard />
    </section>
  );
}
