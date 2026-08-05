// Offer letter catalogue — one generic PDF per internship profile / position.
// To add or replace a letter: drop the PDF into `public/offer-letters/` using the
// exact `file` name below. No other code changes are required.
// Personalised letters are sent manually after enrolment.

export type OfferLetter = {
  /** Unique slug — also used as the downloaded file name. */
  id: string;
  /** Internship profile / position shown on the card. */
  position: string;
  /** Short helper line (domain, track, duration...). */
  description: string;
  /** Path inside /public. Keep it relative so any custom domain works. */
  file: string;
};

export const OFFER_LETTERS: OfferLetter[] = [
  {
    id: "full-stack-development",
    position: "Full-Stack Development",
    description: "React, Node.js & modern web engineering track",
    file: "/offer-letters/full-stack-development.pdf",
  },
  {
    id: "frontend-development",
    position: "Frontend Development",
    description: "UI engineering, React & responsive design track",
    file: "/offer-letters/frontend-development.pdf",
  },
  {
    id: "backend-development",
    position: "Backend Development",
    description: "APIs, databases & server-side architecture track",
    file: "/offer-letters/backend-development.pdf",
  },
  {
    id: "data-analytics",
    position: "Data Analytics",
    description: "SQL, Python & business intelligence track",
    file: "/offer-letters/data-analytics.pdf",
  },
  {
    id: "data-science",
    position: "Data Science",
    description: "Statistics, machine learning & modelling track",
    file: "/offer-letters/data-science.pdf",
  },
  {
    id: "cloud-engineering",
    position: "Cloud Engineering",
    description: "AWS / Azure, containers & infrastructure track",
    file: "/offer-letters/cloud-engineering.pdf",
  },
  {
    id: "devops-engineering",
    position: "DevOps Engineering",
    description: "CI/CD, automation & release engineering track",
    file: "/offer-letters/devops-engineering.pdf",
  },
  {
    id: "software-testing",
    position: "Software Testing / QA",
    description: "Manual & automation testing track",
    file: "/offer-letters/software-testing.pdf",
  },
  {
    id: "cyber-security",
    position: "Cyber Security",
    description: "Application security & threat analysis track",
    file: "/offer-letters/cyber-security.pdf",
  },
  {
    id: "mobile-app-development",
    position: "Mobile App Development",
    description: "Android, iOS & cross-platform track",
    file: "/offer-letters/mobile-app-development.pdf",
  },
  {
    id: "ui-ux-design",
    position: "UI/UX Design",
    description: "Product design, prototyping & design systems track",
    file: "/offer-letters/ui-ux-design.pdf",
  },
  {
    id: "artificial-intelligence",
    position: "Artificial Intelligence / ML",
    description: "AI models, NLP & applied ML track",
    file: "/offer-letters/artificial-intelligence.pdf",
  },
  {
    id: "business-analytics",
    position: "Business Analyst",
    description: "Requirements, process mapping & reporting track",
    file: "/offer-letters/business-analytics.pdf",
  },
  {
    id: "digital-marketing",
    position: "Digital Marketing",
    description: "SEO, campaigns & analytics track",
    file: "/offer-letters/digital-marketing.pdf",
  },
  {
    id: "human-resources",
    position: "Human Resources",
    description: "Recruitment, onboarding & HR operations track",
    file: "/offer-letters/human-resources.pdf",
  },
];
