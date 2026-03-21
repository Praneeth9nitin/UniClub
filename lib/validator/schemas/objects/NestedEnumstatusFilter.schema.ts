import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema'

const nestedenumstatusfilterSchema = z.object({
  equals: statusSchema.optional(),
  in: statusSchema.array().optional(),
  notIn: statusSchema.array().optional(),
  not: z.union([statusSchema, z.lazy(() => NestedEnumstatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumstatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumstatusFilter> = nestedenumstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumstatusFilter>;
export const NestedEnumstatusFilterObjectZodSchema = nestedenumstatusfilterSchema;
