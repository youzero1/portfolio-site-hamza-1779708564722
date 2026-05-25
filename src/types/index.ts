export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  category: string;
  tags: string[];
  cover: string;
  description: string;
  role: string;
  link?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
};

export type Skill = {
  name: string;
  level: number;
};
