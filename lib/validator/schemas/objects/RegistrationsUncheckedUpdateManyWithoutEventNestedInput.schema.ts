import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { RegistrationsCreateWithoutEventInputObjectSchema as RegistrationsCreateWithoutEventInputObjectSchema } from './RegistrationsCreateWithoutEventInput.schema';
import { RegistrationsUncheckedCreateWithoutEventInputObjectSchema as RegistrationsUncheckedCreateWithoutEventInputObjectSchema } from './RegistrationsUncheckedCreateWithoutEventInput.schema';
import { RegistrationsCreateOrConnectWithoutEventInputObjectSchema as RegistrationsCreateOrConnectWithoutEventInputObjectSchema } from './RegistrationsCreateOrConnectWithoutEventInput.schema';
import { RegistrationsUpsertWithWhereUniqueWithoutEventInputObjectSchema as RegistrationsUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './RegistrationsUpsertWithWhereUniqueWithoutEventInput.schema';
import { RegistrationsCreateManyEventInputEnvelopeObjectSchema as RegistrationsCreateManyEventInputEnvelopeObjectSchema } from './RegistrationsCreateManyEventInputEnvelope.schema';
import { RegistrationsWhereUniqueInputObjectSchema as RegistrationsWhereUniqueInputObjectSchema } from './RegistrationsWhereUniqueInput.schema';
import { RegistrationsUpdateWithWhereUniqueWithoutEventInputObjectSchema as RegistrationsUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './RegistrationsUpdateWithWhereUniqueWithoutEventInput.schema';
import { RegistrationsUpdateManyWithWhereWithoutEventInputObjectSchema as RegistrationsUpdateManyWithWhereWithoutEventInputObjectSchema } from './RegistrationsUpdateManyWithWhereWithoutEventInput.schema';
import { RegistrationsScalarWhereInputObjectSchema as RegistrationsScalarWhereInputObjectSchema } from './RegistrationsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistrationsCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsCreateWithoutEventInputObjectSchema).array(), z.lazy(() => RegistrationsUncheckedCreateWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUncheckedCreateWithoutEventInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistrationsCreateOrConnectWithoutEventInputObjectSchema), z.lazy(() => RegistrationsCreateOrConnectWithoutEventInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistrationsUpsertWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUpsertWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistrationsCreateManyEventInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistrationsWhereUniqueInputObjectSchema), z.lazy(() => RegistrationsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistrationsUpdateWithWhereUniqueWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUpdateWithWhereUniqueWithoutEventInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistrationsUpdateManyWithWhereWithoutEventInputObjectSchema), z.lazy(() => RegistrationsUpdateManyWithWhereWithoutEventInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistrationsScalarWhereInputObjectSchema), z.lazy(() => RegistrationsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistrationsUncheckedUpdateManyWithoutEventNestedInputObjectSchema: z.ZodType<Prisma.RegistrationsUncheckedUpdateManyWithoutEventNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistrationsUncheckedUpdateManyWithoutEventNestedInput>;
export const RegistrationsUncheckedUpdateManyWithoutEventNestedInputObjectZodSchema = makeSchema();
