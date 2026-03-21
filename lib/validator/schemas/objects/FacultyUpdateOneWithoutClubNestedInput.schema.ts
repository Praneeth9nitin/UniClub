import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyCreateWithoutClubInputObjectSchema as FacultyCreateWithoutClubInputObjectSchema } from './FacultyCreateWithoutClubInput.schema';
import { FacultyUncheckedCreateWithoutClubInputObjectSchema as FacultyUncheckedCreateWithoutClubInputObjectSchema } from './FacultyUncheckedCreateWithoutClubInput.schema';
import { FacultyCreateOrConnectWithoutClubInputObjectSchema as FacultyCreateOrConnectWithoutClubInputObjectSchema } from './FacultyCreateOrConnectWithoutClubInput.schema';
import { FacultyUpsertWithoutClubInputObjectSchema as FacultyUpsertWithoutClubInputObjectSchema } from './FacultyUpsertWithoutClubInput.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema';
import { FacultyWhereUniqueInputObjectSchema as FacultyWhereUniqueInputObjectSchema } from './FacultyWhereUniqueInput.schema';
import { FacultyUpdateToOneWithWhereWithoutClubInputObjectSchema as FacultyUpdateToOneWithWhereWithoutClubInputObjectSchema } from './FacultyUpdateToOneWithWhereWithoutClubInput.schema';
import { FacultyUpdateWithoutClubInputObjectSchema as FacultyUpdateWithoutClubInputObjectSchema } from './FacultyUpdateWithoutClubInput.schema';
import { FacultyUncheckedUpdateWithoutClubInputObjectSchema as FacultyUncheckedUpdateWithoutClubInputObjectSchema } from './FacultyUncheckedUpdateWithoutClubInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FacultyCreateWithoutClubInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutClubInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FacultyCreateOrConnectWithoutClubInputObjectSchema).optional(),
  upsert: z.lazy(() => FacultyUpsertWithoutClubInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => FacultyWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => FacultyWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => FacultyWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FacultyUpdateToOneWithWhereWithoutClubInputObjectSchema), z.lazy(() => FacultyUpdateWithoutClubInputObjectSchema), z.lazy(() => FacultyUncheckedUpdateWithoutClubInputObjectSchema)]).optional()
}).strict();
export const FacultyUpdateOneWithoutClubNestedInputObjectSchema: z.ZodType<Prisma.FacultyUpdateOneWithoutClubNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUpdateOneWithoutClubNestedInput>;
export const FacultyUpdateOneWithoutClubNestedInputObjectZodSchema = makeSchema();
