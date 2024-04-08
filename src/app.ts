import axios, { AxiosResponse } from 'axios'

enum Timeouts {
  Get = 10000,
  Post = 60000,
  Put = 30000,
  Delete = 20000,
}

enum TcgPlayerUrls {
  Base = 'https://mpapi.tcgplayer.com/v2',
  Search = `${Base}/search`,
  SearchYugioh = `${Search}request?q=`,
}

const handleResponse = (response: AxiosResponse) => {
  console.log(response.status)
  console.log(response.data)
}

const handleGetResponse = (response: AxiosResponse) => {
  handleResponse(response)

  const products = []
}

const sanitizeQuery = (query: string) => {
  query = query.trim()
  query = query.replace(/[^A-Za-z0-9]+-/g, '')
  return query
}

const tokenizeQuery = (query: string) => {
  query = sanitizeQuery(query)
  query = query.replace(/\s+/g, '+')
  return query
}

const getPrices = (query: string) => {
  query = tokenizeQuery(query)
  axios.post(`${TcgPlayerUrls.SearchYugioh}${query}`, { timeout: Timeouts.Get }).then(
    (response) => {
      handleGetResponse(response)
    },
    (error) => {
      console.log(error)
    }
  )
}

getPrices('dark magician')
