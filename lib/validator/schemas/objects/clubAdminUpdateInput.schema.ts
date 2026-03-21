import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClubUpdateOneRequiredWithoutClubAdminNestedInputObjectSchema as ClubUpdateOneRequiredWithoutClubAdminNestedInputObjectSchema } from './ClubUpdateOneRequiredWithoutClubAdminNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  firstName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  lastName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  club: z.lazy(() => ClubUpdateOneRequiredWithoutClubAdminNestedInputObjectSchema).optional()
}).strict();
export const clubAdminUpdateInputObjectSchema: z.ZodType<Prisma.clubAdminUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.clubAdminUpdateInput>;
export const clubAdminUpdateInputObjectZodSchema = makeSchema();
