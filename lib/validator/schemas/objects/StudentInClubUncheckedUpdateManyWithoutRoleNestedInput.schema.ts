import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateWithoutRoleInputObjectSchema as StudentInClubCreateWithoutRoleInputObjectSchema } from './StudentInClubCreateWithoutRoleInput.schema';
import { StudentInClubUncheckedCreateWithoutRoleInputObjectSchema as StudentInClubUncheckedCreateWithoutRoleInputObjectSchema } from './StudentInClubUncheckedCreateWithoutRoleInput.schema';
import { StudentInClubCreateOrConnectWithoutRoleInputObjectSchema as StudentInClubCreateOrConnectWithoutRoleInputObjectSchema } from './StudentInClubCreateOrConnectWithoutRoleInput.schema';
import { StudentInClubUpsertWithWhereUniqueWithoutRoleInputObjectSchema as StudentInClubUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './StudentInClubUpsertWithWhereUniqueWithoutRoleInput.schema';
import { StudentInClubCreateManyRoleInputEnvelopeObjectSchema as StudentInClubCreateManyRoleInputEnvelopeObjectSchema } from './StudentInClubCreateManyRoleInputEnvelope.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './StudentInClubWhereUniqueInput.schema';
import { StudentInClubUpdateWithWhereUniqueWithoutRoleInputObjectSchema as StudentInClubUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './StudentInClubUpdateWithWhereUniqueWithoutRoleInput.schema';
import { StudentInClubUpdateManyWithWhereWithoutRoleInputObjectSchema as StudentInClubUpdateManyWithWhereWithoutRoleInputObjectSchema } from './StudentInClubUpdateManyWithWhereWithoutRoleInput.schema';
import { StudentInClubScalarWhereInputObjectSchema as StudentInClubScalarWhereInputObjectSchema } from './StudentInClubScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentInClubCreateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => StudentInClubUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => StudentInClubCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => StudentInClubUpsertWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUpsertWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => StudentInClubCreateManyRoleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => StudentInClubWhereUniqueInputObjectSchema), z.lazy(() => StudentInClubWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => StudentInClubUpdateWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUpdateWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => StudentInClubUpdateManyWithWhereWithoutRoleInputObjectSchema), z.lazy(() => StudentInClubUpdateManyWithWhereWithoutRoleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => StudentInClubScalarWhereInputObjectSchema), z.lazy(() => StudentInClubScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectSchema: z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutRoleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubUncheckedUpdateManyWithoutRoleNestedInput>;
export const StudentInClubUncheckedUpdateManyWithoutRoleNestedInputObjectZodSchema = makeSchema();
