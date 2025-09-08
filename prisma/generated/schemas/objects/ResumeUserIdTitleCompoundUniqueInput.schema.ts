import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  title: z.string()
}).strict();
export const ResumeUserIdTitleCompoundUniqueInputObjectSchema: z.ZodType<Prisma.ResumeUserIdTitleCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUserIdTitleCompoundUniqueInput>;
export const ResumeUserIdTitleCompoundUniqueInputObjectZodSchema = makeSchema();
