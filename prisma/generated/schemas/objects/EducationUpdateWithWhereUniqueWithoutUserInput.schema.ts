import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EducationWhereUniqueInputObjectSchema } from './EducationWhereUniqueInput.schema';
import { EducationUpdateWithoutUserInputObjectSchema } from './EducationUpdateWithoutUserInput.schema';
import { EducationUncheckedUpdateWithoutUserInputObjectSchema } from './EducationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = (): z.ZodObject<any> => z.object({
  where: z.lazy(() => EducationWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => EducationUpdateWithoutUserInputObjectSchema), z.lazy(() => EducationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const EducationUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.EducationUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.EducationUpdateWithWhereUniqueWithoutUserInput>;
export const EducationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
