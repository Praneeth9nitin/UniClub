import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { modeSchema } from '../enums/mode.schema';
import { NestedEnummodeFilterObjectSchema as NestedEnummodeFilterObjectSchema } from './NestedEnummodeFilter.schema'

const makeSchema = () => z.object({
  equals: modeSchema.optional(),
  in: modeSchema.array().optional(),
  notIn: modeSchema.array().optional(),
  not: z.union([modeSchema, z.lazy(() => NestedEnummodeFilterObjectSchema)]).optional()
}).strict();
export const EnummodeFilterObjectSchema: z.ZodType<Prisma.EnummodeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnummodeFilter>;
export const EnummodeFilterObjectZodSchema = makeSchema();
