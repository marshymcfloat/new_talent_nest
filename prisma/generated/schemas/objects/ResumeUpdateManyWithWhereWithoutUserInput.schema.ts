import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeScalarWhereInputObjectSchema } from './ResumeScalarWhereInput.schema';
import { ResumeUpdateManyMutationInputObjectSchema } from './ResumeUpdateManyMutationInput.schema';
import { ResumeUncheckedUpdateManyWithoutUserInputObjectSchema } from './ResumeUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => ResumeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ResumeUpdateManyMutationInputObjectSchema), z.lazy(() => ResumeUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ResumeUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUpdateManyWithWhereWithoutUserInput>;
export const ResumeUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
