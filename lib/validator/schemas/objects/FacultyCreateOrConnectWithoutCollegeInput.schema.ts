import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyCreateWithoutCollegeInputObjectSchema as FacultyCreateWithoutCollegeInputObjectSchema } from './FacultyCreateWithoutCollegeInput.schema';
import { FacultyUncheckedCreateWithoutCollegeInputObjectSchema as FacultyUncheckedCreateWithoutCollegeInputObjectSchema } from './FacultyUncheckedCreateWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacultyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FacultyCreateWithoutCollegeInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutCollegeInputObjectSchema)])
}).strict();
export const FacultyCreateOrConnectWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyCreateOrConnectWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateOrConnectWithoutCollegeInput>;
export const FacultyCreateOrConnectWithoutCollegeInputObjectZodSchema = makeSchema();
