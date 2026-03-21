import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsUpdateWithoutEventInputObjectSchema as RegistrationsUpdateWithoutEventInputObjectSchema } from './RegistrationsUpdateWithoutEventInput.schema';
import { RegistrationsUncheckedUpdateWithoutEventInputObjectSchema as RegistrationsUncheckedUpdateWithoutEventInputObjectSchema } from './RegistrationsUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationsUpdateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationsUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationsUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUpdateWithWhereUniqueWithoutEventInput>;
export const RegistrationsUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
