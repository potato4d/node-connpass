type ISO8601 = string

export enum EventOrder {
  UPDATED_AT = 1,
  STARTED_AT = 2,
  CREATED_AT = 3
}

export type Group = {
  id: number
  title: string
  url: string
}

export type ConnpassEvent = {
  event_id: number
  title: string
  catch: string
  description: string
  event_url: string
  hash_tag: string

  started_at: ISO8601
  ended_at: ISO8601

  limit: number

  event_type: string

  series: Group

  address: string
  place: string
  lat: string
  lon: string
  owner_id: number
  owner_nickname: string
  owner_display_name: string
  accepted: number
  waiting: number
  updated_at: ISO8601
}

export type GetEventsQuery = Partial<{
  event_id: number
  keyword: string
  keyword_or: string
  ym: number
  ymd: number
  nickname: string
  owner_nickname: string
  series_id: number
  start: number
  order: EventOrder
  count: number
  format: 'json'
}>

export type GetEventsResponse = {
  results_returned: number
  results_available: number
  results_start: number
  events: ConnpassEvent[]
}
