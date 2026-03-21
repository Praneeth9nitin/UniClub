import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithoutFollowsClubInputObjectSchema as StudentUpdateWithoutFollowsClubInputObjectSchema } from './StudentUpdateWithoutFollowsClubInput.schema';
import { StudentUncheckedUpdateWithoutFollowsClubInputObjectSchema as StudentUncheckedUpdateWithoutFollowsClubInputObjectSchema } from './StudentUncheckedUpdateWithoutFollowsClubInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StudentUpdateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutFollowsClubInputObjectSchema)])
}).strict();
export const StudentUpdateWithWhereUniqueWithoutFollowsClubInputObjectSchema: z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutFollowsClubInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateWithWhereUniqueWithoutFollowsClubInput>;
export const StudentUpdateWithWhereUniqueWithoutFollowsClubInputObjectZodSchema = makeSchema();
