import Image from "next/image"

import Avatar from "@/1-assets/avatar.png"

const Welcome = () => {
    return (
        <div className="flex p-10 items-center">
            <Image className="w-40 h-auto mx-10" alt="Avatar image" src={Avatar} />
            <div className="text-center">
                <h1>Hi I&#39;m Graham</h1>
                <h2>I&#39;m a Full-Stack Developer in Node.js | TypeScript | React | PostgreSQL | Neo4j/GraphQL | Ruby | Rails</h2>
            </div>
        </div>
    )
}

export default Welcome