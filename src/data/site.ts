export const profile = {
  name: "須賀 勇貴",
  role: "Software Engineer",
  tagline:
    "I build fast, reliable, and thoughtfully designed web applications.",
  bio: "大学・大学院では素粒子理論物理学を専攻していました。大学院時代にAI技術に魅了され、独学でAI・機械学習とPythonを学習。新卒でIT企業に入社し、現在は生成AIを活用した開発を行う事業部で、チャットボットシステムやRAGシステムの実装、精度改善、精度比較検証などに取り組んでいます。",
  location: "Saitama, Japan",
  avatar: "/avatar.png",
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
    role: "在籍中",
    period: "2024年4月 - 現在",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "プロジェクト名 1",
    description:
      "このプロジェクトの概要、解決した課題、使用技術について説明します。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://example.com",
    repo: "https://github.com/yourname/project-one",
  },
  {
    title: "プロジェクト名 2",
    description:
      "このプロジェクトの概要、解決した課題、使用技術について説明します。",
    tags: ["React", "Node.js", "PostgreSQL"],
    repo: "https://github.com/yourname/project-two",
  },
  {
    title: "プロジェクト名 3",
    description:
      "このプロジェクトの概要、解決した課題、使用技術について説明します。",
    tags: ["Python", "FastAPI"],
    link: "https://example.com",
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
  note?: string;
};

export const certifications: Certification[] = [
  {
    name: "ITパスポート試験",
    org: "IPA(独立行政法人情報処理推進機構)",
    note: "2023年取得",
  },
  {
    name: "G検定(ジェネラリスト検定)",
    org: "JDLA(日本ディープラーニング協会)",
    note: "2023年6月取得",
  },
  {
    name: "Oracle Certified Java Programmer, Bronze SE",
    org: "Oracle",
    note: "2023年取得",
  },
  {
    name: "普通自動車第一種運転免許",
    org: "公安委員会",
    note: "2019年8月取得",
  },
  {
    name: "AWS Certified Solutions Architect - Associate",
    org: "Amazon Web Services",
    note: "2023年8月取得",
  },
];
