const imsi = process.env.PUBLIC_URL;
// 메뉴 텍스트
export const MENU = {
  title: [
    "ABOUT US",
    "RPM SOLUTION",
    "IR INFORMATION",
    "NEWS",
    "CONTACT US",
    // "SERVICE",
    // "RESEARCH",
    // "CTS",
  ],
  link: [
    `${imsi}/aboutus/`,
    `${imsi}/rpmsolution/`,
    `${imsi}/irinformation/`,
    `${imsi}/news/`,
    `${imsi}/contactus/`,
    // `${imsi}/service/`,
    // `${imsi}/research/`,
    // `${imsi}/cts/`,
  ],
  linkpath: [
    `/aboutus/`,
    `/rpmsolution/`,
    `/irinformation/`,
    `/news/`,
    `/contactus/`,
    // `/service/`,
    // `/research/`,
    // `/cts/`,
  ],
  hashId: [
    "aboutus",
    "rpmsolution",
    "irinformation",
    "news",
    "contactus",
    // "service",
    // "research",
    // "cts",
  ],
  smallMenu: [
    {
      title: ["ABOUT US"],
      link: [`aboutus`],
    },
    {
      title: ["RPM SOLUTION"],
      link: [`rpmsolution`],
    },
    {
      title: ["IR INFORMATION"],
      link: [`irinformation`],
    },
    {
      title: ["NEWS"],
      link: [`news`],
    },
    {
      title: ["CONTACT US"],
      link: [`contactus`],
    },
    // {
    //   title: ["WHO WE ARE", "HERINGS TEAM", "PARTNERS & INVESTORS"],
    //   link: [`whoweare`, `heringsteam`, `researchpartners`],
    // },
    // {
    //   title: [
    //     "DIGITAL HEALTHCARE SERVICE PLATFORM",
    //     "TELE-HEALTHCARE SERVICE PLATFORM",
    //   ],
    //   link: [`digitalcareservice`, `telehealthcareservice`],
    // },
    // {
    //   title: [
    //     "NUTRITION",
    //     "SYMPTOM MANAGEMENT",
    //     "EXERCISE",
    //     "RISK PREDICTION",
    //     "DRUG ADHERENCE",
    //     "AI ALGORITHMS",
    //     "DRUG ADVERSE EVENTS",
    //   ],
    //   link: [
    //     `nutrition`,
    //     `symptommanagement`,
    //     `exercise`,
    //     `riskprediction`,
    //     `drugadherence`,
    //     `aialgorithms`,
    //     `drugadverseevents`,
    //   ],
    // },
    // {
    //   title: [
    //     "CLINICAL TRIAL DESIGN",
    //     "DATA MANAGEMENT",
    //     "STATISTICAL ANALYSIS",
    //   ],
    //   link: [`clinicaltrialdesign`, `datamanagement`, `statisticalanalysis`],
    // },
    // {
    //   title: ["NEWS RELEASE", "IR INFORMATION", "INTELLECTUAL PROPERTY"],
    //   link: [`newsrelease`, `irinformation`, "intellectualproperty"],
    // },
    // {
    //   title: ["CAREER", "CONTACT US"],
    //   link: [`career`, `contact`],
    // },
  ],
};
