import * as z from 'zod';
import { modeSchema } from '../../enums/mode.schema';
import { eventStatusSchema } from '../../enums/eventStatus.schema';
// prettier-ignore
export const EventInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional().nullable(),
    clubId: z.string(),
    date: z.date(),
    time: z.string(),
    mode: modeSchema,
    registrationLink: z.string().optional().nullable(),
    registrationFee: z.number().int().optional().nullable(),
    registrationOpen: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().optional().nullable(),
    venue: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    banner: z.string().optional().nullable(),
    capacity: z.number().int().optional().nullable(),
    registrationDeadline: z.date().optional().nullable(),
    status: eventStatusSchema,
    isPublic: z.boolean(),
    category: z.string(),
    club: z.unknown(),
    registrations: z.array(z.unknown())
}).strict();

export type EventInputType = z.infer<typeof EventInputSchema>;
