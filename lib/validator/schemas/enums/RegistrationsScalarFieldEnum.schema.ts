import * as z from 'zod';

export const RegistrationsScalarFieldEnumSchema = z.enum(['id', 'studentId', 'eventId', 'createdAt', 'updatedAt', 'deletedAt'])

export type RegistrationsScalarFieldEnum = z.infer<typeof RegistrationsScalarFieldEnumSchema>;