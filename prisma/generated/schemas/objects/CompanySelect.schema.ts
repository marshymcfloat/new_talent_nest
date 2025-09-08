import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { JobFindManySchema } from '../findManyJob.schema';
import { CompanyMemberFindManySchema } from '../findManyCompanyMember.schema';
import { CompanyCountOutputTypeArgsObjectSchema } from './CompanyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  websiteUrl: z.boolean().optional(),
  logoUrl: z.boolean().optional(),
  verifiedDomains: z.boolean().optional(),
  jobs: z.union([z.boolean(), z.lazy(() => JobFindManySchema)]).optional(),
  members: z.union([z.boolean(), z.lazy(() => CompanyMemberFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompanyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompanySelectObjectSchema: z.ZodType<Prisma.CompanySelect> = makeSchema() as unknown as z.ZodType<Prisma.CompanySelect>;
export const CompanySelectObjectZodSchema = makeSchema();
