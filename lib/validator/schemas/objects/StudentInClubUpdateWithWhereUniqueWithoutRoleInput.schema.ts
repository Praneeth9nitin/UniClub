import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithoutRoleInputObjectSchema as StudentInClubUpdateWithoutRoleInputObjectSchema } from './StudentInClubUpdateWithoutRoleInput.schema';
import { StudentInClubUncheckedUpdateWithoutRoleInputObjectSchema as StudentInClubUncheckedUpdateWithoutRoleInputObjectSchema } from './StudentInClubUncheckedUpdateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentInClubWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentInClubUpdateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
export const StudentInClubUpdateWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.StudentInClubUpdateWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUpdateWithWhereUniqueWithoutRoleInput>;
export const StudentInClubUpdateWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
