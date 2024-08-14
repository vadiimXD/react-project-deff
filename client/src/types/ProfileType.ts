import { ShoeType } from "./ShoeType"

export type ProfileType = {
    _id: string
    email: string
    password: string
    addedShoes: ShoeType[]
    "__v": number
}