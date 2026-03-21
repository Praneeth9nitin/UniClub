import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  clubId: z.string(),
  studentId: z.string()
}).strict();
export const StudentInClubClubIdStudentIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.StudentInClubClubIdStudentIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.StudentInClubClubIdStudentIdCompoundUniqueInput>;
export const StudentInClubClubIdStudentIdCompoundUniqueInputObjectZodSchema = makeSchema();
