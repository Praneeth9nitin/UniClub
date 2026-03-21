import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentUpdateManyMutationInputObjectSchema as StudentUpdateManyMutationInputObjectSchema } from './objects/StudentUpdateManyMutationInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';

export const StudentUpdateManySchema: z.ZodType<Prisma.StudentUpdateManyArgs> = z.object({ data: StudentUpdateManyMutationInputObjectSchema, where: StudentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentUpdateManyArgs>;

export const StudentUpdateManyZodSchema = z.object({ data: StudentUpdateManyMutationInputObjectSchema, where: StudentWhereInputObjectSchema.optional() }).strict();