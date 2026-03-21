import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { statusSchema } from '../enums/status.schema';
import { EnumstatusFieldUpdateOperationsInputObjectSchema as EnumstatusFieldUpdateOperationsInputObjectSchema } from './EnumstatusFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([statusSchema, z.lazy(() => EnumstatusFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const StudentInClubUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateManyMutationInput>;
export const StudentInClubUpdateManyMutationInputObjectZodSchema = makeSchema();
