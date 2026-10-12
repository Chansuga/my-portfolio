import type { DateParts } from "@/lib/date";

export const profile = {
  name: "Yuki Suga",
  role: "Software Engineer",
  tagline:
    "I build fast, reliable, and thoughtfully designed web applications.",
  bio: `群馬県出身、埼玉県さいたま市在住。
  大学・大学院では素粒子理論物理学を専攻し、大学院での研究を通じてAI・機械学習に出会いました。これをきっかけに、生成AIを組み込んだWebアプリケーションを開発するIT企業へ新卒で入社。RAG（検索拡張生成）を活用した案件を中心に、実装から精度改善・検証まで携わってきました。`,
  location: "Saitama, Japan",
  photo: "/self_image.jpg",
  social: {
    github: "https://github.com/Chansuga",
    email: "sugayuki99327@gmail.com",
  },
};

export function mailto(email: string) {
  return `mailto:${email}`;
}

export type CareerItem = {
  org: string;
  role: string;
  period: string;
};

export const career: CareerItem[] = [
  {
    org: "茨城大学 理学部 理学科",
    role: "卒業",
    period: "2018年4月 - 2022年3月",
  },
  {
    org: "茨城大学大学院 理工学研究科",
    role: "修了",
    period: "2022年4月 - 2024年3月",
  },
  {
    org: "独立系IT企業 AI・データ分析事業部",
    role: "退職予定",
    period: "2024年4月 - 2026年10月",
  },
];

export type Project = {
  title: string;
  start: DateParts;
  // 未入力の場合は参画中として扱う
  end?: DateParts;
  teamSize: string;
  position: string;
  tags: string[];
  overview: string;
  responsibilities: string[];
  achievements: string[];
};

export const projects: Project[] = [
  {
    title: "RAG専用のドキュメント前処理システムの研究開発",
    start: { year: 2024, month: 4 },
    end: { year: 2026, month: 4 },
    teamSize: "4人~5人",
    position: "開発エンジニア",
    tags: [
      "Python",
      "FastAPI",
      "Gradio",
      "LangChain",
      "PostgreSQL(pgvector)",
      "AzureOpenAI",
      "AWS ECR",
    ],
    overview:
      "PDFの社内ドキュメントを読み込んで、RAGのベクトル検索用のチャンクテキストを自動生成するシステムの開発にエンジニアとして携わりました。特にPDF内の図や表のテキスト化によるマルチモーダル化に力を入れました。",
    responsibilities: [
      "実装全般（AWS ECRを利用したDockerイメージのビルド・登録・配布，デモ用RAGシステム＆UI作成）",
      "別ツールとの精度比較検証",
      "週次定例での実装状況や検証結果の報告",
      "PoC段階での精度改善の手法提案と実装、バグ改修",
    ],
    achievements: ["未設定"],
  },
  {
    title: "RAG手法調査案件",
    start: { year: 2025, month: 5 },
    end: { year: 2025, month: 8 },
    teamSize: "8人",
    position: "調査員",
    tags: [
      "Python",
      "Streamlit",
      "LangChain",
      "ChromaDB",
      "AmazonBedrock",
      "AzureOpenAI",
      "BM25",
      "Ragas",
      "Neo4j",
    ],
    overview:
      "RAGシステムにおける，手法についての調査と精度比較検証を行う案件に作業メンバーとして携わりました。",
    responsibilities: ["未設定"],
    achievements: ["未設定"],
  },
  {
    title: "商標利用の申請フローの自動化ツールの開発",
    start: { year: 2026, month: 4 },
    end: { year: 2026, month: 8 },
    teamSize: "5人",
    position: "エンジニア",
    tags: ["PowerApps", "PowerAutomate", "Dataverse", "MicrosoftForms"],
    overview:
      "Microsoft Power Platformを用いた，商標利用の申請フローの自動化ツールの開発",
    responsibilities: [
      "設計業務（テーブル設計，機能設計書作成）",
      "実装全般（テーブル構築、フロー構築，画面構築）",
      "単体テスト，結合テスト",
      "手順書作成",
      "日次定例での作業進捗報告",
    ],
    achievements: ["未設定"],
  },
];

export type Work = {
  title: string;
  description: string;
  tags: string[];
  period?: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const works: Work[] = [
  {
    title: "ポートフォリオサイト",
    description:
      "このサイト。経歴・プロジェクト・スキルなどをまとめた静的サイトで，GitHub Actionsでlint・型チェック・ビルドを行い，GitHub Pagesへ自動デプロイ",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "GitHub Actions",
      "GitHub Pages",
    ],
    period: "2026年9月 -",
    link: "https://chansuga.github.io/my-portfolio/",
    repo: "https://github.com/Chansuga/my-portfolio",
    image: "/portfolio.webp",
  },
  {
    title: "資産管理アプリ",
    description:
      "家族・個人の資産を月次で管理するWebアプリ。Owner・口座ごとの月次残高を入力し，金融資産の推移をグラフと表で可視化。JSONでのエクスポート/インポートにも対応",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "Prisma",
      "SQLite",
      "Recharts",
      "Docker",
    ],
    period: "2026年6月 -",
    repo: "https://github.com/Chansuga/personal_finance_app",
  },
];

export type SkillEntry = {
  name: string;
  items?: string[];
};

export type SkillGroup = {
  category: string;
  items: SkillEntry[];
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      {
        name: "TypeScript / JavaScript",
        items: ["React", "Next.js", "Tailwind CSS"],
      },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", items: ["FastAPI", "LangChain", "LangGraph"] },
      { name: "Node.js", items: ["REST API"] },
    ],
  },
  {
    category: "Database",
    items: [{ name: "PostgreSQL" }, { name: "ChromaDB" }],
  },
  {
    category: "Cloud",
    items: [
      {
        name: "Azure",
        items: [
          "Azure OpenAI Service",
          "Virtual Machines (VM)",
          "Application Gateway",
          "Network Security Group (NSG)",
        ],
      },
    ],
  },
  {
    category: "Dev Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "VSCode" },
      { name: "DevContainer" },
      { name: "uv" },
    ],
  },
];

export type Certification = {
  name: string;
  org: string;
  acquired: DateParts;
};

export const certifications: Certification[] = [
  {
    name: "ITパスポート試験",
    org: "IPA(独立行政法人情報処理推進機構)",
    acquired: { year: 2023, month: 10 },
  },
  {
    name: "G検定(ジェネラリスト検定)",
    org: "JDLA(日本ディープラーニング協会)",
    acquired: { year: 2023, month: 5, day: 13 },
  },
  {
    name: "Oracle Certified Java Programmer, Bronze SE",
    org: "Oracle",
    acquired: { year: 2024, month: 1, day: 13 },
  },
  {
    name: "普通自動車第一種運転免許",
    org: "公安委員会",
    acquired: { year: 2019, month: 8 },
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    org: "Amazon Web Services",
    acquired: { year: 2023, month: 8 },
  },
  {
    name: "AWS Certified Cloud Practitioner",
    org: "Amazon Web Services",
    acquired: { year: 2023, month: 7 },
  },
];
