export const CVData = {
  personalData: {
    name: "Kapil Gupta",
    title: "Senior Software Engineer",
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
      title: "Objective",
      content:
        "To achieve high career growth through a continuous learning process and keep myself dynamic, visionary and competitive with the changing dynamics of tech industry.",
      icon: "globe"
    },
    {
      type: "text",
      title: "Professional Synopsis",
      content: `5+ Years of extensive professional software development experience as Software Engineer in medium
to large sized projects in the area of Design, Development and Analysis.
\n 1) Strong Exprerience in developing applications using Spring, Java, Golang, Nodejs and SQL.
\n 2) Strong knowledge of Object-Oriented methodologies, analysis and Design, Data Structures & Algorithm.
\n 4) Ability to prioritize and schedule tasks and solve complex problems applying systematic approach.
\n 5) Positive outlook and learning attitude, eager to learn and work with latest and best technologies.`,
      icon: "usertie"
    },

    {
      type: "common-list",
      title: "Education",
      icon: "graduation",
      items: [
        {
          title: "Electronics and Communication Engineering - B.E(H)",
          authority:
            "Netaji Subhas Institute of Technology, Delhi University, New Delhi",
          authorityWebSite: "http://www.nsit.ac.in/",
          rightSide: "2010 - 2014"
        }
      ]
    },
    {
      type: "experiences-list",
      title: "Experiences",
      description: "",
      icon: "archive",
      items: [
        {
          title: "Senior Software Engineer",
          company: "Sirion Labs Pvt Ltd",
          description:
            "Working as a part of API Integrations team, Responsible for third part integrations with the Sirion Application including Login Mechanisms. ",
          companyWebSite: "https://www.sirionlabs.com",
          companyMeta: "",
          datesBetween: "Feb-2019 - Present",
          descriptionTags: ["Java", "Spring", "Golang", "Nodejs", "Ibatis"]
        },
        {
          title: "Application Developer III",
          company: "Oracle India Pvt. Ltd.",
          description: `Worked as part of Projects Portfolio Management(PPM) for Oracle Cloud Applications. Majorly involved in development activities like feature development or enhancement and bug fixing using Java Based framework (ADF) and PL/SQL using a test driven development approach. Worked on various projects from scratch.`,
          companyWebSite: "https://oracle.com",
          companyMeta: "Hyderabad",
          datesBetween: "Oct-2015 - Jan-2019",
          descriptionTags: ["Java", "ADF", "PL/SQL"]
        },
        {
          title: "Associate Engineer",
          company: "Qualcomm India Pvt. Ltd.",
          description: `Worked in IP team, designed and maintained framework to run functional and analysis tests on SRAMs using PERL language. Involved in Memory Compiler Development for 14nm and 28 nm technologies. Implemented and Automated different test procedures for fast and easy analysis of memory circuits.`,
          companyWebSite: "https://qualcomm.com",
          companyMeta: "Bangalore",
          datesBetween: "Jun-2012 - Oct-2015",
          descriptionTags: ["PERL", "UNIX"]
        }
      ]
    },
    {
      type: "projects-list",
      title: "Projects",
      description: "",
      icon: "tasks",
      groups: [
        {
          sectionHeader: "Sirion Labs Pvt. Ltd.",
          description: "",
          items: [
            {
              title: "Microsoft Teams App add-in",
              projectUrl: "",
              description:
                "Created a Microsoft Teams add-in, which connects to Nodejs based backend to communicate with the regisered users. This feature will be used to send notifications and reminders to the users regarding upcoming tasks and meetings."
            },
            {
              title: "AuditLog Service in Golang",
              projectUrl: "",
              description:
                "Designed and developed an AuditLog service to allow admin to audit the tasks done by the users on various entities. Service was created using Golang and elastic as a datasource to allow search capability on certain fields."
            },
            {
              title: "Two Factor Authentication Using Time based OTP",
              projectUrl: "",
              description:
                "Developed the integration for the Two Factor Authentication for the sirion application, adding extra layer of security to the login mechanism. User can enable/ disable the extra layer of authentication."
            },
            {
              title: "Outlook Plugin Integration Service",
              projectUrl: "",
              description:
                "Designed and developed a service to communicate with the Outlook plugin created for the Sirion CLM application for Governance Body Meetings. This plugin allows users to manage governance meetings from the outlook plugin without accesssing the application."
            },
            {
              title: "JWT Integration for Login",
              projectUrl: "",
              description:
                "Part fo the team that integrated JSON Web tokens to allow stateless authentication for Sirion Application. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access resources that are permitted with that token."
            }
          ]
        },
        {
          sectionHeader: "Oracle India Pvt. Ltd.",
          description: "",
          items: [
            {
              title: "File Based Loader for Importing Rates",
              projectUrl: "",
              description: `Developed a file based loader which can be used by customer to
                    import rates data in Oracle Cloud Applications. Coded various validations and business rules in Java, along with
                    error reporting functionality allowing users to correct the data and import again easily.`
            },
            {
              title: "Rapid Implementation",
              projectUrl: "",
              description: `Developed an Excel based solution which can be used by customer to create quick
                    setup data in Oracle Cloud Applications. This feature is being used to get the new customer up and running with the PPM offering.`
            },
            {
              title: "Rate Overrides PLSQL API",
              projectUrl: "",
              description: `Developed a PLSQL based API to create volume data for rate overrides in the
                   system. It involved handling bulk data and performing business validations on huge volume of data. Worked on query optimization and tuning to achieve optimal performance.`
            }
          ]
        }
      ]
    },
    {
      type: "common-list",
      title: "Publications & Achievements",
      description: "",
      icon: "comments",
      items: [
        {
          title: "India Educators’ Conference (TIIEC), 2013",
          authority: "Texas Instruments",
          authorityMeta: "Presenter",
          description: `Designed and developed a device that can be attached to existing electricity meters in our house and logs real time energy usage for the user. It can be used to monitor real time energy usage data and show graphical data to the user.`
        },
        {
          title: "Oracle Cloud Applications Hackathon, Oct-2017",
          authority: "Oracle Corporation",
          authorityMeta: "Winner",
          description: `created a prototype for Oracle Fusion Applications Assistant to allow the user to use the application in interactive manner with documentation feedback and error handling if user is facing issues while using the application`
        },
        {
          title: "3 Qualstar Awards 2015",
          authority: "Qualcomm India Pvt. Ltd.",
          description: `Awarded Qualstar awards for exceptional performance in ongoing projects.`
        },
        {
          title: "Merit Certificate and Scholarship",
          authority: "NSIT, Dwarka, New Delhi",
          description: `Awarded Merit Certificate and tuition fee waiver in all 4years of B.E for outstanding academic performance.`
        }
      ]
    },
    {
      type: "tag-list",
      title: "Skills Proficiency",
      icon: "rocket",
      items: [
        "Java",
        "Spring",
        "SQL",
        "Git",
        "Golang",
        "Nodejs",
        "React(Beginner)"
      ]
    },
    {
      type: "tag-list",
      title: "Hobbies & Interests",
      icon: "cubes",
      items: [
        "Lawn Tennis",
        "Table Tennis",
        "Badminton",
        "Listening to Music",
        "Swimming"
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
          authority: "Hindi",
          authorityMeta: "Mother tongue"
        }
      ]
    }
  ]
};
