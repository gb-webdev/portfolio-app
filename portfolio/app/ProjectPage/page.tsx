import projects from "@/components/Projects/index"
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
            {projects.map((projects) => (
                <Card key={projects.id}>
                    <Image className="w-200" alt="Project Image" src={projects.image} />
                    <CardHeader>{projects.title}</CardHeader>
                    <CardDescription>{projects.description}</CardDescription>
                    {projects.skills.map((skill) => (
                        <Badge key={skill} >{skill}</Badge>
                    ))}
                        <Dialog>
                            <Button className="w-fit"><DialogTrigger>See More</DialogTrigger></Button>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{projects.title}</DialogTitle>
                                </DialogHeader>
                                    <DialogDescription>
                                        <Image className="w-400" alt="Project Gif" src={projects.gif}></Image>
                                        {projects.longDescription}
                                    </DialogDescription>
                                    <DialogTitle>Technologies</DialogTitle>
                                    <DialogDescription>
                                        {projects.skills.map((skill) => (
                                            <Badge key={skill} >{skill}</Badge>
                                        ))}
                                    </DialogDescription>
                                    <DialogDescription>
                                        {projects.sourceLink && (
                                            <a href={projects.sourceLink} target="_blank">
                                            <Button>Source Link</Button>
                                            </a>
                                        )}
                                        {projects.backendSource && (
                                            <a href={projects.backendSource} target="_blank">
                                            <Button>Backend Source</Button>
                                            </a>
                                        )}
                                        {projects.frontendSource && (
                                            <a href={projects.frontendSource} target="_blank">
                                            <Button>Frontend Source</Button>
                                            </a>
                                        )}
                                        {projects.liveLink && (
                                            <a href={projects.liveLink} target="_blank">
                                            <Button>Play!</Button>
                                            </a>
                                        )}
                                    </DialogDescription>
                            </DialogContent>
                        </Dialog>
                </Card>
            ))}
        </div>
    )
}

export default ProjectPage