import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string()
}).strict();
export const JobWhereUniqueInputObjectSchema: z.ZodType<Prisma.JobWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.JobWhereUniqueInput>;
export const JobWhereUniqueInputObjectZodSchema = makeSchema();
