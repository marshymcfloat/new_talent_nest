import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateverifiedDomainsInputObjectSchema } from './CompanyCreateverifiedDomainsInput.schema';
import { CompanyMemberCreateNestedManyWithoutCompanyInputObjectSchema } from './CompanyMemberCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().nullish(),
  websiteUrl: z.string().nullish(),
  logoUrl: z.string().nullish(),
  verifiedDomains: z.union([z.lazy(() => CompanyCreateverifiedDomainsInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  members: z.lazy(() => CompanyMemberCreateNestedManyWithoutCompanyInputObjectSchema).optional()
}).strict();
export const CompanyCreateWithoutJobsInputObjectSchema: z.ZodType<Prisma.CompanyCreateWithoutJobsInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateWithoutJobsInput>;
export const CompanyCreateWithoutJobsInputObjectZodSchema = makeSchema();
