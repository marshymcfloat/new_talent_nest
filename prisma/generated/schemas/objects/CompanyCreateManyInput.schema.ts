import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().nullish(),
  websiteUrl: z.string().nullish(),
  logoUrl: z.string().nullish(),
  verifiedDomains: z.union([z.lazy(() => CompanyCreateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const CompanyCreateManyInputObjectSchema: z.ZodType<Prisma.CompanyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateManyInput>;
export const CompanyCreateManyInputObjectZodSchema = makeSchema();
