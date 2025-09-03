import { PrismaClient, JobClass, JobType, QuestionType } from "@prisma/client";

const prisma = new PrismaClient();

// 1. Define a type for our question data
type QuestionData = {
  text: string;
  type: QuestionType;
  isRequired: boolean;
  options?: string[]; // The '?' makes this property optional
};

// 2. Define a type for our job data, using the QuestionData type
type JobData = {
  company: string;
  title: string;
  location: string;
  type: JobType;
  salary: string;
  jobClass: JobClass;
  summary: string;
  qualifications: string;
  responsibilities: string;
  benefits: string | null;
  tags: string[];
  questions: QuestionData[];
};

// 3. Apply the type to our jobsData array
const jobsData: JobData[] = [
  {
    company: "InnovateTech Solutions",
    title: "Senior Software Engineer (Backend)",
    location: "San Francisco, CA",
    type: JobType.FULL_TIME,
    salary: "$140,000 - $180,000 per year",
    jobClass: JobClass.IT,
    summary:
      "Join our pioneering backend team to design, develop, and deploy scalable microservices that power our core platform. You will work with cutting-edge technologies to solve complex problems and drive our product forward.",
    qualifications:
      "• 5+ years of professional experience in backend development.\n• Proficiency in Node.js, Go, or Python.\n• Strong understanding of system design, data structures, and algorithms.\n• Experience with Docker, Kubernetes, and cloud platforms like AWS or GCP.\n• Bachelor’s degree in Computer Science or a related field.",
    responsibilities:
      "• Architect and build robust, scalable, and reliable backend services.\n• Collaborate with front-end developers, product managers, and designers.\n• Write clean, maintainable, and well-tested code.\n• Mentor junior engineers and participate in code reviews to maintain high standards.\n• Troubleshoot and debug production issues.",
    benefits:
      "Comprehensive health, dental, and vision insurance. 401(k) with company match. Unlimited PTO. Professional development stipend. Free daily lunch.",
    tags: ["Node.js", "Backend", "AWS", "Microservices", "Remote-friendly"],
    questions: [
      {
        text: "Are you legally authorized to work in the United States?",
        type: QuestionType.YES_NO,
        isRequired: true,
      },
      {
        text: "What are your salary expectations for this role (annual USD)?",
        type: QuestionType.NUMBER,
        isRequired: true,
      },
      {
        text: "How many years of professional experience do you have with cloud platforms like AWS, GCP, or Azure?",
        type: QuestionType.NUMBER,
        isRequired: true,
      },
    ],
  },
  {
    company: "GrowthLeap Marketing",
    title: "Digital Marketing Manager",
    location: "New York, NY",
    type: JobType.FULL_TIME,
    salary: "$85,000 - $110,000 per year",
    jobClass: JobClass.SALES,
    summary:
      "We are seeking an experienced Digital Marketing Manager to develop, implement, track, and optimize our digital marketing campaigns across all channels. You should have a strong grasp of current marketing tools and strategies.",
    qualifications:
      "• Proven working experience in digital marketing for 4+ years.\n• Demonstrable experience leading and managing SEO/SEM, marketing database, email, social media and/or display advertising campaigns.\n• Solid knowledge of website analytics tools (e.g., Google Analytics, NetInsight, WebTrends).\n• Experience in setting up and optimizing Google Ads campaigns.",
    responsibilities:
      "• Plan and execute all digital marketing, including SEO/SEM, marketing database, email, and social media.\n• Measure and report performance of all digital marketing campaigns.\n• Identify trends and insights, and optimize spend and performance based on the insights.\n• Brainstorm new and creative growth strategies.",
    benefits:
      "Competitive salary, performance bonuses, health insurance, flexible working hours, and a vibrant office culture.",
    tags: ["Marketing", "SEO", "SEM", "Google Ads", "Social Media"],
    questions: [
      {
        text: "Please provide a link to your portfolio or a campaign you are proud of.",
        type: QuestionType.TEXT,
        isRequired: false,
      },
      {
        text: "Which marketing automation tool are you most proficient with?",
        type: QuestionType.MULTIPLE_CHOICE,
        isRequired: true,
        options: ["HubSpot", "Marketo", "Pardot", "Other"],
      },
    ],
  },
  {
    company: "BuildRight Constructions",
    title: "Construction Project Manager",
    location: "Austin, TX",
    type: JobType.CONTRACT,
    salary: "$90 - $120 per hour",
    jobClass: JobClass.CONSTRUCTION,
    summary:
      "BuildRight Constructions is looking for a skilled Construction Project Manager to oversee a large-scale commercial building project. This is a 12-month contract with a possibility of extension.",
    qualifications:
      "• 7+ years of experience in construction management.\n• PMP or equivalent certification is a plus.\n• Thorough knowledge of construction procedures, materials, and project management principles.\n• Familiarity with construction/ project management software.",
    responsibilities:
      "• Collaborate with engineers, architects etc. to determine the specifications of the project.\n• Negotiate contracts with external vendors to reach profitable agreements.\n• Obtain permits and licenses from appropriate authorities.\n• Supervise the work of laborers, mechanics etc. and give them guidance when needed.",
    benefits: null, // Set to null since 'benefits' in schema is optional (String?)
    tags: ["Construction", "Management", "Commercial", "Contract"],
    questions: [
      {
        text: "Do you have a PMP certification?",
        type: QuestionType.YES_NO,
        isRequired: false,
      },
      {
        text: "Describe your experience managing construction projects valued at over $20 million.",
        type: QuestionType.TEXT,
        isRequired: true,
      },
      {
        text: "When are you available to start?",
        type: QuestionType.TEXT,
        isRequired: true,
      },
    ],
  },
  // ... (the rest of the jobsData array remains the same)
  {
    company: "HelpDesk Heroes",
    title: "Customer Support Specialist",
    location: "Remote",
    type: JobType.PART_TIME,
    salary: "$20 - $25 per hour",
    jobClass: JobClass.SUPPORT,
    summary:
      "Join our team as a remote Customer Support Specialist. You will be the first point of contact for our users, providing helpful information, answering questions, and responding to complaints.",
    qualifications:
      "• 1+ year of experience in a customer service role.\n• Excellent communication and problem-solving skills.\n• Ability to work independently in a remote environment.\n• Experience with help desk software like Zendesk or Intercom is a plus.",
    responsibilities:
      "• Respond to customer queries in a timely and accurate way, via phone, email, or chat.\n• Identify customer needs and help customers use specific features.\n• Update our internal databases with information about technical issues and useful discussions with customers.",
    benefits: "Flexible schedule, work-from-home stipend.",
    tags: ["Customer Support", "Remote", "Part-Time", "Zendesk"],
    questions: [
      {
        text: "This is a remote position. Do you have a quiet workspace and reliable high-speed internet?",
        type: QuestionType.YES_NO,
        isRequired: true,
      },
      {
        text: "What time zone are you located in?",
        type: QuestionType.TEXT,
        isRequired: true,
      },
    ],
  },
  {
    company: "CloudSphere Inc.",
    title: "DevOps Engineer",
    location: "Remote",
    type: JobType.FULL_TIME,
    salary: "$130,000 - $160,000 per year",
    jobClass: JobClass.IT,
    summary:
      "CloudSphere Inc. is looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. You will work on automating our operational processes, improving system reliability, and scaling our platform.",
    qualifications:
      "• Strong experience with AWS, GCP, or Azure.\n• Proficient with infrastructure as code (Terraform, CloudFormation).\n• Experience with CI/CD tools (Jenkins, GitLab CI, CircleCI).\n• Solid understanding of containerization and orchestration (Docker, Kubernetes).",
    responsibilities:
      "• Design, build, and maintain our CI/CD pipelines.\n• Manage and monitor our cloud infrastructure to ensure high availability and performance.\n• Implement and improve security best practices.\n• Automate deployment, scaling, and management of our services.",
    benefits:
      "Full remote work, competitive salary, stock options, health insurance, unlimited PTO.",
    tags: ["DevOps", "CI/CD", "Terraform", "Kubernetes", "Remote"],
    questions: [
      {
        text: "Which cloud provider are you most experienced with?",
        type: QuestionType.MULTIPLE_CHOICE,
        options: ["AWS", "GCP", "Azure", "Other"],
        isRequired: true,
      },
      {
        text: "Describe your experience building a CI/CD pipeline from scratch.",
        type: QuestionType.TEXT,
        isRequired: true,
      },
    ],
  },
  {
    company: "CreativeFlow Digital",
    title: "UI/UX Designer",
    location: "Remote",
    type: JobType.CONTRACT,
    salary: "$60 - $85 per hour",
    jobClass: JobClass.IT,
    summary:
      "We are looking for a talented UI/UX Designer to create amazing user experiences for a 6-month contract. The ideal candidate should have an eye for clean design, possess superior UI skills, and be able to translate high-level requirements into interaction flows and artifacts.",
    qualifications:
      "• 3+ years of UI/UX design experience.\n• A strong portfolio of design projects.\n• Proficiency in Figma, Sketch, or Adobe XD.\n• Excellent visual design skills with a sensitivity to user-system interaction.",
    responsibilities:
      "• Create wireframes, storyboards, user flows, process flows, and site maps.\n• Conduct user research and evaluate user feedback.\n• Establish and promote design guidelines, best practices, and standards.\n• Collaborate with product management and engineering to define and implement innovative solutions.",
    benefits: "Fully remote, flexible hours.",
    tags: ["UI", "UX", "Design", "Figma", "Contract"],
    questions: [
      {
        text: "Please provide a link to your portfolio.",
        type: QuestionType.TEXT,
        isRequired: true,
      },
      {
        text: "Which design and prototyping tools are you most proficient in?",
        type: QuestionType.TEXT,
        isRequired: true,
      },
    ],
  },
  {
    company: "InnovateTech Solutions",
    title: "IT Helpdesk Intern",
    location: "San Francisco, CA",
    type: JobType.INTERNSHIP,
    salary: "$25 per hour",
    jobClass: JobClass.IT,
    summary:
      "This is a great opportunity for a student or recent graduate to gain hands-on experience in an IT support role. You will assist our IT team with hardware and software support, troubleshooting, and user assistance.",
    qualifications:
      "• Currently enrolled in or recently graduated from a degree program in Information Technology or a related field.\n• Basic knowledge of computer hardware, software, and networks.\n• Strong problem-solving and communication skills.",
    responsibilities:
      "• Provide first-level contact and convey resolutions to user issues.\n• Properly escalate unresolved queries to the next level of support.\n• Track, route, and redirect problems to correct resources.\n• Assist with setting up new hardware and software for employees.",
    benefits:
      "Gain valuable industry experience, mentorship, potential for a full-time offer.",
    tags: ["Internship", "IT Support", "Helpdesk", "Entry-Level"],
    questions: [
      {
        text: "Are you currently enrolled in a relevant degree program?",
        type: QuestionType.YES_NO,
        isRequired: true,
      },
      {
        text: "What is your availability (hours per week)?",
        type: QuestionType.NUMBER,
        isRequired: true,
      },
    ],
  },
  {
    company: "ConnectPro SaaS",
    title: "Account Executive",
    location: "Boston, MA",
    type: JobType.FULL_TIME,
    salary: "$70,000 base + commission",
    jobClass: JobClass.SALES,
    summary:
      "We are looking for a motivated and results-driven Account Executive to join our sales team. You will be responsible for closing new business and driving revenue growth by managing the full sales cycle.",
    qualifications:
      "• 2-4 years of experience in a B2B SaaS sales role.\n• Proven track record of meeting or exceeding sales quotas.\n• Experience with CRM software, preferably Salesforce.\n• Excellent communication, negotiation, and presentation skills.",
    responsibilities:
      "• Manage the entire sales cycle from finding a client to securing a deal.\n• Unearth new sales opportunities through networking and turn them into long-term partnerships.\n• Present products to prospective clients.\n• Negotiate agreements and keep records of sales and data in CRM.",
    benefits:
      "Uncapped commission, comprehensive health benefits, 401(k), regular team outings.",
    tags: ["Sales", "SaaS", "B2B", "Salesforce"],
    questions: [
      {
        text: "Describe your experience with managing a full sales cycle.",
        type: QuestionType.TEXT,
        isRequired: true,
      },
      {
        text: "What is your experience with Salesforce or other CRM platforms?",
        type: QuestionType.TEXT,
        isRequired: true,
      },
    ],
  },
  {
    company: "UrbanScape Builders",
    title: "Site Superintendent",
    location: "Miami, FL",
    type: JobType.FULL_TIME,
    salary: "$95,000 - $125,000 per year",
    jobClass: JobClass.CONSTRUCTION,
    summary:
      "Seeking an experienced Site Superintendent to manage all on-site construction activities. You will be responsible for ensuring the project is completed on schedule, within budget, and to the highest quality standards.",
    qualifications:
      "• 5+ years of experience as a Site Superintendent in commercial construction.\n• OSHA 30 certification required.\n• Ability to read and interpret blueprints and specifications.\n• Strong leadership and communication skills.",
    responsibilities:
      "• Supervise and coordinate all construction activities and subcontractors.\n• Ensure all on-site personnel comply with project procedures, safety program requirements, and work rules.\n• Maintain a daily log of site activities.\n• Schedule inspections as necessary throughout the project.",
    benefits:
      "Company vehicle, health insurance, performance bonus, 401(k) matching.",
    tags: ["Construction", "Superintendent", "On-site", "Safety"],
    questions: [
      {
        text: "Do you have a valid OSHA 30 certification?",
        type: QuestionType.YES_NO,
        isRequired: true,
      },
      {
        text: "Are you willing to work on-site in Miami, FL?",
        type: QuestionType.YES_NO,
        isRequired: true,
      },
    ],
  },
  {
    company: "Fiscal Integrity Partners",
    title: "Staff Accountant",
    location: "Chicago, IL",
    type: JobType.FULL_TIME,
    salary: "$65,000 - $75,000 per year",
    jobClass: JobClass.ACCOUNTING,
    summary:
      "Seeking a detail-oriented Staff Accountant to join our finance team. The ideal candidate will be responsible for maintaining financial records and reports, performing account reconciliations, and assisting with budget and close processes.",
    qualifications:
      "• Bachelor’s degree in Accounting or Finance.\n• 2+ years of accounting experience.\n• Proficiency in Microsoft Excel and accounting software (e.g., QuickBooks, SAP).\n• CPA candidate preferred.",
    responsibilities:
      "• Prepare journal entries, monthly and year-end closings, bank reconciliation, and general ledger reconciliation.\n• Assist in the preparation of financial reports such as financial statements and budget performance.\n• Ensure compliance with GAAP.",
    benefits:
      "Health/Dental/Vision, 401(k), paid time off, tuition reimbursement for CPA exam.",
    tags: ["Accounting", "Finance", "CPA", "QuickBooks"],
    questions: [
      {
        text: "Are you a licensed CPA or currently pursuing your CPA license?",
        type: QuestionType.TEXT,
        isRequired: true,
      },
      {
        text: "What is your level of proficiency with Microsoft Excel (e.g., VLOOKUPs, Pivot Tables)?",
        type: QuestionType.TEXT,
        isRequired: true,
      },
    ],
  },
];

async function main() {
  console.log("Start seeding...");

  console.log("Deleting previous job data...");
  await prisma.job.deleteMany();
  console.log("Previous job data deleted.");

  for (const job of jobsData) {
    const createdJob = await prisma.job.create({
      data: {
        company: job.company,
        title: job.title,
        location: job.location,
        type: job.type,
        salary: job.salary,
        jobClass: job.jobClass,
        summary: job.summary,
        qualifications: job.qualifications,
        responsibilities: job.responsibilities,
        benefits: job.benefits,
        tags: job.tags,
        employerQuestions: {
          create: job.questions.map((q) => ({
            text: q.text,
            type: q.type,
            isRequired: q.isRequired,
            // This line now works perfectly!
            // TypeScript knows 'q.options' might be undefined, and the `|| []` provides a safe fallback.
            options: q.options || [],
          })),
        },
      },
    });
    console.log(`Created job: ${createdJob.title} at ${createdJob.company}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
