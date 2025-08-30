import { z } from 'zod';
import { LicenceAndCertificateSelectObjectSchema } from './objects/LicenceAndCertificateSelect.schema';
import { LicenceAndCertificateWhereUniqueInputObjectSchema } from './objects/LicenceAndCertificateWhereUniqueInput.schema';

export const LicenceAndCertificateFindUniqueOrThrowSchema = z.object({ select: LicenceAndCertificateSelectObjectSchema.optional(),  where: LicenceAndCertificateWhereUniqueInputObjectSchema })