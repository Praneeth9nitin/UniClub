import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { CollegeUpdateOneRequiredWithoutAdminNestedInputObjectSchema as CollegeUpdateOneRequiredWithoutAdminNestedInputObjectSchema } from './CollegeUpdateOneRequiredWithoutAdminNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  phone: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  college: z.lazy(() => CollegeUpdateOneRequiredWithoutAdminNestedInputObjectSchema).optional()
}).strict();
export const CollegeAdminUpdateInputObjectSchema: z.ZodType<Prisma.CollegeAdminUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CollegeAdminUpdateInput>;
export const CollegeAdminUpdateInputObjectZodSchema = makeSchema();
