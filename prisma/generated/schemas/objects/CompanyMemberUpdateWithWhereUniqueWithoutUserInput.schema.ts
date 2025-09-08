import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyMemberWhereUniqueInputObjectSchema } from './CompanyMemberWhereUniqueInput.schema';
import { CompanyMemberUpdateWithoutUserInputObjectSchema } from './CompanyMemberUpdateWithoutUserInput.schema';
import { CompanyMemberUncheckedUpdateWithoutUserInputObjectSchema } from './CompanyMemberUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyMemberWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CompanyMemberUpdateWithoutUserInputObjectSchema), z.lazy(() => CompanyMemberUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const CompanyMemberUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.CompanyMemberUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyMemberUpdateWithWhereUniqueWithoutUserInput>;
export const CompanyMemberUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
