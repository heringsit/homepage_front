const imsi = process.env.PUBLIC_URL;
// 메뉴 텍스트
export const MENU = {
  title: ["ABOUT US", "SERVICE", "RESEARCH", "CTS", "NEWS & IR", "CONTACT US"],
  link: [
    `${imsi}/aboutus/#aboutus`,
    `${imsi}/service/#service`,
    `${imsi}/research/#research`,
    `${imsi}/crs/#crs`,
    `${imsi}/news/#news`,
    `${imsi}/contactus/#contactus`,
  ],
  smallMenu: [
    {
      title: ["WHO WE ARE", "HERINGS TEAM", "PARTNERS & INVESTORS"],
      link: [
        `${imsi}/aboutus/#whoweare`,
        `${imsi}/aboutus/#heringsteam`,
        `${imsi}/aboutus/#researchpartners`,
      ],
    },
    {
      title: [
        "DIGITAL HEALTHCARE SERVICE PLATFORM",
        "TELE-HEALTHCARE SERVICE PLATFORM",
      ],
      link: [
        `${imsi}/service/#digitalcareservice`,
        `${imsi}/service/#telehealthcareservice`,
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
      // link 수정해야함
      link: [
        `${imsi}/research/#nutrition`,
        `${imsi}/research/#symptommanagement`,
        `${imsi}/research/#exercise`,
        `${imsi}/research/#riskprediction`,
        `${imsi}/research/#drugadherence`,
        `${imsi}/research/#aialgorithms`,
        `${imsi}/research/#drugadverseevents`,
      ],
    },
    {
      title: [
        "CLINICAL TRIAL DESIGN",
        "DATA MANAGEMENT",
        "STATISTICAL ANALYSIS",
      ],
      link: [
        `${imsi}/crs/#clinicaltrialdesign`,
        `${imsi}/crs/#datamanagement`,
        `${imsi}/crs/#statisticalanalysis`,
      ],
    },
    {
      title: ["NEWS RELEASE", "IR INFORMATION"],
      link: [`${imsi}/news/#newsrelease`, `${imsi}/news/#irinformation`],
    },
    {
      title: ["CAREER", "CONTACT US"],
      link: [`${imsi}/contactus/#career`, `${imsi}/contactus/#contact`],
    },
  ],
};