import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './StudentWhereUniqueInput.schema';
import { StudentCreateWithoutCollegeInputObjectSchema as StudentCreateWithoutCollegeInputObjectSchema } from './StudentCreateWithoutCollegeInput.schema';
import { StudentUncheckedCreateWithoutCollegeInputObjectSchema as StudentUncheckedCreateWithoutCollegeInputObjectSchema } from './StudentUncheckedCreateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StudentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StudentCreateWithoutCollegeInputObjectSchema), z.lazy(() => StudentUncheckedCreateWithoutCollegeInputObjectSchema)])
}).strict();
export const StudentCreateOrConnectWithoutCollegeInputObjectSchema: z.ZodType<Prisma.StudentCreateOrConnectWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateOrConnectWithoutCollegeInput>;
export const StudentCreateOrConnectWithoutCollegeInputObjectZodSchema = makeSchema();
