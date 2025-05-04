import Image from "next/image"

import graphQL from "@/1-assets/11-graphql.png"
import node from "@/1-assets/11-node.png"
import postgreSQL from "@/1-assets/11-postgres.png"
import ruby from "@/1-assets/11-ruby.png"
import rails from "@/1-assets/11-rails.png"
import react from "@/1-assets/11-react.png"
import typeScript from "@/1-assets/11-typescript.png"

const MyStack = () => {
    return (
        <div className="flex">
            <Image className="w-35" alt="graphql logo" src={graphQL} />
            <Image className="w-35" alt="Node.js logo" src={node} />
            <Image className="w-35" alt="PostgreSQL logo" src={postgreSQL} />
            <Image className="w-35" alt="Ruby logo" src={ruby} />
            <Image className="w-70" alt="Rails logo" src={rails} />
            <Image className="w-35" alt="TypeScript logo" src={typeScript} />
            <Image className="w-35" alt="React logo" src={react} />
        </div>
    )
}

export default MyStack