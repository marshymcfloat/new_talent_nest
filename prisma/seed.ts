// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const languages = [
    "English",
    "Mandarin Chinese",
    "Hindi",
    "Spanish",
    "French",
    "Arabic",
    "Bengali",
    "Russian",
    "Portuguese",
    "Urdu",
    "Indonesian",
    "German",
    "Japanese",
    "Swahili",
    "Marathi",
    "Telugu",
    "Turkish",
    "Tamil",
    "Punjabi",
    "Korean",
    "Vietnamese",
    "Italian",
    "Polish",
    "Ukrainian",
    "Dutch",
    "Thai",
    "Gujarati",
    "Persian (Farsi)",
    "Romanian",
    "Czech",
    "Greek",
    "Hungarian",
    "Kannada",
    "Malayalam",
    "Odia",
    "Sinhala",
    "Hebrew",
    "Burmese",
    "Khmer",
    "Amharic",
    "Zulu",
    "Xhosa",
    "Afrikaans",
    "Tagalog (Filipino)",
  ];

  for (const lang of languages) {
    await prisma.language.upsert({
      where: { name: lang },
      update: {},
      create: { name: lang },
    });
  }

  console.log("✅ Languages seeded successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
