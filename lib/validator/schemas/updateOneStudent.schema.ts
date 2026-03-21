import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentSelectObjectSchema as StudentSelectObjectSchema } from './objects/StudentSelect.schema';
import { StudentIncludeObjectSchema as StudentIncludeObjectSchema } from './objects/StudentInclude.schema';
import { StudentUpdateInputObjectSchema as StudentUpdateInputObjectSchema } from './objects/StudentUpdateInput.schema';
import { StudentUncheckedUpdateInputObjectSchema as StudentUncheckedUpdateInputObjectSchema } from './objects/StudentUncheckedUpdateInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';

export const StudentUpdateOneSchema: z.ZodType<Prisma.StudentUpdateArgs> = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), data: z.union([StudentUpdateInputObjectSchema, StudentUncheckedUpdateInputObjectSchema]), where: StudentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudentUpdateArgs>;

export const StudentUpdateOneZodSchema = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), data: z.union([StudentUpdateInputObjectSchema, StudentUncheckedUpdateInputObjectSchema]), where: StudentWhereUniqueInputObjectSchema }).strict();