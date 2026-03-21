import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventCreateManyInputObjectSchema as EventCreateManyInputObjectSchema } from './objects/EventCreateManyInput.schema';

export const EventCreateManyAndReturnSchema: z.ZodType<Prisma.EventCreateManyAndReturnArgs> = z.object({ select: EventSelectObjectSchema.optional(), data: z.union([ EventCreateManyInputObjectSchema, z.array(EventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.EventCreateManyAndReturnArgs>;

export const EventCreateManyAndReturnZodSchema = z.object({ select: EventSelectObjectSchema.optional(), data: z.union([ EventCreateManyInputObjectSchema, z.array(EventCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();