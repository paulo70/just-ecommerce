import axios from 'axios'

const data = 'https://api-desafio-front.justdigital.com.br/'

export const getProducts = async () => {
  const request = await axios(`${data}`)

  return request.data
}