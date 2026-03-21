import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema';
import { StudentUpdateWithoutRegistrationsInputObjectSchema as StudentUpdateWithoutRegistrationsInputObjectSchema } from './StudentUpdateWithoutRegistrationsInput.schema';
import { StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema as StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './StudentUncheckedUpdateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => StudentUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema)])
}).strict();
export const StudentUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateToOneWithWhereWithoutRegistrationsInput>;
export const StudentUpdateToOneWithWhereWithoutRegistrationsInputObjectZodSchema = makeSchema();
