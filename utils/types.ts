type Education = {
  institution: string
  certification: string
  startYear: string
  endYear: string
}[]

type Project = {
  name: string
  description: string
  website: string
  github: string
  technologies: Array<string>
}[]

type Experience = {
  firm: string
  position: string
  startYear: string
  endYear: string
}[]

export type{ Education, Project, Experience }
