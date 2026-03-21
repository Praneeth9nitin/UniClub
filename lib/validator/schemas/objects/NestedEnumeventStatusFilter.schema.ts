import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { eventStatusSchema } from '../enums/eventStatus.schema'

const nestedenumeventstatusfilterSchema = z.object({
  equals: eventStatusSchema.optional(),
  in: eventStatusSchema.array().optional(),
  notIn: eventStatusSchema.array().optional(),
  not: z.union([eventStatusSchema, z.lazy(() => NestedEnumeventStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumeventStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumeventStatusFilter> = nestedenumeventstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumeventStatusFilter>;
export const NestedEnumeventStatusFilterObjectZodSchema = nestedenumeventstatusfilterSchema;
