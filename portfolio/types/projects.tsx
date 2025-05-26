import { StaticImageData } from "next/image"

export type Projects = {
    id: number
    title: string
    description: string
    longDescription: string
    skills: string[]
    image: StaticImageData
    gif: string
    sourceLink: string
    backendSource: string
    frontendSource: string
    liveLink: string
}