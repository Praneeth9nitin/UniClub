import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectSchema as StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './StudentInClubUncheckedCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  clubId: z.string(),
  members: z.lazy(() => StudentInClubUncheckedCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const RoleInClubUncheckedCreateInputObjectSchema: z.ZodType<Prisma.RoleInClubUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubUncheckedCreateInput>;
export const RoleInClubUncheckedCreateInputObjectZodSchema = makeSchema();
