const imsi = process.env.PUBLIC_URL;
// 메뉴 텍스트
export const MENU = {
  title: ["ABOUT US", "SERVICE", "RESEARCH", "CTS", "NEWS & IR", "CONTACT US"],
  link: [
    `${imsi}/aboutus/#aboutus`,
    `${imsi}/service/#service`,
    `${imsi}/research/#research`,
    `${imsi}/cts/#cts`,
    `${imsi}/news/#news`,
    `${imsi}/contactus/#contactus`,
  ],
  linkpath: [
    `/aboutus/`,
    `/service/`,
    `/research/`,
    `/cts/`,
    `/news/`,
    `/contactus/`,
  ],
  smallMenu: [
    {
      title: ["WHO WE ARE", "HERINGS TEAM", "PARTNERS & INVESTORS"],
      link: [
        `whoweare`,
        `heringsteam`,
        `researchpartners`,
      ],
    },
    {
      title: [
        "DIGITAL HEALTHCARE SERVICE PLATFORM",
        "TELE-HEALTHCARE SERVICE PLATFORM",
      ],
      link: [
        `digitalcareservice`,
        `telehealthcareservice`,
      ],
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
      link: [
        `clinicaltrialdesign`,
        `datamanagement`,
        `statisticalanalysis`,
      ],
    },
    {
      title: ["NEWS RELEASE", "IR INFORMATION"],
      link: [`newsrelease`, `irinformation`],
    },
    {
      title: ["CAREER", "CONTACT US"],
      link: [`career`, `contact`],
    },
  ],
};
