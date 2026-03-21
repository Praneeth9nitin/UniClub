import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './objects/StudentInClubSelect.schema';
import { StudentInClubIncludeObjectSchema as StudentInClubIncludeObjectSchema } from './objects/StudentInClubInclude.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './objects/StudentInClubWhereUniqueInput.schema';
import { StudentInClubCreateInputObjectSchema as StudentInClubCreateInputObjectSchema } from './objects/StudentInClubCreateInput.schema';
import { StudentInClubUncheckedCreateInputObjectSchema as StudentInClubUncheckedCreateInputObjectSchema } from './objects/StudentInClubUncheckedCreateInput.schema';
import { StudentInClubUpdateInputObjectSchema as StudentInClubUpdateInputObjectSchema } from './objects/StudentInClubUpdateInput.schema';
import { StudentInClubUncheckedUpdateInputObjectSchema as StudentInClubUncheckedUpdateInputObjectSchema } from './objects/StudentInClubUncheckedUpdateInput.schema';

export const StudentInClubUpsertOneSchema: z.ZodType<Prisma.StudentInClubUpsertArgs> = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), where: StudentInClubWhereUniqueInputObjectSchema, create: z.union([ StudentInClubCreateInputObjectSchema, StudentInClubUncheckedCreateInputObjectSchema ]), update: z.union([ StudentInClubUpdateInputObjectSchema, StudentInClubUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StudentInClubUpsertArgs>;

export const StudentInClubUpsertOneZodSchema = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), where: StudentInClubWhereUniqueInputObjectSchema, create: z.union([ StudentInClubCreateInputObjectSchema, StudentInClubUncheckedCreateInputObjectSchema ]), update: z.union([ StudentInClubUpdateInputObjectSchema, StudentInClubUncheckedUpdateInputObjectSchema ]) }).strict();