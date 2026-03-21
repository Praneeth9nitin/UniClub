import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutRegistrationsInputObjectSchema as StudentCreateWithoutRegistrationsInputObjectSchema } from './StudentCreateWithoutRegistrationsInput.schema';
import { StudentUncheckedCreateWithoutRegistrationsInputObjectSchema as StudentUncheckedCreateWithoutRegistrationsInputObjectSchema } from './StudentUncheckedCreateWithoutRegistrationsInput.schema';
import { StudentCreateOrConnectWithoutRegistrationsInputObjectSchema as StudentCreateOrConnectWithoutRegistrationsInputObjectSchema } from './StudentCreateOrConnectWithoutRegistrationsInput.schema';
import { StudentUpsertWithoutRegistrationsInputObjectSchema as StudentUpsertWithoutRegistrationsInputObjectSchema } from './StudentUpsertWithoutRegistrationsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema as StudentUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema } from './StudentUpdateToOneWithWhereWithoutRegistrationsInput.schema';
import { StudentUpdateWithoutRegistrationsInputObjectSchema as StudentUpdateWithoutRegistrationsInputObjectSchema } from './StudentUpdateWithoutRegistrationsInput.schema';
import { StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema as StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema } from './StudentUncheckedUpdateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutRegistrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutRegistrationsInputObjectSchema).optional(),
  upsert: z.lazy(() => StudentUpsertWithoutRegistrationsInputObjectSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => StudentUpdateToOneWithWhereWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUpdateWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUncheckedUpdateWithoutRegistrationsInputObjectSchema)]).optional()
}).strict();
export const StudentUpdateOneRequiredWithoutRegistrationsNestedInputObjectSchema: z.ZodType<Prisma.StudentUpdateOneRequiredWithoutRegistrationsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentUpdateOneRequiredWithoutRegistrationsNestedInput>;
export const StudentUpdateOneRequiredWithoutRegistrationsNestedInputObjectZodSchema = makeSchema();
