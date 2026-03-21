import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ClubSelectObjectSchema as ClubSelectObjectSchema } from './objects/ClubSelect.schema';
import { ClubUpdateManyMutationInputObjectSchema as ClubUpdateManyMutationInputObjectSchema } from './objects/ClubUpdateManyMutationInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './objects/ClubWhereInput.schema';

export const ClubUpdateManyAndReturnSchema: z.ZodType<Prisma.ClubUpdateManyAndReturnArgs> = z.object({ select: ClubSelectObjectSchema.optional(), data: ClubUpdateManyMutationInputObjectSchema, where: ClubWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClubUpdateManyAndReturnArgs>;

export const ClubUpdateManyAndReturnZodSchema = z.object({ select: ClubSelectObjectSchema.optional(), data: ClubUpdateManyMutationInputObjectSchema, where: ClubWhereInputObjectSchema.optional() }).strict();