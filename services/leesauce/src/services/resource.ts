import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { BASE_URL } from '../configs';
import { ResourceData, ResourceFormData, ResourceResponse, ResourceType } from '../models';

interface CreateResource {
    resource: FormData;
    type: ResourceType;
}

export const resourceAPI = createApi({
    reducerPath: 'resourceAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Post'],
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    endpoints: (builder) => ({
        getResource: builder.query<ResourceResponse, string | null>({
            query: (name) => ({
                url: '/leesauce',
                params: name
                    ? {
                          name: name,
                      }
                    : {},
            }),
            providesTags: ['Post'],
        }),
        createResource: builder.mutation<ResourceData, CreateResource>({
            query: (form) => ({
                url: `/${form.type}`,
                method: 'POST',
                headers: {
                    Authorization: localStorage.getItem('accessToken') || '',
                },
                body: form.resource,
            }),
            invalidatesTags: ['Post'],
        }),
    }),
});

export const {
    useGetResourceQuery,
    useCreateResourceMutation,
    util: { getRunningOperationPromises },
} = resourceAPI;
export const { getResource, createResource } = resourceAPI.endpoints;
