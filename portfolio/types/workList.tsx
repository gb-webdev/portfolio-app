import { StaticImageData } from "next/image"

export type WorkList = {
    id: number
    image: StaticImageData
    title: string
    role: string
    stack: string
    description: string
}