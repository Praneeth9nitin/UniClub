import * as z from 'zod';

export const FacultyScalarFieldEnumSchema = z.enum(['id', 'name', 'collegeId', 'createdAt', 'updatedAt', 'deletedAt', 'email', 'password'])

export type FacultyScalarFieldEnum = z.infer<typeof FacultyScalarFieldEnumSchema>;