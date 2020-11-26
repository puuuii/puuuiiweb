# Frontend

## 環境初期化手順

1. `@vue/cli`をグローバルインストール
   1. `npm install -g @vue/cli@next`実行
2. プロジェクト作成
   1. 適当なディレクトリ直下で`vue create <projectname>`
   2. `? Please pick a preset`に対して`Manually select features`
   3. `? Check the features needed for your project`に対して`TypeScript`をチェック（それ以外は任意）
   4. `? Choose a version of Vue.js that you want to start the project with`に対して`3.x (Preview)`
   5. `? Use class-style component syntax?`に対して`N`
   6. 残りの質問は任意
3. 残りの必要なパッケージをインストール
   1. プロジェクトディレクトリ直下で`npm install --save @types/uikit`
   2. プロジェクトディレクトリ直下で`npm i uikit`

## 各種コマンド

- 開発サーバー起動
  - `npm run serve`