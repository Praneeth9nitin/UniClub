import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsUpdateWithoutStudentInputObjectSchema as RegistrationsUpdateWithoutStudentInputObjectSchema } from './RegistrationsUpdateWithoutStudentInput.schema';
import { RegistrationsUncheckedUpdateWithoutStudentInputObjectSchema as RegistrationsUncheckedUpdateWithoutStudentInputObjectSchema } from './RegistrationsUncheckedUpdateWithoutStudentInput.schema';
import { RegistrationsCreateWithoutStudentInputObjectSchema as RegistrationsCreateWithoutStudentInputObjectSchema } from './RegistrationsCreateWithoutStudentInput.schema';
import { RegistrationsUncheckedCreateWithoutStudentInputObjectSchema as RegistrationsUncheckedCreateWithoutStudentInputObjectSchema } from './RegistrationsUncheckedCreateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistrationsUpdateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUncheckedUpdateWithoutStudentInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistrationsCreateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutStudentInputObjectSchema)])
}).strict();
export const RegistrationsUpsertWithWhereUniqueWithoutStudentInputObjectSchema: z.ZodType<Prisma.RegistrationsUpsertWithWhereUniqueWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUpsertWithWhereUniqueWithoutStudentInput>;
export const RegistrationsUpsertWithWhereUniqueWithoutStudentInputObjectZodSchema = makeSchema();
