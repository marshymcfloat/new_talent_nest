import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const CompanyUpdateverifiedDomainsInputObjectSchema: z.ZodType<Prisma.CompanyUpdateverifiedDomainsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateverifiedDomainsInput>;
export const CompanyUpdateverifiedDomainsInputObjectZodSchema = makeSchema();
