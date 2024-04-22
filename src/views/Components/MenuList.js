const imsi = process.env.PUBLIC_URL;
// 메뉴 텍스트
export const MENU = {
  title: [
    "ABOUT US",
    "RPM SOLUTION",
    "SERVICE",
    "RESEARCH",
    "CTS",
    "NEWS",
    "CONTACT US",
  ],
  link: [
    `${imsi}/aboutus/`,
    `${imsi}/rpmsolution/`,

    `${imsi}/service/`,
    `${imsi}/research/`,
    `${imsi}/cts/`,
    `${imsi}/news/`,
    `${imsi}/contactus/`,
  ],
  linkpath: [
    `/aboutus/`,
    `/rpmsolution/`,
    `/service/`,
    `/research/`,
    `/cts/`,
    `/news/`,
    `/contactus/`,
  ],
  hashId: [
    "aboutus",
    "rpmsolution",
    "service",
    "research",
    "cts",
    "news",
    "contactus",
  ],
  smallMenu: [
    {
      title: ["WHO WE ARE", "HERINGS TEAM", "PARTNERS & INVESTORS"],
      link: [`whoweare`, `heringsteam`, `researchpartners`],
    },
    {
      title: [
        "DIGITAL HEALTHCARE SERVICE PLATFORM",
        "TELE-HEALTHCARE SERVICE PLATFORM",
      ],
      link: [`digitalcareservice`, `telehealthcareservice`],
    },
    {
      title: [
        "NUTRITION",
        "SYMPTOM MANAGEMENT",
        "EXERCISE",
        "RISK PREDICTION",
        "DRUG ADHERENCE",
        "AI ALGORITHMS",
        "DRUG ADVERSE EVENTS",
      ],
      link: [
        `nutrition`,
        `symptommanagement`,
        `exercise`,
        `riskprediction`,
        `drugadherence`,
        `aialgorithms`,
        `drugadverseevents`,
      ],
    },
    {
      title: [
        "CLINICAL TRIAL DESIGN",
        "DATA MANAGEMENT",
        "STATISTICAL ANALYSIS",
      ],
      link: [`clinicaltrialdesign`, `datamanagement`, `statisticalanalysis`],
    },
    {
      title: ["NEWS RELEASE", "IR INFORMATION", "INTELLECTUAL PROPERTY"],
      link: [`newsrelease`, `irinformation`, "intellectualproperty"],
    },
    {
      title: ["CAREER", "CONTACT US"],
      link: [`career`, `contact`],
    },
  ],
};
