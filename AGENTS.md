# 專案藍圖：問大師家族辦公室 官方網站

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 📌 專案簡介
專為高資產個人（50+）、中小企業主與家族決策者打造之問大師家族辦公室品牌形象官方網站。

## 🔄 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 / 連結 | 讀取時機 |
|------|------|------------|---------|
| L1 | 本地（GDrive） | [`AGENTS.md`](file:///Users/garfiwang/Library/CloudStorage/GoogleDrive-garfiwangdata1@gmail.com/%E6%88%91%E7%9A%84%E9%9B%B2%E7%AB%AF%E7%A1%AC%E7%A2%9F/%5BProject%5D%20%E5%95%8F%E5%A4%A7%E5%B8%AB%E7%9A%84%E5%AE%98%E7%B6%B2/AGENTS.md) ＋ [`handoff.md`](file:///Users/garfiwang/Library/CloudStorage/GoogleDrive-garfiwangdata1@gmail.com/%E6%88%91%E7%9A%84%E9%9B%B2%E7%AB%AF%E7%A1%AC%E7%A2%9F/%5BProject%5D%20%E5%95%8F%E5%A4%A7%E5%B8%AB%E7%9A%84%E5%AE%98%E7%B6%B2/handoff.md) | 每個 session |
| L2 | GitHub | [garfiwang/masterask-website](https://github.com/garfiwang/masterask-website) | 指定時 / 版本控制 |
| L3 | Obsidian | `secondbrain/[Project] 問大師的官網/專案工作流程.md` | 有需要時 |

## ⚠️ 經營困境與資源限制 (Recorded Constraints)
詳細策略與分析見 [dilemmas.md](file:///Users/garfiwang/Library/CloudStorage/GoogleDrive-garfiwangdata1@gmail.com/%E6%88%91%E7%9A%84%E9%9B%B2%E7%AB%AF%E7%A1%AC%E7%A2%9F/%5BProject%5D%20%E5%95%8F%E5%A4%A7%E5%B8%AB%E7%9A%84%E5%AE%98%E7%B6%B2/dilemmas.md)：
1. **內容產出困境**：無法固定產生專業文章或新聞內容 ➔ 改採長青內容 (Evergreen) + AI 內容生成槓桿。
2. **人力限制**：一人團隊 (Solo Founder) ➔ 官網擔當 24/7 自動化業務代表與表單篩選器。
3. **資本額限制**：資金有限 ➔ 精實營運 (Lean) 聚焦高品質官網門面與精準客戶轉換。

## 🗺️ 路線圖 (Roadmap)
- [x] 完成 RDQ 需求探索與訪談確認 (`rdq/RDQ-spec-family-office-website-20260809.md`)
- [x] 整合 5 大官方服務項目 (`services.md` -> `index.html`, `styles.css`)
- [x] 記錄經營困境與資源限制 (`dilemmas.md`)
- [x] 整合 3 大標竿競品研析與 5 大移植策略 (`handoff.md`)
- [x] 產出官網 v2.0 競品移植與高轉換架構藍圖 (`implementation_plan.md` 待審閱)
- [x] 完成 L2 (GitHub Repo) 與 L3 (Obsidian Vault Note) 連接
- [ ] 執行官網 v2.0 前端程式碼升級 (`index.html`, `styles.css`, `app.js`)

## 📁 資料夾結構
```
[Project] 問大師的官網/
├── index.html        # 主頁面 (問大師家族辦公室形象官網)
├── styles.css        # 品牌視覺樣式 (深棕、金黃、米白配色系統與 RWD)
├── app.js            # 前端互動邏輯 (Scroll reveal, FAQ 手風琴, Modal)
├── services.md       # 官方 5 大服務項目標準文案
├── dilemmas.md       # 團隊困境與資源限制策略檔
├── .gitignore        # Git 忽略檔設定
├── assets/           # 品牌圖片素材 (logo_badge.jpg, hero_banner.jpg)
├── rdq/              # RDQ 需求規格卡目錄
├── AGENTS.md         # 專案藍圖與狀態
└── handoff.md        # 跨 Agent / 跨電腦交接檔
```

## 🤝 工作約定
- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 所有回應與文件使用繁體中文
