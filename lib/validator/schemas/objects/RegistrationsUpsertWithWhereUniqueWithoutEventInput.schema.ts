import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsUpdateWithoutEventInputObjectSchema as RegistrationsUpdateWithoutEventInputObjectSchema } from './RegistrationsUpdateWithoutEventInput.schema';
import { RegistrationsUncheckedUpdateWithoutEventInputObjectSchema as RegistrationsUncheckedUpdateWithoutEventInputObjectSchema } from './RegistrationsUncheckedUpdateWithoutEventInput.schema';
import { RegistrationsCreateWithoutEventInputObjectSchema as RegistrationsCreateWithoutEventInputObjectSchema } from './RegistrationsCreateWithoutEventInput.schema';
import { RegistrationsUncheckedCreateWithoutEventInputObjectSchema as RegistrationsUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationsUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistrationsUpdateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistrationsCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationsUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationsUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUpsertWithWhereUniqueWithoutEventInput>;
export const RegistrationsUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
