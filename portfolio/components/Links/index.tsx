import githubImg from "@/1-assets/github.png"
import emailImg from "@/1-assets/email-img.png"
import linkedinImg from "@/1-assets/linkedin.png"
import Image from "next/image"


const Welcome = () => {
    return (
        <div className="flex justify-evenly">
            <a href="https://github.com/gb-webdev" target="blank">
                <Image className="h-20 w-20" alt="Github icon" src={githubImg}  />
            </a>
            <a href="https://www.linkedin.com/in/graham-blundell/" target="blank">
                <Image className="h-20 w-20" alt="LinkedIn icon" src={linkedinImg}  />
            </a>
            <a href="mailto:blundell.gp@gmail.com" target="blank">
                <Image className="h-20 w-20" alt="Email icon" src={emailImg}  />
            </a>
        </div>
    )
}

export default Welcome