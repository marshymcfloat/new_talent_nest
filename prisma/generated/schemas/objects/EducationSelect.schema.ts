import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  course: z.boolean().optional(),
  institution: z.boolean().optional(),
  highlight: z.boolean().optional(),
  isComplete: z.boolean().optional(),
  finishedYear: z.boolean().optional(),
  expectedFinishMonth: z.boolean().optional(),
  expectedFinishYear: z.boolean().optional(),
  deletedAt: z.boolean().optional()
}).strict();
export const EducationSelectObjectSchema: z.ZodType<Prisma.EducationSelect> = makeSchema() as unknown as z.ZodType<Prisma.EducationSelect>;
export const EducationSelectObjectZodSchema = makeSchema();
