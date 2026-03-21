import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { RoleInClubSelectObjectSchema as RoleInClubSelectObjectSchema } from './objects/RoleInClubSelect.schema';
import { RoleInClubIncludeObjectSchema as RoleInClubIncludeObjectSchema } from './objects/RoleInClubInclude.schema';
import { RoleInClubUpdateInputObjectSchema as RoleInClubUpdateInputObjectSchema } from './objects/RoleInClubUpdateInput.schema';
import { RoleInClubUncheckedUpdateInputObjectSchema as RoleInClubUncheckedUpdateInputObjectSchema } from './objects/RoleInClubUncheckedUpdateInput.schema';
import { RoleInClubWhereUniqueInputObjectSchema as RoleInClubWhereUniqueInputObjectSchema } from './objects/RoleInClubWhereUniqueInput.schema';

export const RoleInClubUpdateOneSchema: z.ZodType<Prisma.RoleInClubUpdateArgs> = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), data: z.union([RoleInClubUpdateInputObjectSchema, RoleInClubUncheckedUpdateInputObjectSchema]), where: RoleInClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.RoleInClubUpdateArgs>;

export const RoleInClubUpdateOneZodSchema = z.object({ select: RoleInClubSelectObjectSchema.optional(), include: RoleInClubIncludeObjectSchema.optional(), data: z.union([RoleInClubUpdateInputObjectSchema, RoleInClubUncheckedUpdateInputObjectSchema]), where: RoleInClubWhereUniqueInputObjectSchema }).strict();