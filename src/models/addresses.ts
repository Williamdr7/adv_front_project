export type StateItemResponse = {
  id: number
  state: string
  initials: string
  region: string
}

export type StateResponse = StateItemResponse[]

export type StateItemModel = {
  id: number
  state: string
  initials: string
  region: string
}

export type StateModel = StateItemModel[]

export type CitiesItemResponse = {
  id: number
  name: string
  state: {
    id: number
    initials: string
    region: string
    state: string
  }
  zipCode: string
}

export type CitiesResponse = CitiesItemResponse[]

export type CitiesItemModel = {
  id: number
  name: string
  state: {
    id: number
    initials: string
    region: string
    state: string
  }
  zipCode: string
}

export type CitiesModel = CitiesItemModel[]
