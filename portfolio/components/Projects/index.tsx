import chefStill from "@/1-assets/chef-ss.png"
import chefGif from "@/1-assets/chefs-choice.gif"
import bladeBrawlerStill from "@/1-assets/bbss.png"
import bladeBrawlerGif from "@/1-assets/samurai.gif"
import quizStill from "@/1-assets/qzss.png"
import quizGif from "@/1-assets/qz.gif"
import notesStill from "@/1-assets/note-ss.png"
import notesGif from "@/1-assets/notes.gif"
import apartmentStill from "@/1-assets/apss.png"
import apartmentGif from "@/1-assets/app.gif"

const Projects: Projects[] = [
    {
        id: 1,
        title: "Chef's Choice",
        description: "A meal subscription app",
        longDescription: "A meal Subscription App that offers a convenient way to plan and enjoy delicious, home-cooked meals. Choose from a variety of meal plans tailored to your dietary preferences and receive fresh, pre-portioned ingredients delivered to your door.",
        skills: ["Node", "TypeScript", "React", "Express", "MongoDB"],
        image: chefStill,
        gif: chefGif,
        sourceLink: "https://github.com/Developers-Challenge/Theta",
    },
    {
        id: 2,
        title: "Blade Brawler",
        description: "A 2d duel fighting game",
        longDescription: "Blade Brawler is an exciting 2D duel fighting game where players engage in intense sword battles. Test your reflexes and strategy as you face off against opponents in thrilling combat.",
        skills: ["JavaScript", "GSAP"],
        image: bladeBrawlerStill,
        gif: bladeBrawlerGif,
        sourceLink: "https://github.com/gb-webdev/blade-brawler",
        liveLink: "https://blade-brawler.netlify.app"
    },
    {
        id: 3,
        title: "Quizard",
        description: "A flashcard and quiz application, sprinkled with some game elements",
        longDescription: "Quizard is an interactive flashcard and quiz application designed to make learning fun. With added game elements, it provides an engaging way to study and test your knowledge on various subjects.",
        skills: ["Ruby on Rails", "PostgreSQL", "React", "GSAP"],
        image: quizStill,
        gif: quizGif,
        backendSource: "https://github.com/learn-stack-rgb/quizard-backend",
        frontendSource: "https://github.com/learn-stack-rgb/quizard-frontend",
        liveLink: "https://quizard-u7md.onrender.com/"
    },
    {
        id : 4,
        title: "Notes App",
        description: "A longterm Notes app project with many planned features",
        longDescription: "The Notes App is a versatile tool for organizing your thoughts and tasks.",
        skills: ["Node", "TypeScript", "React", "Express"],
        image: notesStill,
        gif: notesGif,
        sourceLink: "https://github.com/gb-webdev/Notes"
    },
    {
        id: 5,
        title: "Apartment Finder",
        description: "An apartment app, find a place to rent, or manage your own properties.",
        longDescription: "Apartment Finder is a comprehensive application that helps users find rental properties and allows property owners to manage their listings. It streamlines the process of apartment hunting and property management.",
        skills: ["Ruby on Rails", "PostgreSQL", "React"],
        image: apartmentStill,
        gif: apartmentGif,
        backendSource: "https://github.com/learn-academy-2023-echo/apartment-app-backend-zilflowlist",
        frontendSource: "https://github.com/learn-academy-2023-echo/apartment-app-frontend-zilflowlist"
    },
]

export default Projects