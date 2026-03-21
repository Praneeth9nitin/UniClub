import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { CollegeTypeSchema } from '../enums/CollegeType.schema'

const makeSchema = () => z.object({
  set: CollegeTypeSchema.optional()
}).strict();
export const NullableEnumCollegeTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumCollegeTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumCollegeTypeFieldUpdateOperationsInput>;
export const NullableEnumCollegeTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
