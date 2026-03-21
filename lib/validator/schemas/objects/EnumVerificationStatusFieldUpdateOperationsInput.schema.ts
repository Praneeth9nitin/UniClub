import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { VerificationStatusSchema } from '../enums/VerificationStatus.schema'

const makeSchema = () => z.object({
  set: VerificationStatusSchema.optional()
}).strict();
export const EnumVerificationStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumVerificationStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumVerificationStatusFieldUpdateOperationsInput>;
export const EnumVerificationStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
