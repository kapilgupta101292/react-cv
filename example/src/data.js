export const CVData = {
  personalData: {
    name: "Kapil Gupta",
    title: "Senior Software Developer",
    image:
      "https://raw.githubusercontent.com/kapilgupta101292/react-cv/master/example/src/circular_small.png",
    contacts: [
      { type: "email", value: "kapilguptansit@gmail.com" },
      { type: "phone", value: "+919686262560" },
      { type: "location", value: "New Delhi" },
      { type: "linkedin", value: "linkedin.com/in/kapilguptansit" },
      { type: "github", value: "github.com/kapilgupta101292" }
    ]
  },
  sections: [
    {
      type: "text",
      title: "Career Profile",
      content: `&lt;p&gt;To achieve high carrier growth through a continuous learning process and keep myself dynamic, visionary and competitive with the changing scenario of the world.
      &lt;ol&gt;&lt;li&gt;ListItem1&lt;/li&gt;&lt;ol&gt;
      &lt;/p&gt;`,
      icon: "usertie"
    },
    {
      type: "common-list",
      title: "Education",
      icon: "graduation",
      items: [
        {
          title: "Computer Engineering (BS)",
          authority: "University",
          authorityWebSite: "https://sample.edu",
          rightSide: "2013 - 2017"
        },
        {
          title: "Some Department (PHD)",
          authority: "Another University",
          authorityWebSite: "https://sample.edu",
          rightSide: "2017 - Present"
        }
      ]
    },
    {
      type: "experiences-list",
      title: "Experiences",
      description: "Optional",
      icon: "archive",
      items: [
        {
          title: "Lead Software Developer",
          company: "Some Company Example INC",
          description: "I'm working as a lead developer yeeeey!",
          companyWebSite: "http://somecompanyexample.com",
          companyMeta: "",
          datesBetween: "2017.10 - Present",
          descriptionTags: ["Javascript", "React"]
        },
        {
          title: "Software Developer",
          company: "Some Company Example INC",
          description: "I'm using ReactJS and working as a front-end developer",
          companyWebSite: "http://somecompanyexample.com",
          companyMeta: "Little info about company",
          datesBetween: "2016.8 - 2017.10"
        },
        {
          title: "Intern",
          company: "Some Software Example INC",
          description: "I was warming up.",
          companyWebSite: "http://someexamplecompany.com",
          companyMeta: "SF USA",
          datesBetween: "2012.06 - 2012.10"
        }
      ]
    },
    {
      type: "projects-list",
      title: "Projects",
      description: "Optional",
      icon: "tasks",
      groups: [
        {
          sectionHeader: "Company Name",
          description: "Optional",
          items: [
            {
              title: "Project",
              projectUrl: "optional",
              description: "Optional"
            },
            {
              title: "Project",
              projectUrl: "optional",
              description: "Optional"
            },
            {
              title: "Project",
              projectUrl: "optional",
              description: "Optional"
            }
          ]
        }
      ]
    },
    {
      type: "common-list",
      title: "Conferences & Certificates",
      description: "",
      icon: "comments",
      items: [
        {
          title: "Some Conferences / 2019",
          authority: "SomeConf",
          authorityWebSite: "https://www.someconf.somesome"
        },
        {
          title: "Some Conferences / 2019",
          authority: "SomeConf",
          authorityMeta: "Speaker",
          authorityWebSite: "https://www.someconf.somesome",
          rightSide: "test"
        },
        {
          title: "Some Conferences / 2012",
          authorityMeta: "Speaker"
        }
      ]
    },
    {
      type: "common-list",
      title: "Languages",
      icon: "language",
      items: [
        {
          authority: "English",
          authorityMeta: "Professional"
        },
        {
          authority: "Spanish",
          authorityMeta: "Beginner"
        }
      ]
    },
    {
      type: "tag-list",
      title: "Skills Proficiency",
      icon: "rocket",
      items: ["React", "Javascript", "CSS", "SQL", "SomeTech", "CoolTech"]
    },
    {
      type: "tag-list",
      title: "Hobbies & Interests",
      icon: "cubes",
      items: ["Photography", "Poetry"]
    }
  ]
};
