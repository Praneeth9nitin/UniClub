import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentSelectObjectSchema as StudentSelectObjectSchema } from './objects/StudentSelect.schema';
import { StudentIncludeObjectSchema as StudentIncludeObjectSchema } from './objects/StudentInclude.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';
import { StudentCreateInputObjectSchema as StudentCreateInputObjectSchema } from './objects/StudentCreateInput.schema';
import { StudentUncheckedCreateInputObjectSchema as StudentUncheckedCreateInputObjectSchema } from './objects/StudentUncheckedCreateInput.schema';
import { StudentUpdateInputObjectSchema as StudentUpdateInputObjectSchema } from './objects/StudentUpdateInput.schema';
import { StudentUncheckedUpdateInputObjectSchema as StudentUncheckedUpdateInputObjectSchema } from './objects/StudentUncheckedUpdateInput.schema';

export const StudentUpsertOneSchema: z.ZodType<Prisma.StudentUpsertArgs> = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), where: StudentWhereUniqueInputObjectSchema, create: z.union([ StudentCreateInputObjectSchema, StudentUncheckedCreateInputObjectSchema ]), update: z.union([ StudentUpdateInputObjectSchema, StudentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StudentUpsertArgs>;

export const StudentUpsertOneZodSchema = z.object({ select: StudentSelectObjectSchema.optional(), include: StudentIncludeObjectSchema.optional(), where: StudentWhereUniqueInputObjectSchema, create: z.union([ StudentCreateInputObjectSchema, StudentUncheckedCreateInputObjectSchema ]), update: z.union([ StudentUpdateInputObjectSchema, StudentUncheckedUpdateInputObjectSchema ]) }).strict();