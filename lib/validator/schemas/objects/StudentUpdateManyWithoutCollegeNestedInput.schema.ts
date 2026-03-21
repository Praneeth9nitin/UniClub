import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutCollegeInputObjectSchema as StudentCreateWithoutCollegeInputObjectSchema } from './StudentCreateWithoutCollegeInput.schema';
import { StudentUncheckedCreateWithoutCollegeInputObjectSchema as StudentUncheckedCreateWithoutCollegeInputObjectSchema } from './StudentUncheckedCreateWithoutCollegeInput.schema';
import { StudentCreateOrConnectWithoutCollegeInputObjectSchema as StudentCreateOrConnectWithoutCollegeInputObjectSchema } from './StudentCreateOrConnectWithoutCollegeInput.schema';
import { StudentUpsertWithWhereUniqueWithoutCollegeInputObjectSchema as StudentUpsertWithWhereUniqueWithoutCollegeInputObjectSchema } from './StudentUpsertWithWhereUniqueWithoutCollegeInput.schema';
import { StudentCreateManyCollegeInputEnvelopeObjectSchema as StudentCreateManyCollegeInputEnvelopeObjectSchema } from './StudentCreateManyCollegeInputEnvelope.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateWithWhereUniqueWithoutCollegeInputObjectSchema as StudentUpdateWithWhereUniqueWithoutCollegeInputObjectSchema } from './StudentUpdateWithWhereUniqueWithoutCollegeInput.schema';
import { StudentUpdateManyWithWhereWithoutCollegeInputObjectSchema as StudentUpdateManyWithWhereWithoutCollegeInputObjectSchema } from './StudentUpdateManyWithWhereWithoutCollegeInput.schema';
import { StudentScalarWhereInputObjectSchema as StudentScalarWhereInputObjectSchema } from './StudentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutCollegeInputObjectSchema), z.lazy(() => StudentCreateWithoutCollegeInputObjectSchema).array(), z.lazy(() => StudentUncheckedCreateWithoutCollegeInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCollegeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentCreateOrConnectWithoutCollegeInputObjectSchema), z.lazy(() => StudentCreateOrConnectWithoutCollegeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentUpsertWithWhereUniqueWithoutCollegeInputObjectSchema), z.lazy(() => StudentUpsertWithWhereUniqueWithoutCollegeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentCreateManyCollegeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentWhereUniqueInputObjectSchema), z.lazy(() => StudentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentUpdateWithWhereUniqueWithoutCollegeInputObjectSchema), z.lazy(() => StudentUpdateWithWhereUniqueWithoutCollegeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentUpdateManyWithWhereWithoutCollegeInputObjectSchema), z.lazy(() => StudentUpdateManyWithWhereWithoutCollegeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentScalarWhereInputObjectSchema), z.lazy(() => StudentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentUpdateManyWithoutCollegeNestedInputObjectSchema: z.ZodType<Prisma.StudentUpdateManyWithoutCollegeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateManyWithoutCollegeNestedInput>;
export const StudentUpdateManyWithoutCollegeNestedInputObjectZodSchema = makeSchema();
