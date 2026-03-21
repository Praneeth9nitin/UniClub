import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsScalarWhereInputObjectSchema as RegistrationsScalarWhereInputObjectSchema } from './RegistrationsScalarWhereInput.schema';
import { RegistrationsUpdateManyMutationInputObjectSchema as RegistrationsUpdateManyMutationInputObjectSchema } from './RegistrationsUpdateManyMutationInput.schema';
import { RegistrationsUncheckedUpdateManyWithoutStudentInputObjectSchema as RegistrationsUncheckedUpdateManyWithoutStudentInputObjectSchema } from './RegistrationsUncheckedUpdateManyWithoutStudentInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationsUpdateManyMutationInputObjectSchema), z.lazy(() => RegistrationsUncheckedUpdateManyWithoutStudentInputObjectSchema)])
}).strict();
export const RegistrationsUpdateManyWithWhereWithoutStudentInputObjectSchema: z.ZodType<Prisma.RegistrationsUpdateManyWithWhereWithoutStudentInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUpdateManyWithWhereWithoutStudentInput>;
export const RegistrationsUpdateManyWithWhereWithoutStudentInputObjectZodSchema = makeSchema();
