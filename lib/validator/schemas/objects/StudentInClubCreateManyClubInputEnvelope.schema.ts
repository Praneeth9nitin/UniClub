import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateManyClubInputObjectSchema as StudentInClubCreateManyClubInputObjectSchema } from './StudentInClubCreateManyClubInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudentInClubCreateManyClubInputObjectSchema), z.lazy(() => StudentInClubCreateManyClubInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudentInClubCreateManyClubInputEnvelopeObjectSchema: z.ZodType<Prisma.StudentInClubCreateManyClubInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateManyClubInputEnvelope>;
export const StudentInClubCreateManyClubInputEnvelopeObjectZodSchema = makeSchema();
