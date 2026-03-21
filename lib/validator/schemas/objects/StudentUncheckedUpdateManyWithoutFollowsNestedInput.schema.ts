import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutFollowsInputObjectSchema as StudentCreateWithoutFollowsInputObjectSchema } from './StudentCreateWithoutFollowsInput.schema';
import { StudentUncheckedCreateWithoutFollowsInputObjectSchema as StudentUncheckedCreateWithoutFollowsInputObjectSchema } from './StudentUncheckedCreateWithoutFollowsInput.schema';
import { StudentCreateOrConnectWithoutFollowsInputObjectSchema as StudentCreateOrConnectWithoutFollowsInputObjectSchema } from './StudentCreateOrConnectWithoutFollowsInput.schema';
import { StudentUpsertWithWhereUniqueWithoutFollowsInputObjectSchema as StudentUpsertWithWhereUniqueWithoutFollowsInputObjectSchema } from './StudentUpsertWithWhereUniqueWithoutFollowsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithWhereUniqueWithoutFollowsInputObjectSchema as StudentUpdateWithWhereUniqueWithoutFollowsInputObjectSchema } from './StudentUpdateWithWhereUniqueWithoutFollowsInput.schema';
import { StudentUpdateManyWithWhereWithoutFollowsInputObjectSchema as StudentUpdateManyWithWhereWithoutFollowsInputObjectSchema } from './StudentUpdateManyWithWhereWithoutFollowsInput.schema';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutFollowsInputObjectSchema), z.lazy(() => StudentCreateWithoutFollowsInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutFollowsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutFollowsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutFollowsInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutFollowsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentUpsertWithWhereUniqueWithoutFollowsInputObjectSchema), z.lazy(() => StudentUpsertWithWhereUniqueWithoutFollowsInputObjectSchema).array()]).optional(),
  set: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentUpdateWithWhereUniqueWithoutFollowsInputObjectSchema), z.lazy(() => StudentUpdateWithWhereUniqueWithoutFollowsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentUpdateManyWithWhereWithoutFollowsInputObjectSchema), z.lazy(() => StudentUpdateManyWithWhereWithoutFollowsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentUncheckedUpdateManyWithoutFollowsNestedInputObjectSchema: z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutFollowsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUncheckedUpdateManyWithoutFollowsNestedInput>;
export const StudentUncheckedUpdateManyWithoutFollowsNestedInputObjectZodSchema = makeSchema();
