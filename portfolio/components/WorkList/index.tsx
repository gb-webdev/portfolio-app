import { WorkList } from "@/types/workList"
import code1 from "@/1-assets/code-review.png"
import code2 from "@/1-assets/program-error.png"
import code3 from "@/1-assets/coding(2).png"
import code4 from "@/1-assets/coding(3).png"


const workList: WorkList[] = [
    {
        id: 1,
        image: code1,
        title: "Hapnyn",
        role: "Software Developer",
        stack: "Node.js | Neo4j | GraphQL | ",
        description: "Rebuilt a full-stack application by transitioning to a Node.js and TypeScript backend with a React/Next.js frontend. Refactored the codebase, redesigned the database with Neo4j and GraphQL, and performed a structured data migration to support the new schema. Implemented efficient data-fetching using generated queries and fragments to improve scalability and user experience."
    },
    {
        id: 2,
        image: code2,
        title: "Scientist.com",
        role: "Software Developer Intern",
        stack: "PostgreSQL | Ruby | Rails",
        description: "Refactored a legacy codebase and wrote comprehensive new tests using RSpec and FactoryBot, improving overall stability and maintainability. Strengthened understanding of OOP, MVC architecture, and PostgreSQL through hands-on debugging and enhancing test coverage."
    },
    {
        id: 3,
        image: code3,
        title: "Harvard CS50 Course",
        role: "Introduction to COmputer Science",
        stack: "C | Python | Low Level Operations",
        description: "Learned through Harvard's CS50 course, gaining a strong foundation in computer science principles, including algorithms, data structures, memory, and low-level programming. Built projects using C, Python, SQL, and JavaScript"
    },
    {
        id: 4,
        image: code4,
        title: "LEARN Academy",
        role: "Full-Stack Web Development",
        stack: "PostreSQL | Ruby | Rails | React",
        description: "Completed a 650+ hour full-stack bootcamp focused on React and Ruby on Rails and SQL databases. Built and presented four full-stack applications, collaborated using Agile methodologies, and served as a weekend teaching assistant guiding new students through JavaScript and web fundamentals."
    },
]

export default workList