import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string()
}).strict();
export const EmployerQuestionWhereUniqueInputObjectSchema: z.ZodType<Prisma.EmployerQuestionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EmployerQuestionWhereUniqueInput>;
export const EmployerQuestionWhereUniqueInputObjectZodSchema = makeSchema();
