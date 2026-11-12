# Universal SaaS Launch Boilerplate (Next.js 15 + Tailwind + Auth)

> 专为出海独立开发者量身定制的高转化、全合规通用独立站工程模板。

---

## 🚀 30 分钟换皮新站极速上手 SOP

### 第一步：修改单点配置中心 (`src/config/site.ts`)
打开 `src/config/site.ts`，修改以下 5 处即可实现全站自动换皮：
1. `name`: 你的新品牌名
2. `domain` & `url`: 你的新站域名
3. `contactEmail` & `refundEmail`: 客服与退款邮箱
4. `features`: 你的 6 大核心卖点
5. `pricing`: 三档定价与对应的 Product ID

### 第二步：替换核心业务插槽 (`src/components/CoreToolSlot.tsx`)
* 本模板已将外围基建（导航、页脚、登录弹窗、个人中心、SEO、法务页面、定价表）全部解耦抽离；
* 你只需要打开 `src/components/CoreToolSlot.tsx`，把输入框、API 调用和结果展示换成你当前赛道的核心功能即可（如塔罗抽牌、PDF转换、AI提示词调试等）。

### 第三步：配置环境变量 (`.env.local`)
```bash
cp .env.example .env.local
```
填入你的 `NEXT_PUBLIC_GOOGLE_CLIENT_ID` 和支付网关 Key。

### 第四步：本地启动与部署
```bash
pnpm install
pnpm dev
```
打开 `http://localhost:3000` 即可预览完整站点。直接推送 GitHub，一键部署到 Vercel 或 Cloudflare Pages！

---

## 📁 页面路由清单
* `/`：高转化落地页（Hero + 核心工具 + Features + Comparison + Pricing + FAQ + 1000+词SSR科普）
* `/dashboard`：全功能个人后台（积分余额、订阅管理、生成历史、充值入口）
* `/privacy`：GDPR/CCPA 国际卡组织过审级隐私政策
* `/terms`：合规服务条款
* `/refund`：14 天无忧退款政策
* `/contact`：客服工单与联系页面
* `/sitemap.xml` & `/robots.txt`：动态 SEO 爬虫引导

---

## 🗄️ 底层数据库双引擎适配体系 (D1 ⇄ Supabase)

本模板创新采用**数据库门面适配器模式 (src/lib/db.ts)**，业务代码零侵入：

* **阶段 1：起步期 / 验证新词 (默认推荐 D1)**
  * 设置 .env.local 中 DATABASE_PROVIDER=d1
  * 执行 src/lib/schema-d1.sql 创建 D1 数据库；
  * 享受 Cloudflare 边缘毫秒级响应，0 服务器成本，无惧新站流量试水。
* **阶段 2：增长期 / 用户量激增 (平滑切换 Supabase)**
  * 设置 .env.local 中 DATABASE_PROVIDER=supabase，填入 NEXT_PUBLIC_SUPABASE_URL；
  * 在 Supabase SQL Editor 执行 src/lib/schema-supabase.sql；
  * 前端业务代码一行不用改，数据层瞬间升级为完整工业级 PostgreSQL！
