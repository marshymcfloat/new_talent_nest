import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string()
}).strict();
export const LicenceAndCertificateWhereUniqueInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateWhereUniqueInput>;
export const LicenceAndCertificateWhereUniqueInputObjectZodSchema = makeSchema();
