## Webpack website 作成用のテンプレート

### 概要
静的Webサイト作成用のwebpackで構成したtemplateです。<br>
構文確認に、ESLint,StyleLintを道入。<br>
フォーマッターは、prettierを道入。

### 環境
- node.js v16.13.1
- npm v8.1.2
- yarn v1.22.17
- Webpack v5.67.0

### 構成
- HTML
- SCSS
- JavaScript

### 構文チェック
- Stylelint（ルールはBEMで設定しています。）
- ESLint

### formatter
- prettier

## 使い方
各packageのインストール
```
yarn
```
開発環境用にコンパイル
```
yarn dev
```
本番環境用にコンパイル
```
yarn build
```
ローカルサーバーの立ち上げ、ファイルの監視
```
yarn start
```
