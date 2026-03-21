import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultySelectObjectSchema as FacultySelectObjectSchema } from './objects/FacultySelect.schema';
import { FacultyIncludeObjectSchema as FacultyIncludeObjectSchema } from './objects/FacultyInclude.schema';
import { FacultyUpdateInputObjectSchema as FacultyUpdateInputObjectSchema } from './objects/FacultyUpdateInput.schema';
import { FacultyUncheckedUpdateInputObjectSchema as FacultyUncheckedUpdateInputObjectSchema } from './objects/FacultyUncheckedUpdateInput.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';

export const FacultyUpdateOneSchema: z.ZodType<Prisma.FacultyUpdateArgs> = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), data: z.union([FacultyUpdateInputObjectSchema, FacultyUncheckedUpdateInputObjectSchema]), where: FacultyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FacultyUpdateArgs>;

export const FacultyUpdateOneZodSchema = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), data: z.union([FacultyUpdateInputObjectSchema, FacultyUncheckedUpdateInputObjectSchema]), where: FacultyWhereUniqueInputObjectSchema }).strict();