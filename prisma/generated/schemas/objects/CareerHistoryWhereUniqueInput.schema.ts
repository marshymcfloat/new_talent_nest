import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string()
}).strict();
export const CareerHistoryWhereUniqueInputObjectSchema: z.ZodType<Prisma.CareerHistoryWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.CareerHistoryWhereUniqueInput>;
export const CareerHistoryWhereUniqueInputObjectZodSchema = makeSchema();
