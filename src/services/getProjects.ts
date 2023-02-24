import { env } from '../lib/env'
import { Project } from '../types/project'

const getProjectsQuery = JSON.stringify({
  query: `query Projects {
    projects(orderBy: createdAt_DESC, first: 100) {
      id
      title
      description
      githubLink
      thumbnailUrl
      slug
      createdAt
    }
  }`,
})

export async function getProjects() {
  const response = await fetch(env.API_BASE_URL, {
    method: 'POST',
    body: getProjectsQuery,
  })

  const { data } = await response.json()

  return data.projects as Project[]
}
