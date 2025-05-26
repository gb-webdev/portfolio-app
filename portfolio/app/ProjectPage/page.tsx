import Projects from "@/components/Projects/index"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

const ProjectPage = () => {
    return (
        <div>
            {Projects.map((projects) => (
                <Card key={projects.id}>
                    <Image className="w-200" alt="Project Image" src={projects.image} />
                    <CardHeader>{projects.title}</CardHeader>
                    <CardDescription>{projects.description}</CardDescription>
                    <Badge>{projects.skills}</Badge>
                    <Button>See More</Button>
                </Card>
            ))}
        </div>
    )
}

export default ProjectPage