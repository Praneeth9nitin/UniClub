import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateManyStudentInputObjectSchema as StudentInClubCreateManyStudentInputObjectSchema } from './StudentInClubCreateManyStudentInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudentInClubCreateManyStudentInputObjectSchema), z.lazy(() => StudentInClubCreateManyStudentInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudentInClubCreateManyStudentInputEnvelopeObjectSchema: z.ZodType<Prisma.StudentInClubCreateManyStudentInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateManyStudentInputEnvelope>;
export const StudentInClubCreateManyStudentInputEnvelopeObjectZodSchema = makeSchema();
