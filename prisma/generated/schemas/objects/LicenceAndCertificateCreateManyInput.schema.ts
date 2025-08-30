import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = (): z.ZodObject<any> => z.object({
  id: z.string().optional(),
  name: z.string(),
  organization: z.string().nullish(),
  dateIssed: z.date().nullish(),
  expiryDate: z.date().nullish(),
  description: z.string().nullish(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
}).strict();
export const LicenceAndCertificateCreateManyInputObjectSchema: z.ZodType<Prisma.LicenceAndCertificateCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.LicenceAndCertificateCreateManyInput>;
export const LicenceAndCertificateCreateManyInputObjectZodSchema = makeSchema();
