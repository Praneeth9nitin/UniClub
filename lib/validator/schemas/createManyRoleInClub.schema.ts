import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubCreateManyInputObjectSchema as RoleInClubCreateManyInputObjectSchema } from './objects/RoleInClubCreateManyInput.schema';

export const RoleInClubCreateManySchema: z.ZodType<Prisma.RoleInClubCreateManyArgs> = z.object({ data: z.union([ RoleInClubCreateManyInputObjectSchema, z.array(RoleInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoleInClubCreateManyArgs>;

export const RoleInClubCreateManyZodSchema = z.object({ data: z.union([ RoleInClubCreateManyInputObjectSchema, z.array(RoleInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();