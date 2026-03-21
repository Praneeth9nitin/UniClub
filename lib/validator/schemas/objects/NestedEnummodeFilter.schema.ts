import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { modeSchema } from '../enums/mode.schema'

const nestedenummodefilterSchema = z.object({
  equals: modeSchema.optional(),
  in: modeSchema.array().optional(),
  notIn: modeSchema.array().optional(),
  not: z.union([modeSchema, z.lazy(() => NestedEnummodeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnummodeFilterObjectSchema: z.ZodType<Prisma.NestedEnummodeFilter> = nestedenummodefilterSchema as unknown as z.ZodType<Prisma.NestedEnummodeFilter>;
export const NestedEnummodeFilterObjectZodSchema = nestedenummodefilterSchema;
