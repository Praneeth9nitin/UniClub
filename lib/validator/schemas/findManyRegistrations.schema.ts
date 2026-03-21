import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RegistrationsIncludeObjectSchema as RegistrationsIncludeObjectSchema } from './objects/RegistrationsInclude.schema';
import { RegistrationsOrderByWithRelationInputObjectSchema as RegistrationsOrderByWithRelationInputObjectSchema } from './objects/RegistrationsOrderByWithRelationInput.schema';
import { RegistrationsWhereInputObjectSchema as RegistrationsWhereInputObjectSchema } from './objects/RegistrationsWhereInput.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './objects/RegistrationsWhereUniqueInput.schema';
import { RegistrationsScalarFieldEnumSchema } from './enums/RegistrationsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RegistrationsFindManySelectSchema: z.ZodType<Prisma.RegistrationsSelect> = z.object({
    id: z.boolean().optional(),
    studentId: z.boolean().optional(),
    eventId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    event: z.boolean().optional(),
    student: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.RegistrationsSelect>;

export const RegistrationsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    studentId: z.boolean().optional(),
    eventId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    deletedAt: z.boolean().optional(),
    event: z.boolean().optional(),
    student: z.boolean().optional()
  }).strict();

export const RegistrationsFindManySchema: z.ZodType<Prisma.RegistrationsFindManyArgs> = z.object({ select: RegistrationsFindManySelectSchema.optional(), include: z.lazy(() => RegistrationsIncludeObjectSchema.optional()), orderBy: z.union([RegistrationsOrderByWithRelationInputObjectSchema, RegistrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationsWhereInputObjectSchema.optional(), cursor: RegistrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistrationsScalarFieldEnumSchema, RegistrationsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.RegistrationsFindManyArgs>;

export const RegistrationsFindManyZodSchema = z.object({ select: RegistrationsFindManySelectSchema.optional(), include: z.lazy(() => RegistrationsIncludeObjectSchema.optional()), orderBy: z.union([RegistrationsOrderByWithRelationInputObjectSchema, RegistrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: RegistrationsWhereInputObjectSchema.optional(), cursor: RegistrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([RegistrationsScalarFieldEnumSchema, RegistrationsScalarFieldEnumSchema.array()]).optional() }).strict();