import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubUpdateWithoutStudentsInputObjectSchema as ClubUpdateWithoutStudentsInputObjectSchema } from './ClubUpdateWithoutStudentsInput.schema';
import { ClubUncheckedUpdateWithoutStudentsInputObjectSchema as ClubUncheckedUpdateWithoutStudentsInputObjectSchema } from './ClubUncheckedUpdateWithoutStudentsInput.schema';
import { ClubCreateWithoutStudentsInputObjectSchema as ClubCreateWithoutStudentsInputObjectSchema } from './ClubCreateWithoutStudentsInput.schema';
import { ClubUncheckedCreateWithoutStudentsInputObjectSchema as ClubUncheckedCreateWithoutStudentsInputObjectSchema } from './ClubUncheckedCreateWithoutStudentsInput.schema';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClubUpdateWithoutStudentsInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutStudentsInputObjectSchema)]),
  create: z.union([z.lazy(() => ClubCreateWithoutStudentsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutStudentsInputObjectSchema)]),
  where: z.lazy(() => ClubWhereInputObjectSchema).optional()
}).strict();
export const ClubUpsertWithoutStudentsInputObjectSchema: z.ZodType<Prisma.ClubUpsertWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpsertWithoutStudentsInput>;
export const ClubUpsertWithoutStudentsInputObjectZodSchema = makeSchema();
