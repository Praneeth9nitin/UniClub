import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema';
import { NestedEnumVerificationStatusFilterObjectSchema as NestedEnumVerificationStatusFilterObjectSchema } from './NestedEnumVerificationStatusFilter.schema'

const makeSchema = () => z.object({
  equals: VerificationStatusSchema.optional(),
  in: VerificationStatusSchema.array().optional(),
  notIn: VerificationStatusSchema.array().optional(),
  not: z.union([VerificationStatusSchema, z.lazy(() => NestedEnumVerificationStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumVerificationStatusFilterObjectSchema: z.ZodType<Prisma.EnumVerificationStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumVerificationStatusFilter>;
export const EnumVerificationStatusFilterObjectZodSchema = makeSchema();
