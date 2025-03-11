# GearStack

このプロジェクトは、**Solanaブロックチェーン上でReactフロントエンドのみで構築可能なGUIツールの一覧と概要**をまとめたものです。バックエンドを必要とせず、ウォレット接続、オンチェーンデータの取得・操作をすべてフロントエンドで完結させる設計を目指しています。

---

## 🚀 **GearStack**

Solanaエコシステムの構築を簡単に、そして高速に。  
ノーサーバー構成で完結できるユーティリティツール群を提供します。

---

## 📋 ツール一覧と詳細


### 1. **CoreMinter - NFTミントツール**
- **機能**:
  - フォームでNFTメタデータ入力
  - IRYS/Arweaveへのメディアアップロード
  - Metaplex CoreNFT / Legacy対応
- **ライブラリ**: `@metaplex-foundation/js`, `@metaplex-foundation/mpl-core`, `irys`

---


### 2. **NFT Viewer - 所持NFTビューワー**
- **機能**:
  - ウォレット接続NFT一覧取得
  - コレクション/属性別フィルター
  - メタデータ表示
- **ライブラリ**: `@metaplex-foundation/js`

---


### 3. **StakeViewer - ステーキング情報表示ツール**
- **機能**:
  - 接続ウォレットのステークアカウント表示
  - デリゲートバリデータ名確認
  - アクティブ/非アクティブ分類
- **ライブラリ**: `@solana/web3.js`

---


### 4. **GasTracker - ガス代チェッカー**
- **機能**:
  - トランザクション履歴のFeeを可視化
  - 合計・平均・最大・最小Fee表示
  - チャート表示
- **ライブラリ**: `@solana/web3.js`, `Recharts`

---


### 5. **TokenCleaner - トークンアカウント整理ツール**
- **機能**:
  - 未使用Token Accountの一覧表示
  - アカウントClose処理
  - Refund SOL確認
- **ライブラリ**: `@solana/spl-token`

---


### 6. **CandyMint GUI - Candy Machine操作ツール**
- **機能**:
  - Candy Machineアドレス入力
  - Mint残数・開始/終了情報取得
  - Mintボタン提供
- **ライブラリ**: `@metaplex-foundation/js`

---




### 7. **LogWatcher - プログラムログビューワー**
- **機能**:
  - 任意のプログラムIDのログをリアルタイム表示
- **ライブラリ**: `connection.onLogs()` (WebSocket API)

---

## 📦 技術スタック
- React (Vite推奨)
- Wallet Adapter
- Solana Web3.js
- Metaplex JS SDK
- Tailwind CSS
- Chartライブラリ（Recharts など）

---

## 🔗 今後の展望
- UI/UXテンプレートの共有
- 各ツールのOSS化
- 日本語・英語併記対応

---

## ✨ Contribution
アイデア追加・改善提案・プルリク大歓迎です！

---

## License
MIT License
 **LogWatcher - プログラムログビューワー**
- **機能**:
  - 任意のプログラムIDのログをリアルタイム表示
- **ライブラリ**: `connection.onLogs()` (WebSocket API)

---

## 📦 技術スタック
- React (Vite推奨)
- Wallet Adapter
- Solana Web3.js
- Metaplex JS SDK
- Tailwind CSS
- Chartライブラリ（Recharts など）

---

## 🔗 今後の展望
- UI/UXテンプレートの共有
- 各ツールのOSS化
- 日本語・英語併記対応

---

---

## License
MIT License
