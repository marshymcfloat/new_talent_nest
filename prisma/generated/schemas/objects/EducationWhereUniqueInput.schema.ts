import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string()
}).strict();
export const EducationWhereUniqueInputObjectSchema: z.ZodType<Prisma.EducationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationWhereUniqueInput>;
export const EducationWhereUniqueInputObjectZodSchema = makeSchema();
