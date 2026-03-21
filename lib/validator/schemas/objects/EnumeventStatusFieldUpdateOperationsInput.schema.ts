import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { eventStatusSchema } from '../enums/eventStatus.schema'

const makeSchema = () => z.object({
  set: eventStatusSchema.optional()
}).strict();
export const EnumeventStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumeventStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumeventStatusFieldUpdateOperationsInput>;
export const EnumeventStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
