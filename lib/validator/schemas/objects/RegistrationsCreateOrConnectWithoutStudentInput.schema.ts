import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsCreateWithoutStudentInputObjectSchema as RegistrationsCreateWithoutStudentInputObjectSchema } from './RegistrationsCreateWithoutStudentInput.schema';
import { RegistrationsUncheckedCreateWithoutStudentInputObjectSchema as RegistrationsUncheckedCreateWithoutStudentInputObjectSchema } from './RegistrationsUncheckedCreateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistrationsCreateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutStudentInputObjectSchema)])
}).strict();
export const RegistrationsCreateOrConnectWithoutStudentInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateOrConnectWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateOrConnectWithoutStudentInput>;
export const RegistrationsCreateOrConnectWithoutStudentInputObjectZodSchema = makeSchema();
