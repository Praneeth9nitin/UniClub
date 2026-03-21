import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubCreateManyRoleInputObjectSchema as StudentInClubCreateManyRoleInputObjectSchema } from './StudentInClubCreateManyRoleInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StudentInClubCreateManyRoleInputObjectSchema), z.lazy(() => StudentInClubCreateManyRoleInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StudentInClubCreateManyRoleInputEnvelopeObjectSchema: z.ZodType<Prisma.StudentInClubCreateManyRoleInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubCreateManyRoleInputEnvelope>;
export const StudentInClubCreateManyRoleInputEnvelopeObjectZodSchema = makeSchema();
