import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutFollowsClubInputObjectSchema as StudentCreateWithoutFollowsClubInputObjectSchema } from './StudentCreateWithoutFollowsClubInput.schema';
import { StudentUncheckedCreateWithoutFollowsClubInputObjectSchema as StudentUncheckedCreateWithoutFollowsClubInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsClubInput.schema';
import { StudentCreateOrConnectWithoutFollowsClubInputObjectSchema as StudentCreateOrConnectWithoutFollowsClubInputObjectSchema } from './StudentCreateOrConnectWithoutFollowsClubInput.schema';
import { StudentUpsertWithWhereUniqueWithoutFollowsClubInputObjectSchema as StudentUpsertWithWhereUniqueWithoutFollowsClubInputObjectSchema } from './StudentUpsertWithWhereUniqueWithoutFollowsClubInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithWhereUniqueWithoutFollowsClubInputObjectSchema as StudentUpdateWithWhereUniqueWithoutFollowsClubInputObjectSchema } from './StudentUpdateWithWhereUniqueWithoutFollowsClubInput.schema';
import { StudentUpdateManyWithWhereWithoutFollowsClubInputObjectSchema as StudentUpdateManyWithWhereWithoutFollowsClubInputObjectSchema } from './StudentUpdateManyWithWhereWithoutFollowsClubInput.schema';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentCreateWithoutFollowsClubInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutFollowsClubInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentUpsertWithWhereUniqueWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUpsertWithWhereUniqueWithoutFollowsClubInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentUpdateWithWhereUniqueWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUpdateWithWhereUniqueWithoutFollowsClubInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentUpdateManyWithWhereWithoutFollowsClubInputObjectSchema), z.lazy(() => StudentUpdateManyWithWhereWithoutFollowsClubInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedUpdateManyWithoutFollowsClubNestedInputObjectSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutFollowsClubNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutFollowsClubNestedInput>;
export const StudentUncheckedUpdateManyWithoutFollowsClubNestedInputObjectZodSchema = makeSchema();
