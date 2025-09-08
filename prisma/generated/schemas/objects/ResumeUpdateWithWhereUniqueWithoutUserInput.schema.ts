import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResumeWhereUniqueInputObjectSchema } from './ResumeWhereUniqueInput.schema';
import { ResumeUpdateWithoutUserInputObjectSchema } from './ResumeUpdateWithoutUserInput.schema';
import { ResumeUncheckedUpdateWithoutUserInputObjectSchema } from './ResumeUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ResumeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ResumeUpdateWithoutUserInputObjectSchema), z.lazy(() => ResumeUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ResumeUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ResumeUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ResumeUpdateWithWhereUniqueWithoutUserInput>;
export const ResumeUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
