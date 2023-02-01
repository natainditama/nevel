export type JsonResponse = {
  code: number
  status: string
  error?: Array<string>[]
  data?: Array<any>[]
}

export type UserResponse = {
  id: number
  name: string
  username: string
  email: string
}
