import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  jobs: z.boolean().optional(),
  members: z.boolean().optional()
}).strict();
export const CompanyCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CompanyCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCountOutputTypeSelect>;
export const CompanyCountOutputTypeSelectObjectZodSchema = makeSchema();
