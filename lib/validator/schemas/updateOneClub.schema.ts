import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubSelectObjectSchema as ClubSelectObjectSchema } from './objects/ClubSelect.schema';
import { ClubIncludeObjectSchema as ClubIncludeObjectSchema } from './objects/ClubInclude.schema';
import { ClubUpdateInputObjectSchema as ClubUpdateInputObjectSchema } from './objects/ClubUpdateInput.schema';
import { ClubUncheckedUpdateInputObjectSchema as ClubUncheckedUpdateInputObjectSchema } from './objects/ClubUncheckedUpdateInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './objects/ClubWhereUniqueInput.schema';

export const ClubUpdateOneSchema: z.ZodType<Prisma.ClubUpdateArgs> = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), data: z.union([ClubUpdateInputObjectSchema, ClubUncheckedUpdateInputObjectSchema]), where: ClubWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClubUpdateArgs>;

export const ClubUpdateOneZodSchema = z.object({ select: ClubSelectObjectSchema.optional(), include: ClubIncludeObjectSchema.optional(), data: z.union([ClubUpdateInputObjectSchema, ClubUncheckedUpdateInputObjectSchema]), where: ClubWhereUniqueInputObjectSchema }).strict();