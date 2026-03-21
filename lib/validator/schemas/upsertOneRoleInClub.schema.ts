import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './objects/RoleInClubSelect.schema';
import { RoleInClubIncludeObjectSchema as RoleInClubIncludeObjectSchema } from './objects/RoleInClubInclude.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './objects/RoleInClubWhereUniqueInput.schema';
import { RoleInClubCreateInputObjectSchema as RoleInClubCreateInputObjectSchema } from './objects/RoleInClubCreateInput.schema';
import { RoleInClubUncheckedCreateInputObjectSchema as RoleInClubUncheckedCreateInputObjectSchema } from './objects/RoleInClubUncheckedCreateInput.schema';
import { RoleInClubUpdateInputObjectSchema as RoleInClubUpdateInputObjectSchema } from './objects/RoleInClubUpdateInput.schema';
import { RoleInClubUncheckedUpdateInputObjectSchema as RoleInClubUncheckedUpdateInputObjectSchema } from './objects/RoleInClubUncheckedUpdateInput.schema';

export const RoleInClubUpsertOneSchema: z.ZodType<Prisma.RoleInClubUpsertArgs> = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), where: RoleInClubWhereUniqueInputObjectSchema, create: z.union([ RoleInClubCreateInputObjectSchema, RoleInClubUncheckedCreateInputObjectSchema ]), update: z.union([ RoleInClubUpdateInputObjectSchema, RoleInClubUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RoleInClubUpsertArgs>;

export const RoleInClubUpsertOneZodSchema = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), where: RoleInClubWhereUniqueInputObjectSchema, create: z.union([ RoleInClubCreateInputObjectSchema, RoleInClubUncheckedCreateInputObjectSchema ]), update: z.union([ RoleInClubUpdateInputObjectSchema, RoleInClubUncheckedUpdateInputObjectSchema ]) }).strict();