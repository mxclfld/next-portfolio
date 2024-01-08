export type ProjectType = {
  id: string;
  title: string;
  repository: string;
  description: string;
  skills: string[];

  img: string | null;
  deploy: string | null;

  startDate: string | null;
  endDate: string;
};