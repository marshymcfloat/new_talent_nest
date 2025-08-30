import { z } from 'zod';
import { LicenceAndCertificateSelectObjectSchema } from './objects/LicenceAndCertificateSelect.schema';
import { LicenceAndCertificateCreateInputObjectSchema } from './objects/LicenceAndCertificateCreateInput.schema';
import { LicenceAndCertificateUncheckedCreateInputObjectSchema } from './objects/LicenceAndCertificateUncheckedCreateInput.schema';

export const LicenceAndCertificateCreateOneSchema = z.object({ select: LicenceAndCertificateSelectObjectSchema.optional(),  data: z.union([LicenceAndCertificateCreateInputObjectSchema, LicenceAndCertificateUncheckedCreateInputObjectSchema])  })