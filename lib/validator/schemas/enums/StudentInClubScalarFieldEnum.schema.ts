import * as z from 'zod';

export const StudentInClubScalarFieldEnumSchema = z.enum(['id', 'clubId', 'studentId', 'roleId', 'status'])

export type StudentInClubScalarFieldEnum = z.infer<typeof StudentInClubScalarFieldEnumSchema>;