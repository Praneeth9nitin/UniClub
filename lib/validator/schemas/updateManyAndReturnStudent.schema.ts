import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentSelectObjectSchema as StudentSelectObjectSchema } from './objects/StudentSelect.schema';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './objects/StudentUpdateManyMutationInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';

export const StudentUpdateManyAndReturnSchema: z.ZodType<Prisma.StudentUpdateManyAndReturnArgs> = z.object({ select: StudentSelectObjectSchema.optional(), data: StudentUpdateManyMutationInputObjectSchema, where: StudentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentUpdateManyAndReturnArgs>;

export const StudentUpdateManyAndReturnZodSchema = z.object({ select: StudentSelectObjectSchema.optional(), data: StudentUpdateManyMutationInputObjectSchema, where: StudentWhereInputObjectSchema.optional() }).strict();