import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { FacultyUpdateWithoutClubInputObjectSchema as FacultyUpdateWithoutClubInputObjectSchema } from './FacultyUpdateWithoutClubInput.schema';
import { FacultyUncheckedUpdateWithoutClubInputObjectSchema as FacultyUncheckedUpdateWithoutClubInputObjectSchema } from './FacultyUncheckedUpdateWithoutClubInput.schema';
import { FacultyCreateWithoutClubInputObjectSchema as FacultyCreateWithoutClubInputObjectSchema } from './FacultyCreateWithoutClubInput.schema';
import { FacultyUncheckedCreateWithoutClubInputObjectSchema as FacultyUncheckedCreateWithoutClubInputObjectSchema } from './FacultyUncheckedCreateWithoutClubInput.schema';
import { FacultyWhereInputObjectSchema as FacultyWhereInputObjectSchema } from './FacultyWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FacultyUpdateWithoutClubInputObjectSchema), z.lazy(() => FacultyUncheckedUpdateWithoutClubInputObjectSchema)]),
  create: z.union([z.lazy(() => FacultyCreateWithoutClubInputObjectSchema), z.lazy(() => FacultyUncheckedCreateWithoutClubInputObjectSchema)]),
  where: z.lazy(() => FacultyWhereInputObjectSchema).optional()
}).strict();
export const FacultyUpsertWithoutClubInputObjectSchema: z.ZodType<Prisma.FacultyUpsertWithoutClubInput> = makeSchema() as unknown as z.ZodType<Prisma.FacultyUpsertWithoutClubInput>;
export const FacultyUpsertWithoutClubInputObjectZodSchema = makeSchema();
