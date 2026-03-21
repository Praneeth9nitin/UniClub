import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyScalarWhereInputObjectSchema as FacultyScalarWhereInputObjectSchema } from './FacultyScalarWhereInput.schema';
import { FacultyUpdateManyMutationInputObjectSchema as FacultyUpdateManyMutationInputObjectSchema } from './FacultyUpdateManyMutationInput.schema';
import { FacultyUncheckedUpdateManyWithoutCollegeInputObjectSchema as FacultyUncheckedUpdateManyWithoutCollegeInputObjectSchema } from './FacultyUncheckedUpdateManyWithoutCollegeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FacultyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FacultyUpdateManyMutationInputObjectSchema), z.lazy(() => FacultyUncheckedUpdateManyWithoutCollegeInputObjectSchema)])
}).strict();
export const FacultyUpdateManyWithWhereWithoutCollegeInputObjectSchema: z.ZodType<Prisma.FacultyUpdateManyWithWhereWithoutCollegeInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUpdateManyWithWhereWithoutCollegeInput>;
export const FacultyUpdateManyWithWhereWithoutCollegeInputObjectZodSchema = makeSchema();
