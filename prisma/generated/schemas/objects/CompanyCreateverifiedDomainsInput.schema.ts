import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const CompanyCreateverifiedDomainsInputObjectSchema: z.ZodType<Prisma.CompanyCreateverifiedDomainsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateverifiedDomainsInput>;
export const CompanyCreateverifiedDomainsInputObjectZodSchema = makeSchema();
