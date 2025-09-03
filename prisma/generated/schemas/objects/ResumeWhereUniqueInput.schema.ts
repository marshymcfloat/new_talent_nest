import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeUserIdTitleCompoundUniqueInputObjectSchema } from './ResumeUserIdTitleCompoundUniqueInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string(),
  userId_title: z.lazy(() => ResumeUserIdTitleCompoundUniqueInputObjectSchema)
}).strict();
export const ResumeWhereUniqueInputObjectSchema: z.ZodType<Prisma.ResumeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeWhereUniqueInput>;
export const ResumeWhereUniqueInputObjectZodSchema = makeSchema();
