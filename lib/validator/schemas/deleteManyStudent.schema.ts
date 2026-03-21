import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';

export const StudentDeleteManySchema: z.ZodType<Prisma.StudentDeleteManyArgs> = z.object({ where: StudentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentDeleteManyArgs>;

export const StudentDeleteManyZodSchema = z.object({ where: StudentWhereInputObjectSchema.optional() }).strict();