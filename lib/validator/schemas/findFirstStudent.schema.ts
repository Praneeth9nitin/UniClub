import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { StudentIncludeObjectSchema as StudentIncludeObjectSchema } from './objects/StudentInclude.schema';
import { StudentOrderByWithRelationInputObjectSchema as StudentOrderByWithRelationInputObjectSchema } from './objects/StudentOrderByWithRelationInput.schema';
import { StudentWhereInputObjectSchema as StudentWhereInputObjectSchema } from './objects/StudentWhereInput.schema';
import { StudentWhereUniqueInputObjectSchema as StudentWhereUniqueInputObjectSchema } from './objects/StudentWhereUniqueInput.schema';
import { StudentScalarFieldEnumSchema } from './enums/StudentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const StudentFindFirstSelectSchema: z.ZodType<Prisma.StudentSelect> = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    rollnumber: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    registrations: z.boolean().optional(),
    college: z.boolean().optional(),
    clubs: z.boolean().optional(),
    follows: z.boolean().optional(),
    followsClub: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.StudentSelect>;

export const StudentFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    password: z.boolean().optional(),
    rollnumber: z.boolean().optional(),
    collegeId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    registrations: z.boolean().optional(),
    college: z.boolean().optional(),
    clubs: z.boolean().optional(),
    follows: z.boolean().optional(),
    followsClub: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const StudentFindFirstSchema: z.ZodType<Prisma.StudentFindFirstArgs> = z.object({ select: StudentFindFirstSelectSchema.optional(), include: z.lazy(() => StudentIncludeObjectSchema.optional()), orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentScalarFieldEnumSchema, StudentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.StudentFindFirstArgs>;

export const StudentFindFirstZodSchema = z.object({ select: StudentFindFirstSelectSchema.optional(), include: z.lazy(() => StudentIncludeObjectSchema.optional()), orderBy: z.union([StudentOrderByWithRelationInputObjectSchema, StudentOrderByWithRelationInputObjectSchema.array()]).optional(), where: StudentWhereInputObjectSchema.optional(), cursor: StudentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([StudentScalarFieldEnumSchema, StudentScalarFieldEnumSchema.array()]).optional() }).strict();