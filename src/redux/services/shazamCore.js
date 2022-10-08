// jshint esversion:6
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '174bae978emsh0c3f17286fb2046p1330e8jsna0c4cdca0927',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '174bae978emsh0c3f17286fb2046p1330e8jsna0c4cdca0927');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetSongsByCountryQuery } = shazamCoreApi;
