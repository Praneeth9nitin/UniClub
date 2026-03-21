import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './objects/RoleInClubSelect.schema';
import { RoleInClubIncludeObjectSchema as RoleInClubIncludeObjectSchema } from './objects/RoleInClubInclude.schema';
import { RoleInClubCreateInputObjectSchema as RoleInClubCreateInputObjectSchema } from './objects/RoleInClubCreateInput.schema';
import { RoleInClubUncheckedCreateInputObjectSchema as RoleInClubUncheckedCreateInputObjectSchema } from './objects/RoleInClubUncheckedCreateInput.schema';

export const RoleInClubCreateOneSchema: z.ZodType<Prisma.RoleInClubCreateArgs> = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), data: z.union([RoleInClubCreateInputObjectSchema, RoleInClubUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.RoleInClubCreateArgs>;

export const RoleInClubCreateOneZodSchema = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), data: z.union([RoleInClubCreateInputObjectSchema, RoleInClubUncheckedCreateInputObjectSchema]) }).strict();