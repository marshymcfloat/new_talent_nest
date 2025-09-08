import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberWhereInputObjectSchema } from './CompanyMemberWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CompanyMemberWhereInputObjectSchema).optional(),
  some: z.lazy(() => CompanyMemberWhereInputObjectSchema).optional(),
  none: z.lazy(() => CompanyMemberWhereInputObjectSchema).optional()
}).strict();
export const CompanyMemberListRelationFilterObjectSchema: z.ZodType<Prisma.CompanyMemberListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberListRelationFilter>;
export const CompanyMemberListRelationFilterObjectZodSchema = makeSchema();
