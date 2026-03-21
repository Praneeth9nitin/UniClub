import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentSelectObjectSchema as StudentSelectObjectSchema } from './objects/StudentSelect.schema';
import { StudentCreateManyInputObjectSchema as StudentCreateManyInputObjectSchema } from './objects/StudentCreateManyInput.schema';

export const StudentCreateManyAndReturnSchema: z.ZodType<Prisma.StudentCreateManyAndReturnArgs> = z.object({ select: StudentSelectObjectSchema.optional(), data: z.union([ StudentCreateManyInputObjectSchema, z.array(StudentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StudentCreateManyAndReturnArgs>;

export const StudentCreateManyAndReturnZodSchema = z.object({ select: StudentSelectObjectSchema.optional(), data: z.union([ StudentCreateManyInputObjectSchema, z.array(StudentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();