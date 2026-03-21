import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentSelectObjectSchema as StudentSelectObjectSchema } from './objects/StudentSelect.schema';
import { StudentIncludeObjectSchema as StudentIncludeObjectSchema } from './objects/StudentInclude.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';

export const StudentDeleteOneSchema: z.ZodType<Prisma.StudentDeleteArgs> = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), where: StudentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudentDeleteArgs>;

export const StudentDeleteOneZodSchema = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), where: StudentWhereUniqueInputObjectSchema }).strict();