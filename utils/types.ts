type Education = {
  institution: string
  certification: string
  course: string
  period: string
  url: string
}[]

type Project = {
  name: string
  description: string
  website: string
}[]

type Experience = {
  firm: string
  role: string
  type: string
  period: string
  description: string
  url: string
  details: string[]
}[]

export type{ Education, Project, Experience }
