import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { GetEventsResponse, GetEventsQuery } from './types'

class Connpass {
  private APIClient: AxiosInstance
  private API_VERSION: string
  private API_ROOT: string

  constructor() {
    this.API_VERSION = 'v1'
    this.API_ROOT = 'https://connpass.com/api'
    this.APIClient = axios.create({
      baseURL: `${this.API_ROOT}/${this.API_VERSION}`
    })
  }

  async getEvents(
    query?: GetEventsQuery
  ): Promise<
    GetEventsResponse & { response: AxiosResponse<GetEventsResponse> }
  > {
    try {
      const response = await this.APIClient.get<GetEventsResponse>('/event', {
        params: query
      })
      return {
        response,
        ...response.data
      }
    } catch (e) {
      return Promise.reject(e)
    }
  }
}

export default Connpass
