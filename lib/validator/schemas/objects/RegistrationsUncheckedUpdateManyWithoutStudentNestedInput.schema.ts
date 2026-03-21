import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateWithoutStudentInputObjectSchema as RegistrationsCreateWithoutStudentInputObjectSchema } from './RegistrationsCreateWithoutStudentInput.schema';
import { RegistrationsUncheckedCreateWithoutStudentInputObjectSchema as RegistrationsUncheckedCreateWithoutStudentInputObjectSchema } from './RegistrationsUncheckedCreateWithoutStudentInput.schema';
import { RegistrationsCreateOrConnectWithoutStudentInputObjectSchema as RegistrationsCreateOrConnectWithoutStudentInputObjectSchema } from './RegistrationsCreateOrConnectWithoutStudentInput.schema';
import { RegistrationsUpsertWithWhereUniqueWithoutStudentInputObjectSchema as RegistrationsUpsertWithWhereUniqueWithoutStudentInputObjectSchema } from './RegistrationsUpsertWithWhereUniqueWithoutStudentInput.schema';
import { RegistrationsCreateManyStudentInputEnvelopeObjectSchema as RegistrationsCreateManyStudentInputEnvelopeObjectSchema } from './RegistrationsCreateManyStudentInputEnvelope.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsUpdateWithWhereUniqueWithoutStudentInputObjectSchema as RegistrationsUpdateWithWhereUniqueWithoutStudentInputObjectSchema } from './RegistrationsUpdateWithWhereUniqueWithoutStudentInput.schema';
import { RegistrationsUpdateManyWithWhereWithoutStudentInputObjectSchema as RegistrationsUpdateManyWithWhereWithoutStudentInputObjectSchema } from './RegistrationsUpdateManyWithWhereWithoutStudentInput.schema';
import { RegistrationsScalarWhereInputObjectSchema as RegistrationsScalarWhereInputObjectSchema } from './RegistrationsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationsCreateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsCreateWithoutStudentInputObjectSchema).array(), z.lazy(() => RegistrationsUncheckedCreateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutStudentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationsCreateOrConnectWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsCreateOrConnectWithoutStudentInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistrationsUpsertWithWhereUniqueWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUpsertWithWhereUniqueWithoutStudentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationsCreateManyStudentInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistrationsUpdateWithWhereUniqueWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUpdateWithWhereUniqueWithoutStudentInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistrationsUpdateManyWithWhereWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUpdateManyWithWhereWithoutStudentInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistrationsScalarWhereInputObjectSchema), z.lazy(() => RegistrationsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationsUncheckedUpdateManyWithoutStudentNestedInputObjectSchema: z.ZodType<Prisma.RegistrationsUncheckedUpdateManyWithoutStudentNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUncheckedUpdateManyWithoutStudentNestedInput>;
export const RegistrationsUncheckedUpdateManyWithoutStudentNestedInputObjectZodSchema = makeSchema();
