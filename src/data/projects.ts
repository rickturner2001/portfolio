export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "FlowTalk",
    techs: ["Next.js", "Prisma", "Stripe"],
    link: "https://flow-talk.vercel.app/",
  },
  {
    title: "Paper-search",
    techs: ["Next.js", "Trpc", "Prisma"],
    link: "https://github.com/rickturner2001/paper-search",
  },

  {
    title: "netracer.js",
    techs: ["Next", "Prisma", "Trpc", "Sockets"],
    link: "https://github.com/rickturner2001/netracer.js",
  },
  {
    title: "Tealade e-commerce",
    techs: ["Remix"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
