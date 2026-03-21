import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsUpdateWithoutStudentInputObjectSchema as RegistrationsUpdateWithoutStudentInputObjectSchema } from './RegistrationsUpdateWithoutStudentInput.schema';
import { RegistrationsUncheckedUpdateWithoutStudentInputObjectSchema as RegistrationsUncheckedUpdateWithoutStudentInputObjectSchema } from './RegistrationsUncheckedUpdateWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationsUpdateWithoutStudentInputObjectSchema), z.lazy(() => RegistrationsUncheckedUpdateWithoutStudentInputObjectSchema)])
}).strict();
export const RegistrationsUpdateWithWhereUniqueWithoutStudentInputObjectSchema: z.ZodType<Prisma.RegistrationsUpdateWithWhereUniqueWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUpdateWithWhereUniqueWithoutStudentInput>;
export const RegistrationsUpdateWithWhereUniqueWithoutStudentInputObjectZodSchema = makeSchema();
