import { ShoeType } from "./ShoeType"

export type Profile = {
    _id: string
    email: string
    password: string
    addedShoes: ShoeType[]
    "__v": number
}