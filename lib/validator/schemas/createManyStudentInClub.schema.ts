import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubCreateManyInputObjectSchema as StudentInClubCreateManyInputObjectSchema } from './objects/StudentInClubCreateManyInput.schema';

export const StudentInClubCreateManySchema: z.ZodType<Prisma.StudentInClubCreateManyArgs> = z.object({ data: z.union([ StudentInClubCreateManyInputObjectSchema, z.array(StudentInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudentInClubCreateManyArgs>;

export const StudentInClubCreateManyZodSchema = z.object({ data: z.union([ StudentInClubCreateManyInputObjectSchema, z.array(StudentInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();