import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentCreateManyInputObjectSchema as StudentCreateManyInputObjectSchema } from './objects/StudentCreateManyInput.schema';

export const StudentCreateManySchema: z.ZodType<Prisma.StudentCreateManyArgs> = z.object({ data: z.union([ StudentCreateManyInputObjectSchema, z.array(StudentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudentCreateManyArgs>;

export const StudentCreateManyZodSchema = z.object({ data: z.union([ StudentCreateManyInputObjectSchema, z.array(StudentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();