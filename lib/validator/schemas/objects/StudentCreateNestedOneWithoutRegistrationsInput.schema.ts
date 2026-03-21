import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateWithoutRegistrationsInputObjectSchema as StudentCreateWithoutRegistrationsInputObjectSchema } from './StudentCreateWithoutRegistrationsInput.schema';
import { StudentUncheckedCreateWithoutRegistrationsInputObjectSchema as StudentUncheckedCreateWithoutRegistrationsInputObjectSchema } from './StudentUncheckedCreateWithoutRegistrationsInput.schema';
import { StudentCreateOrConnectWithoutRegistrationsInputObjectSchema as StudentCreateOrConnectWithoutRegistrationsInputObjectSchema } from './StudentCreateOrConnectWithoutRegistrationsInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => StudentCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutRegistrationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => StudentCreateOrConnectWithoutRegistrationsInputObjectSchema).optional(),
  connect: z.lazy(() => StudentWhereUniqueInputObjectSchema).optional()
}).strict();
export const StudentCreateNestedOneWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.StudentCreateNestedOneWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateNestedOneWithoutRegistrationsInput>;
export const StudentCreateNestedOneWithoutRegistrationsInputObjectZodSchema = makeSchema();
