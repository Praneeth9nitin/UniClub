import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { modeSchema } from '../enums/mode.schema'

const makeSchema = () => z.object({
  set: modeSchema.optional()
}).strict();
export const EnummodeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnummodeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnummodeFieldUpdateOperationsInput>;
export const EnummodeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
