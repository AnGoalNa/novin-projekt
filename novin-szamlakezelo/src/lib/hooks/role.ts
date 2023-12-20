/* eslint-disable */
import type { Prisma } from '@prisma/client';
import {
    type GetNextArgs,
    type QueryOptions,
    type InfiniteQueryOptions,
    type MutationOptions,
    type PickEnumerable,
    useHooksContext,
} from '@zenstackhq/swr/runtime';
import metadata from './__model_meta';
import * as request from '@zenstackhq/swr/runtime';

/** @deprecated Use mutation hooks (useCreateXXX, useUpdateXXX, etc.) instead. */
export function useMutateRole() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Role', metadata);

    /** @deprecated Use `useCreateRole` hook instead. */
    async function createRole<T extends Prisma.RoleCreateArgs>(args: Prisma.SelectSubset<T, Prisma.RoleCreateArgs>) {
        return await request.mutationRequest<Prisma.RoleGetPayload<Prisma.RoleCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/role/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateRole` hook instead. */
    async function updateRole<T extends Prisma.RoleUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.RoleUpdateArgs>) {
        return await request.mutationRequest<Prisma.RoleGetPayload<Prisma.RoleUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/role/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyRole` hook instead. */
    async function updateManyRole<T extends Prisma.RoleUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RoleUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/role/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertRole` hook instead. */
    async function upsertRole<T extends Prisma.RoleUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.RoleUpsertArgs>) {
        return await request.mutationRequest<Prisma.RoleGetPayload<Prisma.RoleUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/role/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteRole` hook instead. */
    async function deleteRole<T extends Prisma.RoleDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.RoleDeleteArgs>) {
        return await request.mutationRequest<Prisma.RoleGetPayload<Prisma.RoleDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/role/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyRole` hook instead. */
    async function deleteManyRole<T extends Prisma.RoleDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.RoleDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/role/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createRole, updateRole, updateManyRole, upsertRole, deleteRole, deleteManyRole };
}

export function useCreateRole(
    options?: MutationOptions<Prisma.RoleGetPayload<Prisma.RoleCreateArgs> | undefined, unknown, Prisma.RoleCreateArgs>,
) {
    const mutation = request.useModelMutation('Role', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.RoleCreateArgs>(args: Prisma.SelectSubset<T, Prisma.RoleCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.RoleGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyRole<T extends Prisma.RoleFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RoleFindManyArgs>,
    options?: QueryOptions<Array<Prisma.RoleGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Role', 'findMany', args, options);
}

export function useInfiniteFindManyRole<T extends Prisma.RoleFindManyArgs, R extends Array<Prisma.RoleGetPayload<T>>>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.RoleFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.RoleGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Role', 'findMany', getNextArgs, options);
}

export function useFindUniqueRole<T extends Prisma.RoleFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RoleFindUniqueArgs>,
    options?: QueryOptions<Prisma.RoleGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Role', 'findUnique', args, options);
}

export function useFindFirstRole<T extends Prisma.RoleFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.RoleFindFirstArgs>,
    options?: QueryOptions<Prisma.RoleGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Role', 'findFirst', args, options);
}

export function useUpdateRole(
    options?: MutationOptions<Prisma.RoleGetPayload<Prisma.RoleUpdateArgs> | undefined, unknown, Prisma.RoleUpdateArgs>,
) {
    const mutation = request.useModelMutation('Role', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.RoleUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.RoleUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.RoleGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyRole(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.RoleUpdateManyArgs>) {
    const mutation = request.useModelMutation('Role', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.RoleUpdateManyArgs>(args: Prisma.SelectSubset<T, Prisma.RoleUpdateManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertRole(
    options?: MutationOptions<Prisma.RoleGetPayload<Prisma.RoleUpsertArgs> | undefined, unknown, Prisma.RoleUpsertArgs>,
) {
    const mutation = request.useModelMutation('Role', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.RoleUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.RoleUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.RoleGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteRole(
    options?: MutationOptions<Prisma.RoleGetPayload<Prisma.RoleDeleteArgs> | undefined, unknown, Prisma.RoleDeleteArgs>,
) {
    const mutation = request.useModelMutation('Role', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.RoleDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.RoleDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.RoleGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyRole(options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.RoleDeleteManyArgs>) {
    const mutation = request.useModelMutation('Role', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.RoleDeleteManyArgs>(args: Prisma.SelectSubset<T, Prisma.RoleDeleteManyArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateRole<T extends Prisma.RoleAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.RoleAggregateArgs>,
    options?: QueryOptions<Prisma.GetRoleAggregateType<T>>,
) {
    return request.useModelQuery('Role', 'aggregate', args, options);
}

export function useGroupByRole<
    T extends Prisma.RoleGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.RoleGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.RoleGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<T>
            ? 'orderBy' extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<T>
              ? 'orderBy' extends Prisma.Keys<T>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
>(
    args?: Prisma.SubsetIntersection<T, Prisma.RoleGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.RoleGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.RoleGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.RoleGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.RoleGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Role', 'groupBy', args, options);
}

export function useCountRole<T extends Prisma.RoleCountArgs>(
    args?: Prisma.Subset<T, Prisma.RoleCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RoleCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Role', 'count', args, options);
}
