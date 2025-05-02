import Header from "@/app/Header/page"
import Links from "@/components/Links"
import Welcome from "@/app/Welcome/page"


const Home = () => {
  return (
    <div className="px-5 py-2">
      <Header />
      <Links />
      <Welcome />
    </div>
  )
}

export default Home