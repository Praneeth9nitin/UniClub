import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  clubId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RoleInClubUncheckedUpdateWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubUncheckedUpdateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUncheckedUpdateWithoutMembersInput>;
export const RoleInClubUncheckedUpdateWithoutMembersInputObjectZodSchema = makeSchema();
