import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateNestedOneWithoutRoleInputObjectSchema as ClubCreateNestedOneWithoutRoleInputObjectSchema } from './ClubCreateNestedOneWithoutRoleInput.schema';
import { StudentInClubCreateNestedManyWithoutRoleInputObjectSchema as StudentInClubCreateNestedManyWithoutRoleInputObjectSchema } from './StudentInClubCreateNestedManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  club: z.lazy(() => ClubCreateNestedOneWithoutRoleInputObjectSchema),
  members: z.lazy(() => StudentInClubCreateNestedManyWithoutRoleInputObjectSchema).optional()
}).strict();
export const RoleInClubCreateInputObjectSchema: z.ZodType<Prisma.RoleInClubCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.RoleInClubCreateInput>;
export const RoleInClubCreateInputObjectZodSchema = makeSchema();
