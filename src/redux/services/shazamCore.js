// jshint esversion:6
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    getSognsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }),
    getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
  }),
});

export const { useGetTopChartsQuery, useGetSognsByGenreQuery, useGetSongDetailsQuery, useGetSongRelatedQuery, useGetArtistDetailsQuery, useGetSongsByCountryQuery, useGetSongsBySearchQuery } = shazamCoreApi;
