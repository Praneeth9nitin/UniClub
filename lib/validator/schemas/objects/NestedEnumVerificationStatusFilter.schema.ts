import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema'

const nestedenumverificationstatusfilterSchema = z.object({
  equals: VerificationStatusSchema.optional(),
  in: VerificationStatusSchema.array().optional(),
  notIn: VerificationStatusSchema.array().optional(),
  not: z.union([VerificationStatusSchema, z.lazy(() => NestedEnumVerificationStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumVerificationStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumVerificationStatusFilter> = nestedenumverificationstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumVerificationStatusFilter>;
export const NestedEnumVerificationStatusFilterObjectZodSchema = nestedenumverificationstatusfilterSchema;
