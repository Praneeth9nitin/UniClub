import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { EventSelectObjectSchema as EventSelectObjectSchema } from './objects/EventSelect.schema';
import { EventUpdateManyMutationInputObjectSchema as EventUpdateManyMutationInputObjectSchema } from './objects/EventUpdateManyMutationInput.schema';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './objects/EventWhereInput.schema';

export const EventUpdateManyAndReturnSchema: z.ZodType<Prisma.EventUpdateManyAndReturnArgs> = z.object({ select: EventSelectObjectSchema.optional(), data: EventUpdateManyMutationInputObjectSchema, where: EventWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.EventUpdateManyAndReturnArgs>;

export const EventUpdateManyAndReturnZodSchema = z.object({ select: EventSelectObjectSchema.optional(), data: EventUpdateManyMutationInputObjectSchema, where: EventWhereInputObjectSchema.optional() }).strict();