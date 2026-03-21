import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateWithoutStudentInputObjectSchema as RegistrationsCreateWithoutStudentInputObjectSchema } from './RegistrationsCreateWithoutStudentInput.schema';
import { RegistrationsUncheckedCreateWithoutStudentInputObjectSchema as RegistrationsUncheckedCreateWithoutStudentInputObjectSchema } from './RegistrationsUncheckedCreateWithoutStudentInput.schema';
import { RegistrationsCreateOrConnectWithoutStudentInputObjectSchema as RegistrationsCreateOrConnectWithoutStudentInputObjectSchema } from './RegistrationsCreateOrConnectWithoutStudentInput.schema';
import { RegistrationsCreateManyStudentInputEnvelopeObjectSchema as RegistrationsCreateManyStudentInputEnvelopeObjectSchema } from './RegistrationsCreateManyStudentInputEnvelope.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationsCreateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsCreateWithoutStudentInputObjectSchema).array(), z.lazy(() => RegistrationsUncheckedCreateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutStudentInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationsCreateOrConnectWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsCreateOrConnectWithoutStudentInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationsCreateManyStudentInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectSchema: z.ZodType<Prisma.RegistrationsUncheckedCreateNestedManyWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUncheckedCreateNestedManyWithoutStudentInput>;
export const RegistrationsUncheckedCreateNestedManyWithoutStudentInputObjectZodSchema = makeSchema();
