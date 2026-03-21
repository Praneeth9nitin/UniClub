import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateWithoutClubInputObjectSchema as StudentInClubCreateWithoutClubInputObjectSchema } from './StudentInClubCreateWithoutClubInput.schema';
import { StudentInClubUncheckedCreateWithoutClubInputObjectSchema as StudentInClubUncheckedCreateWithoutClubInputObjectSchema } from './StudentInClubUncheckedCreateWithoutClubInput.schema';
import { StudentInClubCreateOrConnectWithoutClubInputObjectSchema as StudentInClubCreateOrConnectWithoutClubInputObjectSchema } from './StudentInClubCreateOrConnectWithoutClubInput.schema';
import { StudentInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema as StudentInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema } from './StudentInClubUpsertWithWhereUniqueWithoutClubInput.schema';
import { StudentInClubCreateManyClubInputEnvelopeObjectSchema as StudentInClubCreateManyClubInputEnvelopeObjectSchema } from './StudentInClubCreateManyClubInputEnvelope.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema as StudentInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema } from './StudentInClubUpdateWithWhereUniqueWithoutClubInput.schema';
import { StudentInClubUpdateManyWithWhereWithoutClubInputObjectSchema as StudentInClubUpdateManyWithWhereWithoutClubInputObjectSchema } from './StudentInClubUpdateManyWithWhereWithoutClubInput.schema';
import { StudentInClubScalarWhereInputObjectSchema as StudentInClubScalarWhereInputObjectSchema } from './StudentInClubScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentInClubCreateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubCreateWithoutClubInputObjectSchema).array(), z.lazy(() => StudentInClubUncheckedCreateWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutClubInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentInClubCreateOrConnectWithoutClubInputObjectSchema), z.lazy(() => StudentInClubCreateOrConnectWithoutClubInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUpsertWithWhereUniqueWithoutClubInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentInClubCreateManyClubInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUpdateWithWhereUniqueWithoutClubInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentInClubUpdateManyWithWhereWithoutClubInputObjectSchema), z.lazy(() => StudentInClubUpdateManyWithWhereWithoutClubInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentInClubScalarWhereInputObjectSchema), z.lazy(() => StudentInClubScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentInClubUncheckedUpdateManyWithoutClubNestedInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutClubNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutClubNestedInput>;
export const StudentInClubUncheckedUpdateManyWithoutClubNestedInputObjectZodSchema = makeSchema();
