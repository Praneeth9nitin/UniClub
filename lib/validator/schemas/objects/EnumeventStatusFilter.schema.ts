import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { eventStatusSchema } from '../enums/eventStatus.schema';
import { NestedEnumeventStatusFilterObjectSchema as NestedEnumeventStatusFilterObjectSchema } from './NestedEnumeventStatusFilter.schema'

const makeSchema = () => z.object({
  equals: eventStatusSchema.optional(),
  in: eventStatusSchema.array().optional(),
  notIn: eventStatusSchema.array().optional(),
  not: z.union([eventStatusSchema, z.lazy(() => NestedEnumeventStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumeventStatusFilterObjectSchema: z.ZodType<Prisma.EnumeventStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumeventStatusFilter>;
export const EnumeventStatusFilterObjectZodSchema = makeSchema();
