import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AnswerWhereInputObjectSchema } from './AnswerWhereInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  every: z.lazy(() => AnswerWhereInputObjectSchema).optional(),
  some: z.lazy(() => AnswerWhereInputObjectSchema).optional(),
  none: z.lazy(() => AnswerWhereInputObjectSchema).optional()
}).strict();
export const AnswerListRelationFilterObjectSchema: z.ZodType<Prisma.AnswerListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AnswerListRelationFilter>;
export const AnswerListRelationFilterObjectZodSchema = makeSchema();
