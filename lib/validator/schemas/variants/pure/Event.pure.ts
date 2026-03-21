import * as z from 'zod';
import { modeSchema } from '../../enums/mode.schema';
import { eventStatusSchema } from '../../enums/eventStatus.schema';
// prettier-ignore
export const EventModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    clubId: z.string(),
    date: z.date(),
    time: z.string(),
    mode: modeSchema,
    registrationLink: z.string().nullable(),
    registrationFee: z.number().int().nullable(),
    registrationOpen: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable(),
    venue: z.string().nullable(),
    city: z.string().nullable(),
    banner: z.string().nullable(),
    capacity: z.number().int().nullable(),
    registrationDeadline: z.date().nullable(),
    status: eventStatusSchema,
    isPublic: z.boolean(),
    category: z.string(),
    club: z.unknown(),
    registrations: z.array(z.unknown())
}).strict();

export type EventPureType = z.infer<typeof EventModelSchema>;
