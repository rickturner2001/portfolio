type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "taargafederico01@gmail.com",
  title: "Hi, I’m Rick 👋",
  description:
    "Hey there, I'm an *Italian frontend developer* with over *2 years* of web experience. I am currently working with *NextJS, Typescript and Remix*. Outside of my work I like playing the guitar and learning about automotive engineering",
  socials: [
    {
      label: "Github",
      link: "https://github.com/rickturner2001",
    },
  ],
};

export default presentation;
