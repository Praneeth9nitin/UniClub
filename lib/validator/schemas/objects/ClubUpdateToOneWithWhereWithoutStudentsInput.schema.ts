import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubWhereInputObjectSchema as ClubWhereInputObjectSchema } from './ClubWhereInput.schema';
import { ClubUpdateWithoutStudentsInputObjectSchema as ClubUpdateWithoutStudentsInputObjectSchema } from './ClubUpdateWithoutStudentsInput.schema';
import { ClubUncheckedUpdateWithoutStudentsInputObjectSchema as ClubUncheckedUpdateWithoutStudentsInputObjectSchema } from './ClubUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClubWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClubUpdateWithoutStudentsInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutStudentsInputObjectSchema)])
}).strict();
export const ClubUpdateToOneWithWhereWithoutStudentsInputObjectSchema: z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutStudentsInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateToOneWithWhereWithoutStudentsInput>;
export const ClubUpdateToOneWithWhereWithoutStudentsInputObjectZodSchema = makeSchema();
