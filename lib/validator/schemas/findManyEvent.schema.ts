import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventIncludeObjectSchema as EventIncludeObjectSchema } from './objects/EventInclude.schema';
import { EventOrderByWithRelationInputObjectSchema as EventOrderByWithRelationInputObjectSchema } from './objects/EventOrderByWithRelationInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';
import { EventWhereUniqueInputObjectSchema as EventWhereUniqueInputObjectSchema } from './objects/EventWhereUniqueInput.schema';
import { EventScalarFieldEnumSchema } from './enums/EventScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const EventFindManySelectSchema: z.ZodType<Prisma.EventSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    clubId: z.boolean().optional(),
    date: z.boolean().optional(),
    time: z.boolean().optional(),
    mode: z.boolean().optional(),
    registrationLink: z.boolean().optional(),
    registrationFee: z.boolean().optional(),
    registrationOpen: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    venue: z.boolean().optional(),
    city: z.boolean().optional(),
    banner: z.boolean().optional(),
    capacity: z.boolean().optional(),
    registrationDeadline: z.boolean().optional(),
    status: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    category: z.boolean().optional(),
    club: z.boolean().optional(),
    registrations: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.EventSelect>;

export const EventFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    description: z.boolean().optional(),
    clubId: z.boolean().optional(),
    date: z.boolean().optional(),
    time: z.boolean().optional(),
    mode: z.boolean().optional(),
    registrationLink: z.boolean().optional(),
    registrationFee: z.boolean().optional(),
    registrationOpen: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    venue: z.boolean().optional(),
    city: z.boolean().optional(),
    banner: z.boolean().optional(),
    capacity: z.boolean().optional(),
    registrationDeadline: z.boolean().optional(),
    status: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    category: z.boolean().optional(),
    club: z.boolean().optional(),
    registrations: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const EventFindManySchema: z.ZodType<Prisma.EventFindManyArgs> = z.object({ select: EventFindManySelectSchema.optional(), include: z.lazy(() => EventIncludeObjectSchema.optional()), orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.EventFindManyArgs>;

export const EventFindManyZodSchema = z.object({ select: EventFindManySelectSchema.optional(), include: z.lazy(() => EventIncludeObjectSchema.optional()), orderBy: z.union([EventOrderByWithRelationInputObjectSchema, EventOrderByWithRelationInputObjectSchema.array()]).optional(), where: EventWhereInputObjectSchema.optional(), cursor: EventWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([EventScalarFieldEnumSchema, EventScalarFieldEnumSchema.array()]).optional() }).strict();