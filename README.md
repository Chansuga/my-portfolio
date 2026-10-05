# my-portfolio

個人ポートフォリオサイトです。[Next.js](https://nextjs.org)(App Router)と[Tailwind CSS](https://tailwindcss.com)で構築し、GitHub Pages で公開しています。

公開URL: https://chansuga.github.io/my-portfolio/

## 技術スタック

- [Next.js 16](https://nextjs.org)(App Router, Turbopack, 静的エクスポート)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [next/font](https://nextjs.org/docs/app/getting-started/fonts) による [Geist](https://vercel.com/font) フォントの最適化
- [ESLint](https://eslint.org)(`eslint-config-next`)
- [GitHub Actions](https://docs.github.com/actions) / [GitHub Pages](https://pages.github.com)(CI/CD・ホスティング)

## ファイル構成

```
.github/
└── workflows/
    └── deploy.yml        # CI/CD のワークフロー定義(lint・型チェック・ビルド・デプロイ)
src/
├── app/                  # App Router のルート・レイアウト
│   ├── layout.tsx        # 全体レイアウト(Header / Footer を配置)
│   ├── layout.styles.ts  # layout.tsx 用のスタイル定義
│   ├── page.tsx          # トップページ(Cover / About / Projects / Skills を並べるだけ)
│   └── globals.css       # グローバルCSS・Tailwindの読み込み
├── components/           # 画面を構成するUIコンポーネント
│   ├── Header.tsx / Header.styles.ts
│   ├── Cover.tsx / Cover.styles.ts
│   ├── About.tsx / About.styles.ts
│   ├── Projects.tsx / Projects.styles.ts
│   ├── Skills.tsx / Skills.styles.ts
│   ├── Footer.tsx / Footer.styles.ts
│   ├── Chip.tsx / Chip.styles.ts
│   └── SectionHeading.tsx / SectionHeading.styles.ts
├── data/
│   └── site.ts           # プロフィール・経歴・プロジェクト・スキル・資格などのコンテンツ定義
└── lib/
    └── styles.ts         # 複数コンポーネントで共有するTailwindクラス定数
public/                   # 静的ファイル
├── avatar.png            # プロフィール画像
└── image.png             # カバー画像
next.config.ts            # Next.js の設定(静的エクスポート・basePath など)
```

各コンポーネントは Tailwind のクラス文字列を同名の `*.styles.ts` ファイルに切り出しており、`ComponentName.tsx` はマークアップとロジックのみを記述する構成になっています。コンポーネント間で共通して使うクラスは `src/lib/styles.ts` にまとめています。

掲載するプロフィールや経歴、プロジェクト、スキル、資格などのコンテンツは `src/data/site.ts` を編集することで更新できます。

## 開発環境のセットアップ

Node.js 22 を想定しています(CI と同じバージョン)。

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと確認できます。`src/` 以下を編集すると自動的に画面が更新されます。

その他のコマンド:

```bash
npm run build   # 静的サイトを out/ に出力
npm run lint    # ESLintによる静的解析
```

静的エクスポート(`output: "export"`)を使っているため、`npm run start`(`next start`)は使えません。ビルド結果をブラウザで確認するときは、`out/` を静的ファイルとして配信します。

```bash
npm run build && npx serve out
```

このとき `NEXT_PUBLIC_BASE_PATH` は付けずにビルドしてください。`basePath` 付きでビルドした `out/` をそのまま配信すると、CSS や画像のパスが合わず表示が崩れます。

## CI/CD

GitHub Actions で lint・型チェック・ビルドを自動実行し、`main` ブランチに入った変更を [GitHub Pages](https://chansuga.github.io/my-portfolio/) へ自動で公開しています。ワークフローの定義は `.github/workflows/deploy.yml` です。

### 仕組み

```
PR作成・更新 ──▶ build ジョブ(lint → 型チェック → ビルド)
main へマージ ──▶ build ジョブ ──▶ deploy ジョブ(GitHub Pages へ公開)
```

| きっかけ | 実行内容 |
|---|---|
| Pull Request の作成・更新 | CI: lint・型チェック・ビルドが通るかを確認 |
| `main` への push(PRのマージを含む) | CI に加えて、ビルド結果(`out/`)を GitHub Pages にデプロイ |
| Actions タブの「Run workflow」 | 手動で再実行 |

`build` ジョブは次の順に実行され、途中で失敗するとそこで止まります。

1. `npm ci` — `package-lock.json` どおりに依存関係をインストール
2. `npm run lint` — ESLint による静的解析
3. `npx next typegen` — `LayoutProps` などの Next.js のルート型を生成(`tsc` の前に必要)
4. `npx tsc --noEmit` — TypeScript の型チェック
5. `npm run build` — 静的サイトを `out/` に出力

GitHub Pages 側は、リポジトリの Settings → Pages → Source を「GitHub Actions」に設定しています。

### 静的エクスポートの設定

GitHub Pages は静的ファイルの配信のみに対応しているため、`next.config.ts` で次のように設定しています。

- `output: "export"` — `next build` で `out/` に HTML/CSS/JS を出力
- `basePath` — 公開URLが `/my-portfolio/` 配下になるため、環境変数 `NEXT_PUBLIC_BASE_PATH` で指定(CI では `/my-portfolio`、ローカル開発では未設定)
- `images.unoptimized: true` — 画像最適化はサーバーが必要なため無効化
- `trailingSlash: true` — `/about/` → `/about/index.html` の形式で出力

`next/image` の `src` には `basePath` が自動で付かないため、`public/` の画像を参照するときは次のように書きます。

```tsx
<Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/image.png`} alt="" />
```

### 開発の流れ

1. `main` から作業ブランチを作成する(`feature/xxx`、`chore/xxx` など)
2. 変更をコミットして push し、GitHub 上で Pull Request を作成する
3. CI が成功したことを確認してマージする
4. 数分後に https://chansuga.github.io/my-portfolio/ に反映される

PR を出す前に、ローカルで CI と同じチェックを実行しておくと失敗を減らせます。

```bash
npm run lint && npx next typegen && npx tsc --noEmit && NEXT_PUBLIC_BASE_PATH=/my-portfolio npm run build
```

CI が失敗した場合は、Actions タブで失敗したステップのログを確認してください。
