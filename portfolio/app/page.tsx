import Header from "./Header/page"
import Welcome from "./Welcome/page"
import Links from "@/components/Links"

const Home = () => {
  return (
    <div className="px-5 py-2">
      <Header />
      <Welcome />
      <Links />
    </div>
  )
}

export default Home