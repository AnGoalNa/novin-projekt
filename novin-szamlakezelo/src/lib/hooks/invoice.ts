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
export function useMutateInvoice() {
    const { endpoint, fetch } = useHooksContext();
    const invalidate = request.useInvalidation('Invoice', metadata);

    /** @deprecated Use `useCreateInvoice` hook instead. */
    async function createInvoice<T extends Prisma.InvoiceCreateArgs>(
        args: Prisma.SelectSubset<T, Prisma.InvoiceCreateArgs>,
    ) {
        return await request.mutationRequest<Prisma.InvoiceGetPayload<Prisma.InvoiceCreateArgs> | undefined, true>(
            'POST',
            `${endpoint}/invoice/create`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateInvoice` hook instead. */
    async function updateInvoice<T extends Prisma.InvoiceUpdateArgs>(
        args: Prisma.SelectSubset<T, Prisma.InvoiceUpdateArgs>,
    ) {
        return await request.mutationRequest<Prisma.InvoiceGetPayload<Prisma.InvoiceUpdateArgs> | undefined, true>(
            'PUT',
            `${endpoint}/invoice/update`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useUpdateManyInvoice` hook instead. */
    async function updateManyInvoice<T extends Prisma.InvoiceUpdateManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.InvoiceUpdateManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'PUT',
            `${endpoint}/invoice/updateMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }

    /** @deprecated Use `useUpsertInvoice` hook instead. */
    async function upsertInvoice<T extends Prisma.InvoiceUpsertArgs>(
        args: Prisma.SelectSubset<T, Prisma.InvoiceUpsertArgs>,
    ) {
        return await request.mutationRequest<Prisma.InvoiceGetPayload<Prisma.InvoiceUpsertArgs> | undefined, true>(
            'POST',
            `${endpoint}/invoice/upsert`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteInvoice` hook instead. */
    async function deleteInvoice<T extends Prisma.InvoiceDeleteArgs>(
        args: Prisma.SelectSubset<T, Prisma.InvoiceDeleteArgs>,
    ) {
        return await request.mutationRequest<Prisma.InvoiceGetPayload<Prisma.InvoiceDeleteArgs> | undefined, true>(
            'DELETE',
            `${endpoint}/invoice/delete`,
            args,
            invalidate,
            fetch,
            true,
        );
    }

    /** @deprecated Use `useDeleteManyInvoice` hook instead. */
    async function deleteManyInvoice<T extends Prisma.InvoiceDeleteManyArgs>(
        args: Prisma.SelectSubset<T, Prisma.InvoiceDeleteManyArgs>,
    ) {
        return await request.mutationRequest<Prisma.BatchPayload, false>(
            'DELETE',
            `${endpoint}/invoice/deleteMany`,
            args,
            invalidate,
            fetch,
            false,
        );
    }
    return { createInvoice, updateInvoice, updateManyInvoice, upsertInvoice, deleteInvoice, deleteManyInvoice };
}

export function useCreateInvoice(
    options?: MutationOptions<
        Prisma.InvoiceGetPayload<Prisma.InvoiceCreateArgs> | undefined,
        unknown,
        Prisma.InvoiceCreateArgs
    >,
) {
    const mutation = request.useModelMutation('Invoice', 'POST', 'create', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.InvoiceCreateArgs>(args: Prisma.SelectSubset<T, Prisma.InvoiceCreateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.InvoiceGetPayload<T> | undefined>;
        },
    };
}

export function useFindManyInvoice<T extends Prisma.InvoiceFindManyArgs>(
    args?: Prisma.SelectSubset<T, Prisma.InvoiceFindManyArgs>,
    options?: QueryOptions<Array<Prisma.InvoiceGetPayload<T> & { $optimistic?: boolean }>>,
) {
    return request.useModelQuery('Invoice', 'findMany', args, options);
}

export function useInfiniteFindManyInvoice<
    T extends Prisma.InvoiceFindManyArgs,
    R extends Array<Prisma.InvoiceGetPayload<T>>,
>(
    getNextArgs: GetNextArgs<Prisma.SelectSubset<T, Prisma.InvoiceFindManyArgs> | undefined, R>,
    options?: InfiniteQueryOptions<Array<Prisma.InvoiceGetPayload<T>>>,
) {
    return request.useInfiniteModelQuery('Invoice', 'findMany', getNextArgs, options);
}

export function useFindUniqueInvoice<T extends Prisma.InvoiceFindUniqueArgs>(
    args?: Prisma.SelectSubset<T, Prisma.InvoiceFindUniqueArgs>,
    options?: QueryOptions<Prisma.InvoiceGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Invoice', 'findUnique', args, options);
}

export function useFindFirstInvoice<T extends Prisma.InvoiceFindFirstArgs>(
    args?: Prisma.SelectSubset<T, Prisma.InvoiceFindFirstArgs>,
    options?: QueryOptions<Prisma.InvoiceGetPayload<T> & { $optimistic?: boolean }>,
) {
    return request.useModelQuery('Invoice', 'findFirst', args, options);
}

export function useUpdateInvoice(
    options?: MutationOptions<
        Prisma.InvoiceGetPayload<Prisma.InvoiceUpdateArgs> | undefined,
        unknown,
        Prisma.InvoiceUpdateArgs
    >,
) {
    const mutation = request.useModelMutation('Invoice', 'PUT', 'update', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.InvoiceUpdateArgs>(args: Prisma.SelectSubset<T, Prisma.InvoiceUpdateArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.InvoiceGetPayload<T> | undefined>;
        },
    };
}

export function useUpdateManyInvoice(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.InvoiceUpdateManyArgs>,
) {
    const mutation = request.useModelMutation('Invoice', 'PUT', 'updateMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.InvoiceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.InvoiceUpdateManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useUpsertInvoice(
    options?: MutationOptions<
        Prisma.InvoiceGetPayload<Prisma.InvoiceUpsertArgs> | undefined,
        unknown,
        Prisma.InvoiceUpsertArgs
    >,
) {
    const mutation = request.useModelMutation('Invoice', 'POST', 'upsert', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.InvoiceUpsertArgs>(args: Prisma.SelectSubset<T, Prisma.InvoiceUpsertArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.InvoiceGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteInvoice(
    options?: MutationOptions<
        Prisma.InvoiceGetPayload<Prisma.InvoiceDeleteArgs> | undefined,
        unknown,
        Prisma.InvoiceDeleteArgs
    >,
) {
    const mutation = request.useModelMutation('Invoice', 'DELETE', 'delete', metadata, options, true);
    return {
        ...mutation,
        trigger: <T extends Prisma.InvoiceDeleteArgs>(args: Prisma.SelectSubset<T, Prisma.InvoiceDeleteArgs>) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.InvoiceGetPayload<T> | undefined>;
        },
    };
}

export function useDeleteManyInvoice(
    options?: MutationOptions<Prisma.BatchPayload, unknown, Prisma.InvoiceDeleteManyArgs>,
) {
    const mutation = request.useModelMutation('Invoice', 'DELETE', 'deleteMany', metadata, options, false);
    return {
        ...mutation,
        trigger: <T extends Prisma.InvoiceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.InvoiceDeleteManyArgs>,
        ) => {
            return mutation.trigger(args, options as any) as Promise<Prisma.BatchPayload>;
        },
    };
}

export function useAggregateInvoice<T extends Prisma.InvoiceAggregateArgs>(
    args?: Prisma.Subset<T, Prisma.InvoiceAggregateArgs>,
    options?: QueryOptions<Prisma.GetInvoiceAggregateType<T>>,
) {
    return request.useModelQuery('Invoice', 'aggregate', args, options);
}

export function useGroupByInvoice<
    T extends Prisma.InvoiceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.InvoiceGroupByArgs['orderBy'] },
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
    args?: Prisma.SubsetIntersection<T, Prisma.InvoiceGroupByArgs, OrderByArg> & InputErrors,
    options?: QueryOptions<
        {} extends InputErrors
            ? Array<
                  PickEnumerable<Prisma.InvoiceGroupByOutputType, T['by']> & {
                      [P in keyof T & keyof Prisma.InvoiceGroupByOutputType]: P extends '_count'
                          ? T[P] extends boolean
                              ? number
                              : Prisma.GetScalarType<T[P], Prisma.InvoiceGroupByOutputType[P]>
                          : Prisma.GetScalarType<T[P], Prisma.InvoiceGroupByOutputType[P]>;
                  }
              >
            : InputErrors
    >,
) {
    return request.useModelQuery('Invoice', 'groupBy', args, options);
}

export function useCountInvoice<T extends Prisma.InvoiceCountArgs>(
    args?: Prisma.Subset<T, Prisma.InvoiceCountArgs>,
    options?: QueryOptions<
        T extends { select: any }
            ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.InvoiceCountAggregateOutputType>
            : number
    >,
) {
    return request.useModelQuery('Invoice', 'count', args, options);
}
