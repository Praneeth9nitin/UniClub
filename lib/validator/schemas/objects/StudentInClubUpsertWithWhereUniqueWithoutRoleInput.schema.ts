import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithoutRoleInputObjectSchema as StudentInClubUpdateWithoutRoleInputObjectSchema } from './StudentInClubUpdateWithoutRoleInput.schema';
import { StudentInClubUncheckedUpdateWithoutRoleInputObjectSchema as StudentInClubUncheckedUpdateWithoutRoleInputObjectSchema } from './StudentInClubUncheckedUpdateWithoutRoleInput.schema';
import { StudentInClubCreateWithoutRoleInputObjectSchema as StudentInClubCreateWithoutRoleInputObjectSchema } from './StudentInClubCreateWithoutRoleInput.schema';
import { StudentInClubUncheckedCreateWithoutRoleInputObjectSchema as StudentInClubUncheckedCreateWithoutRoleInputObjectSchema } from './StudentInClubUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentInClubUpdateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateWithoutRoleInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentInClubCreateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const StudentInClubUpsertWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubUpsertWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpsertWithWhereUniqueWithoutRoleInput>;
export const StudentInClubUpsertWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
