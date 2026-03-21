import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultySelectObjectSchema as FacultySelectObjectSchema } from './objects/FacultySelect.schema';
import { FacultyIncludeObjectSchema as FacultyIncludeObjectSchema } from './objects/FacultyInclude.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './objects/FacultyWhereUniqueInput.schema';
import { FacultyCreateInputObjectSchema as FacultyCreateInputObjectSchema } from './objects/FacultyCreateInput.schema';
import { FacultyUncheckedCreateInputObjectSchema as FacultyUncheckedCreateInputObjectSchema } from './objects/FacultyUncheckedCreateInput.schema';
import { FacultyUpdateInputObjectSchema as FacultyUpdateInputObjectSchema } from './objects/FacultyUpdateInput.schema';
import { FacultyUncheckedUpdateInputObjectSchema as FacultyUncheckedUpdateInputObjectSchema } from './objects/FacultyUncheckedUpdateInput.schema';

export const FacultyUpsertOneSchema: z.ZodType<Prisma.FacultyUpsertArgs> = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), where: FacultyWhereUniqueInputObjectSchema, create: z.union([ FacultyCreateInputObjectSchema, FacultyUncheckedCreateInputObjectSchema ]), update: z.union([ FacultyUpdateInputObjectSchema, FacultyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FacultyUpsertArgs>;

export const FacultyUpsertOneZodSchema = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), where: FacultyWhereUniqueInputObjectSchema, create: z.union([ FacultyCreateInputObjectSchema, FacultyUncheckedCreateInputObjectSchema ]), update: z.union([ FacultyUpdateInputObjectSchema, FacultyUncheckedUpdateInputObjectSchema ]) }).strict();