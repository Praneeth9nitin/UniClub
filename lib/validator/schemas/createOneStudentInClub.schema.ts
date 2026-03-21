import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './objects/StudentInClubSelect.schema';
import { StudentInClubIncludeObjectSchema as StudentInClubIncludeObjectSchema } from './objects/StudentInClubInclude.schema';
import { StudentInClubCreateInputObjectSchema as StudentInClubCreateInputObjectSchema } from './objects/StudentInClubCreateInput.schema';
import { StudentInClubUncheckedCreateInputObjectSchema as StudentInClubUncheckedCreateInputObjectSchema } from './objects/StudentInClubUncheckedCreateInput.schema';

export const StudentInClubCreateOneSchema: z.ZodType<Prisma.StudentInClubCreateArgs> = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), data: z.union([StudentInClubCreateInputObjectSchema, StudentInClubUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StudentInClubCreateArgs>;

export const StudentInClubCreateOneZodSchema = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), data: z.union([StudentInClubCreateInputObjectSchema, StudentInClubUncheckedCreateInputObjectSchema]) }).strict();