import Header from "@/app/Header/page"
import Links from "@/components/Links"
import Welcome from "@/app/Welcome/page"
import Experience from "@/app/Experience/page"
import MyStack from "@/app/MyStack/page"
import ProjectPage from "@/app/ProjectPage/page"


const Home = () => {
  return (
    <div className="px-5 py-2 bg-cyan-950">
      <Header />
      <Links />
      <Welcome />
      <Experience />
      <MyStack />
      <ProjectPage />
    </div>
  )
}

export default Home
