import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './objects/StudentInClubSelect.schema';
import { StudentInClubCreateManyInputObjectSchema as StudentInClubCreateManyInputObjectSchema } from './objects/StudentInClubCreateManyInput.schema';

export const StudentInClubCreateManyAndReturnSchema: z.ZodType<Prisma.StudentInClubCreateManyAndReturnArgs> = z.object({ select: StudentInClubSelectObjectSchema.optional(), data: z.union([ StudentInClubCreateManyInputObjectSchema, z.array(StudentInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudentInClubCreateManyAndReturnArgs>;

export const StudentInClubCreateManyAndReturnZodSchema = z.object({ select: StudentInClubSelectObjectSchema.optional(), data: z.union([ StudentInClubCreateManyInputObjectSchema, z.array(StudentInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();