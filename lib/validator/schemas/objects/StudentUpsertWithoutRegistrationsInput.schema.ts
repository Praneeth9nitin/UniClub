import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentUpdateWithoutRegistrationsInputObjectSchema as StudentUpdateWithoutRegistrationsInputObjectSchema } from './StudentUpdateWithoutRegistrationsInput.schema';
import { StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema as StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './StudentUncheckedUpdateWithoutRegistrationsInput.schema';
import { StudentCreateWithoutRegistrationsInputObjectSchema as StudentCreateWithoutRegistrationsInputObjectSchema } from './StudentCreateWithoutRegistrationsInput.schema';
import { StudentUncheckedCreateWithoutRegistrationsInputObjectSchema as StudentUncheckedCreateWithoutRegistrationsInputObjectSchema } from './StudentUncheckedCreateWithoutRegistrationsInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './StudentWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => StudentUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema)]),
  create: z.union([z.lazy(() => StudentCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutRegistrationsInputObjectSchema)]),
  where: z.lazy(() => StudentWhereInputObjectSchema).optional()
}).strict();
export const StudentUpsertWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.StudentUpsertWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpsertWithoutRegistrationsInput>;
export const StudentUpsertWithoutRegistrationsInputObjectZodSchema = makeSchema();
