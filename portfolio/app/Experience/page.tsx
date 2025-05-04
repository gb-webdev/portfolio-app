import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import workList from "@/components/WorkList/index"
import Image from "next/image";
import qrCode from "@/1-assets/qr-code.png"

const Experience = () => {
    return (
        <div>
            <h1>Experience</h1>
            <Carousel>
                <CarouselContent>
                {workList.map((workList) => (
                    <Card key={workList.id}>
                        <Image className="w-20" alt="Experience icons" src={workList.image}></Image>
                        <h1>{workList.title}</h1>
                        <h2>{workList.role}</h2>
                        <h2>{workList.stack}</h2>
                        <p>{workList.description}</p>
                    </Card>
                ))}
                </CarouselContent>
            </Carousel>
            <h2>See my <a href="https://graham-blundell-cv.tiiny.site/">resume</a> for more</h2>
            <Image className="w-40" alt="QR Code image for resume" src={qrCode}></Image>
        </div>
    )
}

export default Experience
