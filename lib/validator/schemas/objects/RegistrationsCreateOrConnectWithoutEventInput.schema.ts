import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsCreateWithoutEventInputObjectSchema as RegistrationsCreateWithoutEventInputObjectSchema } from './RegistrationsCreateWithoutEventInput.schema';
import { RegistrationsUncheckedCreateWithoutEventInputObjectSchema as RegistrationsUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationsUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistrationsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => RegistrationsCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const RegistrationsCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.RegistrationsCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsCreateOrConnectWithoutEventInput>;
export const RegistrationsCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
