import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string(),
  userId: z.string()
}).strict();
export const EducationIdUserIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.EducationIdUserIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationIdUserIdCompoundUniqueInput>;
export const EducationIdUserIdCompoundUniqueInputObjectZodSchema = makeSchema();
