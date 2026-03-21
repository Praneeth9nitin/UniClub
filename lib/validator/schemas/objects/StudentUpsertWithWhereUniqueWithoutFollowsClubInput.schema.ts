import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutFollowsClubInputObjectSchema as StudentUpdateWithoutFollowsClubInputObjectSchema } from './StudentUpdateWithoutFollowsClubInput.schema';
import { StudentUncheckedUpdateWithoutFollowsClubInputObjectSchema as StudentUncheckedUpdateWithoutFollowsClubInputObjectSchema } from './StudentUncheckedUpdateWithoutFollowsClubInput.schema';
import { StudentCreateWithoutFollowsClubInputObjectSchema as StudentCreateWithoutFollowsClubInputObjectSchema } from './StudentCreateWithoutFollowsClubInput.schema';
import { StudentUncheckedCreateWithoutFollowsClubInputObjectSchema as StudentUncheckedCreateWithoutFollowsClubInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StudentUpdateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutFollowsClubInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsClubInputObjectSchema)])
}).strict();
export const StudentUpsertWithWhereUniqueWithoutFollowsClubInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutFollowsClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithWhereUniqueWithoutFollowsClubInput>;
export const StudentUpsertWithWhereUniqueWithoutFollowsClubInputObjectZodSchema = makeSchema();
