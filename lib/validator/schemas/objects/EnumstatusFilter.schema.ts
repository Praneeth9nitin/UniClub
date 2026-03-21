import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema';
import { NestedEnumstatusFilterObjectSchema as NestedEnumstatusFilterObjectSchema } from './NestedEnumstatusFilter.schema'

const makeSchema = () => z.object({
  equals: statusSchema.optional(),
  in: statusSchema.array().optional(),
  notIn: statusSchema.array().optional(),
  not: z.union([statusSchema, z.lazy(() => NestedEnumstatusFilterObjectSchema)]).optional()
}).strict();
export const EnumstatusFilterObjectSchema: z.ZodType<Prisma.EnumstatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumstatusFilter>;
export const EnumstatusFilterObjectZodSchema = makeSchema();
