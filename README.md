# Taiwan_COVID-19_RSS
即時接收[衛生福利部疾病管制署](https://www.cdc.gov.tw)RSS資訊發佈到Discord

## 開發環境
- NodeJS v14.16.0

## 如何使用

### 安裝環境

- [NodeJS](https://nodejs.org/zh-tw/) (穩定版)

### 註冊Discord機器人

1. 到 [Discord開發者專區](https://discord.com/developers) 點擊左上角 `New Application`，輸入機器人名字後點擊 `Create` 創建App
2. 進入剛剛創建的App後點擊左側面板 `Bot`
3. 點擊右側 `Add Bot` 創建機器人
4. 在 `TOKEN` 處點擊 `Copy` 複製機器人金鑰 _**(它就像密碼一樣不可以洩漏給他人!)**_

### 邀請機器人到伺服器

1. 進入 [Discord開發者專區](https://discord.com/developers) 創建的App
2. 點擊左側面板 `OAuth2`
3. 下方Scope勾選 `bot`
4. 往下勾選 `Administrator`
5. 開啟上方生成的連結
6. 選擇伺服器 > `繼續` > `授權`

### 取得頻道ID

1. 開啟Discord點擊 `使用者設定` > 左側面板 `進階` > `開發者模式`
2. 回到伺服器對要推播的頻道點擊右鍵 > `複製ID`

### 下載代碼
1. 點擊右上角綠色按鈕下載專案 或使用 <br>`git clone https://github.com/Gary50613/Taiwan_COVID-19_RSS.git`
2. 開啟 `cmd` 使用 `cd 專案目錄` 切換到專案目錄
3. 在專案內新建一個檔案 `.env` 輸入 `機器人金鑰` 及 `推播頻道ID` 格式如下

```
BOT_TOKEN=XXXXXXXXXXXXX
CHANNEL_ID=XXXXXXXXXXXX
```

4. 在命令視窗輸入 `node index` 啟動 _**(需要一直開著視窗機器人才會運作!)**_
- 🎉 恭喜你完成了!

## 支援
- [Discord](https://discord.gg/ct2ufag) [![Discord](https://img.shields.io/discord/600363644991176822.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/ct2ufag)