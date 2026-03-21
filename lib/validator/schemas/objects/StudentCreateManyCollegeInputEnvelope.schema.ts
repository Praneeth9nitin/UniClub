import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentCreateManyCollegeInputObjectSchema as StudentCreateManyCollegeInputObjectSchema } from './StudentCreateManyCollegeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudentCreateManyCollegeInputObjectSchema), z.lazy(() => StudentCreateManyCollegeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudentCreateManyCollegeInputEnvelopeObjectSchema: z.ZodType<Prisma.StudentCreateManyCollegeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudentCreateManyCollegeInputEnvelope>;
export const StudentCreateManyCollegeInputEnvelopeObjectZodSchema = makeSchema();
