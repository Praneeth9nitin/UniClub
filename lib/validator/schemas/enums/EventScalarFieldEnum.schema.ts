import * as z from 'zod';

export const EventScalarFieldEnumSchema = z.enum(['id', 'name', 'description', 'clubId', 'date', 'time', 'mode', 'registrationLink', 'registrationFee', 'registrationOpen', 'createdAt', 'updatedAt', 'deletedAt', 'venue', 'city', 'banner', 'capacity', 'registrationDeadline', 'status', 'isPublic', 'category'])

export type EventScalarFieldEnum = z.infer<typeof EventScalarFieldEnumSchema>;