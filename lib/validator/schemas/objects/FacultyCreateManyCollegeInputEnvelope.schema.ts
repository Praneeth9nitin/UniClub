import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyCreateManyCollegeInputObjectSchema as FacultyCreateManyCollegeInputObjectSchema } from './FacultyCreateManyCollegeInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FacultyCreateManyCollegeInputObjectSchema), z.lazy(() => FacultyCreateManyCollegeInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FacultyCreateManyCollegeInputEnvelopeObjectSchema: z.ZodType<Prisma.FacultyCreateManyCollegeInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FacultyCreateManyCollegeInputEnvelope>;
export const FacultyCreateManyCollegeInputEnvelopeObjectZodSchema = makeSchema();
