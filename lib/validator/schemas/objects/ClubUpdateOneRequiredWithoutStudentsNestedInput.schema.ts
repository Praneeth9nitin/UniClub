import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ClubCreateWithoutStudentsInputObjectSchema as ClubCreateWithoutStudentsInputObjectSchema } from './ClubCreateWithoutStudentsInput.schema';
import { ClubUncheckedCreateWithoutStudentsInputObjectSchema as ClubUncheckedCreateWithoutStudentsInputObjectSchema } from './ClubUncheckedCreateWithoutStudentsInput.schema';
import { ClubCreateOrConnectWithoutStudentsInputObjectSchema as ClubCreateOrConnectWithoutStudentsInputObjectSchema } from './ClubCreateOrConnectWithoutStudentsInput.schema';
import { ClubUpsertWithoutStudentsInputObjectSchema as ClubUpsertWithoutStudentsInputObjectSchema } from './ClubUpsertWithoutStudentsInput.schema';
import { ClubWhereUniqueInputObjectSchema as ClubWhereUniqueInputObjectSchema } from './ClubWhereUniqueInput.schema';
import { ClubUpdateToOneWithWhereWithoutStudentsInputObjectSchema as ClubUpdateToOneWithWhereWithoutStudentsInputObjectSchema } from './ClubUpdateToOneWithWhereWithoutStudentsInput.schema';
import { ClubUpdateWithoutStudentsInputObjectSchema as ClubUpdateWithoutStudentsInputObjectSchema } from './ClubUpdateWithoutStudentsInput.schema';
import { ClubUncheckedUpdateWithoutStudentsInputObjectSchema as ClubUncheckedUpdateWithoutStudentsInputObjectSchema } from './ClubUncheckedUpdateWithoutStudentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClubCreateWithoutStudentsInputObjectSchema), z.lazy(() => ClubUncheckedCreateWithoutStudentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClubCreateOrConnectWithoutStudentsInputObjectSchema).optional(),
  upsert: z.lazy(() => ClubUpsertWithoutStudentsInputObjectSchema).optional(),
  connect: z.lazy(() => ClubWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClubUpdateToOneWithWhereWithoutStudentsInputObjectSchema), z.lazy(() => ClubUpdateWithoutStudentsInputObjectSchema), z.lazy(() => ClubUncheckedUpdateWithoutStudentsInputObjectSchema)]).optional()
}).strict();
export const ClubUpdateOneRequiredWithoutStudentsNestedInputObjectSchema: z.ZodType<Prisma.ClubUpdateOneRequiredWithoutStudentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClubUpdateOneRequiredWithoutStudentsNestedInput>;
export const ClubUpdateOneRequiredWithoutStudentsNestedInputObjectZodSchema = makeSchema();
