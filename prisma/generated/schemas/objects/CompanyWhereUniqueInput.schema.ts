import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  name: z.string()
}).strict();
export const CompanyWhereUniqueInputObjectSchema: z.ZodType<Prisma.CompanyWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyWhereUniqueInput>;
export const CompanyWhereUniqueInputObjectZodSchema = makeSchema();
