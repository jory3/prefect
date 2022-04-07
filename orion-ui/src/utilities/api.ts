import axios, { AxiosInstance } from 'axios'

// todo: can this will need to be defined by the server itself
// https://github.com/PrefectHQ/orion/issues/667
export const server = process.env.PREFECT_API_URL

export function createApi(suffix = ''): AxiosInstance {
  return axios.create({
    baseURL: `${server}${suffix}`,
  })
}
