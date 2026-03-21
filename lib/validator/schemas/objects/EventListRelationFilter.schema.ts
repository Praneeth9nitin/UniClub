import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { EventWhereInputObjectSchema as EventWhereInputObjectSchema } from './EventWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => EventWhereInputObjectSchema).optional(),
  some: z.lazy(() => EventWhereInputObjectSchema).optional(),
  none: z.lazy(() => EventWhereInputObjectSchema).optional()
}).strict();
export const EventListRelationFilterObjectSchema: z.ZodType<Prisma.EventListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.EventListRelationFilter>;
export const EventListRelationFilterObjectZodSchema = makeSchema();
