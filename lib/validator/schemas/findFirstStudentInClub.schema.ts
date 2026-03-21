import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentInClubIncludeObjectSchema as StudentInClubIncludeObjectSchema } from './objects/StudentInClubInclude.schema';
import { StudentInClubOrderByWithRelationInputObjectSchema as StudentInClubOrderByWithRelationInputObjectSchema } from './objects/StudentInClubOrderByWithRelationInput.schema';
import { StudentInClubWhereInputObjectSchema as StudentInClubWhereInputObjectSchema } from './objects/StudentInClubWhereInput.schema';
import { StudentInClubWhereUniqueInputObjectSchema as StudentInClubWhereUniqueInputObjectSchema } from './objects/StudentInClubWhereUniqueInput.schema';
import { StudentInClubScalarFieldEnumSchema } from './enums/StudentInClubScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudentInClubFindFirstSelectSchema: z.ZodType<Prisma.StudentInClubSelect> = z.object({
    id: z.boolean().optional(),
    clubId: z.boolean().optional(),
    studentId: z.boolean().optional(),
    roleId: z.boolean().optional(),
    status: z.boolean().optional(),
    club: z.boolean().optional(),
    role: z.boolean().optional(),
    student: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StudentInClubSelect>;

export const StudentInClubFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    clubId: z.boolean().optional(),
    studentId: z.boolean().optional(),
    roleId: z.boolean().optional(),
    status: z.boolean().optional(),
    club: z.boolean().optional(),
    role: z.boolean().optional(),
    student: z.boolean().optional()
  }).strict();

export const StudentInClubFindFirstSchema: z.ZodType<Prisma.StudentInClubFindFirstArgs> = z.object({ select: StudentInClubFindFirstSelectSchema.optional(), include: z.lazy(() => StudentInClubIncludeObjectSchema.optional()), orderBy: z.union([StudentInClubOrderByWithRelationInputObjectSchema, StudentInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentInClubWhereInputObjectSchema.optional(), cursor: StudentInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentInClubScalarFieldEnumSchema, StudentInClubScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudentInClubFindFirstArgs>;

export const StudentInClubFindFirstZodSchema = z.object({ select: StudentInClubFindFirstSelectSchema.optional(), include: z.lazy(() => StudentInClubIncludeObjectSchema.optional()), orderBy: z.union([StudentInClubOrderByWithRelationInputObjectSchema, StudentInClubOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentInClubWhereInputObjectSchema.optional(), cursor: StudentInClubWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentInClubScalarFieldEnumSchema, StudentInClubScalarFieldEnumSchema.array()]).optional() }).strict();