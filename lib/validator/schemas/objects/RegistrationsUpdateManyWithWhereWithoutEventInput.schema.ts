import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsScalarWhereInputObjectSchema as RegistrationsScalarWhereInputObjectSchema } from './RegistrationsScalarWhereInput.schema';
import { RegistrationsUpdateManyMutationInputObjectSchema as RegistrationsUpdateManyMutationInputObjectSchema } from './RegistrationsUpdateManyMutationInput.schema';
import { RegistrationsUncheckedUpdateManyWithoutEventInputObjectSchema as RegistrationsUncheckedUpdateManyWithoutEventInputObjectSchema } from './RegistrationsUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistrationsUpdateManyMutationInputObjectSchema), z.lazy(() => RegistrationsUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationsUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationsUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUpdateManyWithWhereWithoutEventInput>;
export const RegistrationsUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
