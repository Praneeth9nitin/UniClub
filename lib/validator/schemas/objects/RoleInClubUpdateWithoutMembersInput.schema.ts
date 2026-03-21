import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClubUpdateOneRequiredWithoutRoleNestedInputObjectSchema as ClubUpdateOneRequiredWithoutRoleNestedInputObjectSchema } from './ClubUpdateOneRequiredWithoutRoleNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  club: z.lazy(() => ClubUpdateOneRequiredWithoutRoleNestedInputObjectSchema).optional()
}).strict();
export const RoleInClubUpdateWithoutMembersInputObjectSchema: z.ZodType<Prisma.RoleInClubUpdateWithoutMembersInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUpdateWithoutMembersInput>;
export const RoleInClubUpdateWithoutMembersInputObjectZodSchema = makeSchema();
