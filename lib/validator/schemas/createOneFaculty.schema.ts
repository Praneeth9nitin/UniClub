import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { FacultySelectObjectSchema as FacultySelectObjectSchema } from './objects/FacultySelect.schema';
import { FacultyIncludeObjectSchema as FacultyIncludeObjectSchema } from './objects/FacultyInclude.schema';
import { FacultyCreateInputObjectSchema as FacultyCreateInputObjectSchema } from './objects/FacultyCreateInput.schema';
import { FacultyUncheckedCreateInputObjectSchema as FacultyUncheckedCreateInputObjectSchema } from './objects/FacultyUncheckedCreateInput.schema';

export const FacultyCreateOneSchema: z.ZodType<Prisma.FacultyCreateArgs> = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), data: z.union([FacultyCreateInputObjectSchema, FacultyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FacultyCreateArgs>;

export const FacultyCreateOneZodSchema = z.object({ select: FacultySelectObjectSchema.optional(), include: FacultyIncludeObjectSchema.optional(), data: z.union([FacultyCreateInputObjectSchema, FacultyUncheckedCreateInputObjectSchema]) }).strict();