import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import workList from "@/components/WorkList"

const Experience = () => {
    return (
        <div>
            <h1>Experience</h1>
            <Carousel>
                <CarouselContent>
                {workList.map((workList) => (
                    <Card key={workList.id}>
                    </Card>
                ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default Experience
