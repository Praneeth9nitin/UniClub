import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubSelectObjectSchema as StudentInClubSelectObjectSchema } from './objects/StudentInClubSelect.schema';
import { StudentInClubIncludeObjectSchema as StudentInClubIncludeObjectSchema } from './objects/StudentInClubInclude.schema';
import { StudentInClubUpdateInputObjectSchema as StudentInClubUpdateInputObjectSchema } from './objects/StudentInClubUpdateInput.schema';
import { StudentInClubUncheckedUpdateInputObjectSchema as StudentInClubUncheckedUpdateInputObjectSchema } from './objects/StudentInClubUncheckedUpdateInput.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './objects/StudentInClubWhereUniqueInput.schema';

export const StudentInClubUpdateOneSchema: z.ZodType<Prisma.StudentInClubUpdateArgs> = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), data: z.union([StudentInClubUpdateInputObjectSchema, StudentInClubUncheckedUpdateInputObjectSchema]), where: StudentInClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StudentInClubUpdateArgs>;

export const StudentInClubUpdateOneZodSchema = z.object({ select: StudentInClubSelectObjectSchema.optional(), include: StudentInClubIncludeObjectSchema.optional(), data: z.union([StudentInClubUpdateInputObjectSchema, StudentInClubUncheckedUpdateInputObjectSchema]), where: StudentInClubWhereUniqueInputObjectSchema }).strict();