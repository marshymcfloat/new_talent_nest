import { PrismaClient, JobClass, JobType, QuestionType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  console.log("Deleting existing questions and jobs...");
  await prisma.employerQuestion.deleteMany();
  await prisma.job.deleteMany();
  console.log("Existing data deleted.");

  console.log("Creating new jobs with questions...");

  await prisma.job.create({
    data: {
      company: "InnovateTech Solutions",
      title: "Senior Frontend Developer",
      location: "San Francisco, CA (Remote)",
      type: JobType.FULL_TIME,
      salary: "$120,000 - $150,000 per year",
      jobClass: JobClass.IT,
      summary:
        "Seeking a skilled Senior Frontend Developer to build and maintain our next-generation user interfaces.",
      qualifications:
        "5+ years of experience with React, TypeScript, and modern CSS frameworks.",
      responsibilities:
        "Develop new user-facing features, build reusable code, and optimize applications for speed and scalability.",
      tags: ["React", "TypeScript", "Remote"],
      employerQuestions: {
        create: [
          {
            text: "How many years of professional React experience do you have?",
            type: QuestionType.NUMBER,
            isRequired: true,
          },
          {
            text: "Are you legally authorized to work in the United States?",
            type: QuestionType.YES_NO,
            isRequired: true,
          },
          {
            text: "Which state management library are you most comfortable with?",
            type: QuestionType.MULTIPLE_CHOICE,
            isRequired: true,
            options: ["Redux", "Zustand", "MobX", "Recoil", "Other"],
          },
          {
            text: "Please provide a link to your portfolio or GitHub profile.",
            type: QuestionType.TEXT,
            isRequired: false,
          },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: "GrowthLeap Dynamics",
      title: "Account Executive",
      location: "New York, NY",
      type: JobType.FULL_TIME,
      salary: "$75,000 base + commission",
      jobClass: JobClass.SALES,
      summary:
        "Drive revenue growth by building and maintaining strong client relationships.",
      qualifications:
        "Proven track record in B2B sales, excellent communication skills, and familiarity with CRM software.",
      responsibilities:
        "Manage the full sales cycle from lead generation to closing deals.",
      tags: ["B2B", "SaaS", "Sales"],
      employerQuestions: {
        create: [
          {
            text: "Do you have experience with Salesforce CRM?",
            type: QuestionType.YES_NO,
            isRequired: true,
          },
          {
            text: "Describe your most significant sales achievement.",
            type: QuestionType.TEXT,
            isRequired: true,
          },
          {
            text: "What are your annual salary expectations (base)?",
            type: QuestionType.NUMBER,
            isRequired: true,
          },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: "Fiscal Integrity Inc.",
      title: "Staff Accountant",
      location: "Chicago, IL (Hybrid)",
      type: JobType.PART_TIME,
      salary: "$35 - $45 per hour",
      jobClass: JobClass.ACCOUNTING,
      summary:
        "Assist with financial reporting, accounts payable, and month-end close processes.",
      qualifications:
        "Bachelors degree in Accounting or Finance. CPA is a plus. Proficient in QuickBooks.",
      responsibilities:
        "Prepare journal entries, reconcile bank statements, and support the finance team.",
      tags: ["QuickBooks", "Part-Time", "Hybrid"],
      employerQuestions: {
        create: [
          {
            text: "Do you hold an active CPA license?",
            type: QuestionType.YES_NO,
            isRequired: false,
          },
          {
            text: "What is your availability in hours per week?",
            type: QuestionType.NUMBER,
            isRequired: true,
          },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: "BuildRight Constructors",
      title: "Construction Project Manager",
      location: "Austin, TX",
      type: JobType.CONTRACT,
      salary: "Based on project scope",
      jobClass: JobClass.CONSTRUCTION,
      summary:
        "Oversee all aspects of construction projects from planning to implementation.",
      qualifications:
        "5+ years in construction management. PMP certification preferred.",
      responsibilities:
        "Coordinate subcontractors, ensure compliance with safety regulations, and manage project budgets.",
      tags: ["PMP", "Commercial", "Contract"],
      employerQuestions: {
        create: [
          {
            text: "Are you willing to travel to various job sites within the state?",
            type: QuestionType.YES_NO,
            isRequired: true,
          },
          {
            text: "Briefly describe your experience managing projects with budgets over $5 million.",
            type: QuestionType.TEXT,
            isRequired: true,
          },
        ],
      },
    },
  });

  await prisma.job.create({
    data: {
      company: "HelpSphere",
      title: "Customer Support Specialist",
      location: "Remote",
      type: JobType.INTERNSHIP,
      salary: "$20 per hour",
      jobClass: JobClass.SUPPORT,
      summary:
        "Join our team as an intern to provide outstanding service to our customers via email and chat.",
      qualifications:
        "Strong written communication skills, tech-savvy, and a passion for helping others.",
      responsibilities:
        "Respond to customer inquiries, troubleshoot issues, and escalate complex problems.",
      tags: ["Zendesk", "Internship", "Remote"],
      employerQuestions: {
        create: [
          {
            text: "This is a remote internship. Do you have access to a quiet workspace and reliable high-speed internet?",
            type: QuestionType.YES_NO,
            isRequired: true,
          },
          {
            text: "What is your typing speed (Words Per Minute)?",
            type: QuestionType.NUMBER,
            isRequired: false,
          },
        ],
      },
    },
  });

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
