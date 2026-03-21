import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutRegistrationsInputObjectSchema as StudentCreateWithoutRegistrationsInputObjectSchema } from './StudentCreateWithoutRegistrationsInput.schema';
import { StudentUncheckedCreateWithoutRegistrationsInputObjectSchema as StudentUncheckedCreateWithoutRegistrationsInputObjectSchema } from './StudentUncheckedCreateWithoutRegistrationsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutRegistrationsInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutRegistrationsInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutRegistrationsInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutRegistrationsInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutRegistrationsInput>;
export const StudentCreateOrConnectWithoutRegistrationsInputObjectZodSchema = makeSchema();
