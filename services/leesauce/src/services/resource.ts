import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../configs';

export interface ResourceData {
    name: string;
    url: string;
    type: string;
}

export interface GetResourceResponse {
    leeSauces: ResourceData[];
}

export const resourceAPI = createApi({
    reducerPath: 'resourceAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getResource: builder.query<GetResourceResponse, string | null>({
            query: (name) => ({
                url: '/leesauce',
                params: name
                    ? {
                          name: name,
                      }
                    : {},
            }),
        }),
        createResource: builder.mutation<ResourceData, ResourceData>({
            query: (resource) => ({
                url: '/leesauce',
                method: 'POST',
                body: resource,
            }),
        }),
    }),
});

export const { useGetResourceQuery } = resourceAPI;
