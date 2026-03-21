import * as z from 'zod';

export const StudentScalarFieldEnumSchema = z.enum(['id', 'firstName', 'lastName', 'email', 'password', 'rollnumber', 'collegeId', 'createdAt', 'updatedAt', 'deletedAt'])

export type StudentScalarFieldEnum = z.infer<typeof StudentScalarFieldEnumSchema>;