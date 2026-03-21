import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './objects/RoleInClubSelect.schema';
import { RoleInClubCreateManyInputObjectSchema as RoleInClubCreateManyInputObjectSchema } from './objects/RoleInClubCreateManyInput.schema';

export const RoleInClubCreateManyAndReturnSchema: z.ZodType<Prisma.RoleInClubCreateManyAndReturnArgs> = z.object({ select: RoleInClubSelectObjectSchema.optional(), data: z.union([ RoleInClubCreateManyInputObjectSchema, z.array(RoleInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.RoleInClubCreateManyAndReturnArgs>;

export const RoleInClubCreateManyAndReturnZodSchema = z.object({ select: RoleInClubSelectObjectSchema.optional(), data: z.union([ RoleInClubCreateManyInputObjectSchema, z.array(RoleInClubCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();