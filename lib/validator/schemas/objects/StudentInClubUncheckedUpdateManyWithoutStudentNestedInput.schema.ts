import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateWithoutStudentInputObjectSchema as StudentInClubCreateWithoutStudentInputObjectSchema } from './StudentInClubCreateWithoutStudentInput.schema';
import { StudentInClubUncheckedCreateWithoutStudentInputObjectSchema as StudentInClubUncheckedCreateWithoutStudentInputObjectSchema } from './StudentInClubUncheckedCreateWithoutStudentInput.schema';
import { StudentInClubCreateOrConnectWithoutStudentInputObjectSchema as StudentInClubCreateOrConnectWithoutStudentInputObjectSchema } from './StudentInClubCreateOrConnectWithoutStudentInput.schema';
import { StudentInClubUpsertWithWhereUniqueWithoutStudentInputObjectSchema as StudentInClubUpsertWithWhereUniqueWithoutStudentInputObjectSchema } from './StudentInClubUpsertWithWhereUniqueWithoutStudentInput.schema';
import { StudentInClubCreateManyStudentInputEnvelopeObjectSchema as StudentInClubCreateManyStudentInputEnvelopeObjectSchema } from './StudentInClubCreateManyStudentInputEnvelope.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithWhereUniqueWithoutStudentInputObjectSchema as StudentInClubUpdateWithWhereUniqueWithoutStudentInputObjectSchema } from './StudentInClubUpdateWithWhereUniqueWithoutStudentInput.schema';
import { StudentInClubUpdateManyWithWhereWithoutStudentInputObjectSchema as StudentInClubUpdateManyWithWhereWithoutStudentInputObjectSchema } from './StudentInClubUpdateManyWithWhereWithoutStudentInput.schema';
import { StudentInClubScalarWhereInputObjectSchema as StudentInClubScalarWhereInputObjectSchema } from './StudentInClubScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentInClubCreateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubCreateWithoutStudentInputObjectSchema).array(), z.lazy(() => StudentInClubUncheckedCreateWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutStudentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentInClubCreateOrConnectWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubCreateOrConnectWithoutStudentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentInClubUpsertWithWhereUniqueWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUpsertWithWhereUniqueWithoutStudentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentInClubCreateManyStudentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentInClubUpdateWithWhereUniqueWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUpdateWithWhereUniqueWithoutStudentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentInClubUpdateManyWithWhereWithoutStudentInputObjectSchema), z.lazy(() => StudentInClubUpdateManyWithWhereWithoutStudentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentInClubScalarWhereInputObjectSchema), z.lazy(() => StudentInClubScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentInClubUncheckedUpdateManyWithoutStudentNestedInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutStudentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutStudentNestedInput>;
export const StudentInClubUncheckedUpdateManyWithoutStudentNestedInputObjectZodSchema = makeSchema();
