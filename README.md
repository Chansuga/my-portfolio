# my-portfolio

個人ポートフォリオサイトです。[Next.js](https://nextjs.org)(App Router)と[Tailwind CSS](https://tailwindcss.com)で構築しています。

## 使用技術

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) による [Geist](https://vercel.com/font) フォントの最適化
- [ESLint](https://eslint.org)(`eslint-config-next`)

## 起動方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くと確認できます。`src/app/page.tsx` 以下を編集すると自動的に画面が更新されます。

その他のコマンド:

```bash
npm run build   # 本番用ビルド
npm run start   # ビルド済みアプリの起動
npm run lint    # ESLintによる静的解析
```

## ファイル構成

```
src/
├── app/                  # App Router のルート・レイアウト
│   ├── layout.tsx        # 全体レイアウト(Header / Footer を配置)
│   ├── layout.styles.ts  # layout.tsx 用のスタイル定義
│   ├── page.tsx          # トップページ(各セクションを並べるだけ)
│   └── globals.css       # グローバルCSS・Tailwindの読み込み
├── components/           # 画面を構成するUIコンポーネント
│   ├── Header.tsx / Header.styles.ts
│   ├── Hero.tsx / Hero.styles.ts
│   ├── About.tsx / About.styles.ts
│   ├── Projects.tsx / Projects.styles.ts
│   ├── Skills.tsx / Skills.styles.ts
│   ├── Footer.tsx / Footer.styles.ts
│   ├── Chip.tsx / Chip.styles.ts
│   └── SectionHeading.tsx / SectionHeading.styles.ts
├── data/
│   └── site.ts           # プロフィール・経歴・プロジェクト・スキル・資格などのコンテンツ定義
└── lib/
    └── styles.ts          # 複数コンポーネントで共有するTailwindクラス定数
public/
└── avatar.png             # プロフィール画像など静的ファイル
```

各コンポーネントは Tailwind のクラス文字列を同名の `*.styles.ts` ファイルに切り出しており、`ComponentName.tsx` はマークアップとロジックのみを記述する構成になっています。コンポーネント間で共通して使うクラスは `src/lib/styles.ts` にまとめています。

掲載するプロフィールや経歴、プロジェクト、スキル、資格などのコンテンツは `src/data/site.ts` を編集することで更新できます。
