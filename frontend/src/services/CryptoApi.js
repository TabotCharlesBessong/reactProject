
import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

const createRequest = (url)=>({url, headers:cryptoApiHeaders})

export const CryptoApi = createApi({
  reducerPath: 'CryptoAPi',
  baseQuery:fetchBaseQuery({baseUrl}),
  endpoints: (builder)=> ({
    getCryptos:builder.query({
      query: ()=> createRequest('/coins')
    })
  })
})

export const {
  useGetCryptoQuery,
} = CryptoApi