import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StudentInClubClubIdStudentIdCompoundUniqueInputObjectSchema as StudentInClubClubIdStudentIdCompoundUniqueInputObjectSchema } from './StudentInClubClubIdStudentIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  clubId_studentId: z.lazy(() => StudentInClubClubIdStudentIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const StudentInClubWhereUniqueInputObjectSchema: z.ZodType<Prisma.StudentInClubWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubWhereUniqueInput>;
export const StudentInClubWhereUniqueInputObjectZodSchema = makeSchema();
