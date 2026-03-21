import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubWhereInputObjectSchema as StudentInClubWhereInputObjectSchema } from './objects/StudentInClubWhereInput.schema';

export const StudentInClubDeleteManySchema: z.ZodType<Prisma.StudentInClubDeleteManyArgs> = z.object({ where: StudentInClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StudentInClubDeleteManyArgs>;

export const StudentInClubDeleteManyZodSchema = z.object({ where: StudentInClubWhereInputObjectSchema.optional() }).strict();