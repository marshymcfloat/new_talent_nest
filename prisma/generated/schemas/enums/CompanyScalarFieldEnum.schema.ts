import { z } from 'zod';

export const CompanyScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'websiteUrl', 'logoUrl', 'verifiedDomains', 'createdAt', 'updatedAt'])