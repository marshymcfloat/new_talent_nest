import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'name', 'email', 'emailVerified', 'image', 'username', 'password', 'summary', 'availability', 'preferredWorkType', 'preferredLocation', 'rightToWork', 'expectedSalary', 'jobClassification'])