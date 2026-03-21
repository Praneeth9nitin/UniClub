import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { statusSchema } from '../enums/status.schema'

const makeSchema = () => z.object({
  set: statusSchema.optional()
}).strict();
export const EnumstatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumstatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumstatusFieldUpdateOperationsInput>;
export const EnumstatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
