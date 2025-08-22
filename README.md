# studd. | スタッド.

個人制作 - TypeScript と AwayJS による3Dポートフォリオサイト（2014年版）

## 概要

このプロジェクトは、TypeScript と AwayJS を使用したインタラクティブなポートフォリオサイトです。100個の3Dキューブが様々なパターンでアニメーションする背景エフェクトが特徴で、5つの異なるモーションステートを自動的に切り替えながら、作品紹介とともに視覚的な表現を実現しています。

## 主要機能

### 3Dアニメーションシステム
- 100個の個別アニメーションキューブ
- 5つの異なるモーションパターン（StateMotionA-E）
- 5秒間隔での自動ステート切り替え
- スムーズな補間とローテーションアニメーション

### ポートフォリオ表示
- 2011-2014年の制作作品紹介
- 外部ポートフォリオサイトへのリンク
- SNS連携（Facebook、Twitter）
- レスポンシブレイアウト

### 技術的特徴
- AwayJS による WebGL レンダリング
- TypeScript による型安全な開発
- 軌道カメラシステム
- ディレクショナルライティング

## 技術スタック

- **TypeScript**: ES5コンパイル
- **3Dエンジン**: AwayJS
  - awayjs-core.next.js
  - stagegl-core.next.js
  - stagegl-extensions.next.js
- **ユーティリティ**: Underscore.js 1.6.0, jQuery 2.1.1
- **ビルドツール**: Grunt
- **フロントエンド**: HTML5, CSS3

## セットアップ

### 必要環境
- Node.js（v0.10+推奨）
- Grunt CLI
- WebGL対応ブラウザ（Chrome, Firefox, Safari推奨）

### インストール
```bash
# Grunt CLI のインストール
npm install -g grunt-cli

# 依存関係のインストール
npm install

# TypeScript コンパイル & ビルド
grunt

# 開発サーバーの起動
cd bin
python3 -m http.server 3000
```

### アクセス
ブラウザで `http://localhost:3000` にアクセス

## ファイル構成

```
src/
├── bin/                          # コンパイル済みファイル
│   ├── assets/
│   │   ├── css/
│   │   │   ├── reset.css         # CSSリセット
│   │   │   └── style.css         # メインスタイル
│   │   └── js/
│   │       ├── libs/             # 外部ライブラリ
│   │       ├── index.js          # コンパイル済みTypeScript
│   │       └── index-min.js      # 圧縮版
│   └── index.html                # メインHTMLファイル
├── src/                          # TypeScript ソースファイル
│   ├── Box.ts                    # 3Dキューブクラス
│   ├── Index.ts                  # メインエントリーポイント
│   ├── StateMotionA.ts           # 中心収束アニメーション
│   ├── StateMotionB.ts           # ランダム散布フォーメーション
│   ├── StateMotionC.ts           # グリッド配置
│   ├── StateMotionD.ts           # 線形振動
│   └── StateMotionE.ts           # 垂直カラム
├── libs/                         # 型定義ファイル
│   ├── awayjs-core.next.d.ts     # AwayJS型定義
│   ├── stagegl-core.next.d.ts    # StageGL型定義
│   └── ref/                      # 外部ライブラリ型定義
├── package.json                  # Node.js 依存関係
└── Gruntfile.js                 # ビルド設定
```

## アニメーションステート

アプリケーションは5つの異なるアニメーションパターンを循環します：

- **StateMotionA**: 全キューブが中心位置に収束
- **StateMotionB**: 1000x1000x1000空間内でランダム散布
- **StateMotionC**: 2層グリッド配置（10x5配列）
- **StateMotionD**: 水平振動を伴う線形配置
- **StateMotionE**: 上方向移動の垂直カラム配列

## ビルドタスク

```bash
# TypeScript を JavaScript にコンパイル
grunt ts:Index

# JavaScript ファイルの圧縮
grunt uglify

# ファイル変更監視とコンパイル
grunt watch

# 全タスク実行（コンパイル + 圧縮 + 監視）
grunt
```

## 動作要件

### 2014年時点の対応ブラウザ
- Chrome 30+
- Firefox 25+
- Safari 7+
- Internet Explorer 11+

### モダンブラウザ要件
- WebGL サポート
- ES5 JavaScript 互換性
- HTML5 Canvas サポート

## アーカイブ
以下から参照できます：  
[https://studd.jp/__archive/studd_2014/](https://studd.jp/__archive/studd_2014/)

## ライセンス

このプロジェクトで使用されているライブラリはすべて MIT License です：
- AwayJS (MIT License)
- Underscore.js (MIT License) 
- jQuery (MIT License)
- swfobject (MIT License)