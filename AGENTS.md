# 專案藍圖：問大師家族辦公室 官方網站

## 📌 專案簡介
專為高資產個人（50+）、中小企業主與家族決策者打造之問大師家族辦公室品牌形象官方網站。

## 🌐 官方線上網址
- **GitHub Pages 獨立網址**：[https://garfiwang.github.io/masterask-website/](https://garfiwang.github.io/masterask-website/)
- **GitHub 儲存庫**：[garfiwang/masterask-website](https://github.com/garfiwang/masterask-website)

## 🤝 工作與操作約定 (Working Conventions)
- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 所有回應與文件使用繁體中文
- ⚡ **圖檔下載約定**：當使用者詢問「哪裡下載」或索取圖檔路徑時，**必須直接執行 `open` 命令自動彈出 macOS Finder 視窗與圖片預覽**（全域技能：`open-finder-download`）。

## ⚠️ 經營困境與資源限制 (Recorded Constraints)
詳細策略與分析見 [dilemmas.md](file:///Users/garfiwang/Library/CloudStorage/GoogleDrive-garfiwangdata1@gmail.com/%E6%88%91%E7%9A%84%E9%9B%B2%E7%AB%AF%E7%A1%AC%E7%A2%9F/%5BProject%5D%20%E5%95%8F%E5%A4%A7%E5%B8%AB%E7%9A%84%E5%AE%98%E7%B6%B2/dilemmas.md)：
1. **內容產出困境**：無法固定產生專業文章或新聞內容 ➔ 改採長青內容 (Evergreen) + AI 內容生成槓桿。
2. **人力限制**：一人團隊 (Solo Founder) ➔ 官網擔當 24/7 自動化業務代表與表單篩選器。
3. **資本額限制**：資金有限 ➔ 精實營運 (Lean) 聚焦高品質官網門面與精準客戶轉換。

## 🗺️ 路線圖 (Roadmap)
- [x] 完成 RDQ 需求探索與訪談確認 (`rdq/RDQ-spec-family-office-website-20260809.md`)
- [x] 整合 5 大官方服務項目 (`services.md` -> `index.html`, `styles.css`)
- [x] 記錄經營困境與資源限制 (`dilemmas.md`)
- [x] 整合 4 大標竿競品研析與 5 大移植策略 (`handoff.md`)
- [x] 產出官網 v2.0/v3.0 競品移植與高轉換架構藍圖 (`implementation_plan.md`)
- [x] 生成「網站九大區塊動線總覽」9:16 直式資訊圖表 (`assets/website_9blocks_infographic.jpg`)
- [x] 執行官網 v3.0 前端程式碼全面升級 (`index.html`, `styles.css`, `app.js`)
- [x] 發布至 GitHub Pages 獨立線上網址 (`https://garfiwang.github.io/masterask-website/`)
- [x] 建立全域技能 `open-finder-download` (`~/.gemini/config/skills/open-finder-download/SKILL.md`)

## 📁 資料夾結構
```
[Project] 問大師的官網/
├── index.html        # 主頁面 (問大師家族辦公室形象官網 v3.0)
├── styles.css        # 品牌視覺樣式 (深棕、金黃、米白配色系統與 RWD)
├── app.js            # 前端互動邏輯 (Scroll reveal, FAQ 手風琴, Modal)
├── services.md       # 官方 5 大服務項目標準文案
├── dilemmas.md       # 團隊困境與資源限制策略檔
├── assets/           # 品牌圖片素材與資訊圖表 (website_9blocks_infographic.jpg, wendashi_a4_blueprint.jpg, logo_badge.jpg)
├── rdq/              # RDQ 需求規格卡目錄
├── AGENTS.md         # 專案藍圖與狀態
└── handoff.md        # 跨 Agent / 跨電腦交接檔
```
