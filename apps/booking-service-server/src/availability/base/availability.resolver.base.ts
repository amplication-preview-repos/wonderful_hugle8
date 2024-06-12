/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Availability } from "./Availability";
import { AvailabilityCountArgs } from "./AvailabilityCountArgs";
import { AvailabilityFindManyArgs } from "./AvailabilityFindManyArgs";
import { AvailabilityFindUniqueArgs } from "./AvailabilityFindUniqueArgs";
import { CreateAvailabilityArgs } from "./CreateAvailabilityArgs";
import { UpdateAvailabilityArgs } from "./UpdateAvailabilityArgs";
import { DeleteAvailabilityArgs } from "./DeleteAvailabilityArgs";
import { AvailabilityService } from "../availability.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Availability)
export class AvailabilityResolverBase {
  constructor(
    protected readonly service: AvailabilityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "read",
    possession: "any",
  })
  async _availabilitiesMeta(
    @graphql.Args() args: AvailabilityCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Availability])
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "read",
    possession: "any",
  })
  async availabilities(
    @graphql.Args() args: AvailabilityFindManyArgs
  ): Promise<Availability[]> {
    return this.service.availabilities(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Availability, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "read",
    possession: "own",
  })
  async availability(
    @graphql.Args() args: AvailabilityFindUniqueArgs
  ): Promise<Availability | null> {
    const result = await this.service.availability(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Availability)
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "create",
    possession: "any",
  })
  async createAvailability(
    @graphql.Args() args: CreateAvailabilityArgs
  ): Promise<Availability> {
    return await this.service.createAvailability({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Availability)
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "update",
    possession: "any",
  })
  async updateAvailability(
    @graphql.Args() args: UpdateAvailabilityArgs
  ): Promise<Availability | null> {
    try {
      return await this.service.updateAvailability({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Availability)
  @nestAccessControl.UseRoles({
    resource: "Availability",
    action: "delete",
    possession: "any",
  })
  async deleteAvailability(
    @graphql.Args() args: DeleteAvailabilityArgs
  ): Promise<Availability | null> {
    try {
      return await this.service.deleteAvailability(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
