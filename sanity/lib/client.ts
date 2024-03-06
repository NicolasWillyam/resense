import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skl92U5nbzuoLRALQKJG8T1OpaRNva3Rzr8hHJkNGfo4CmpNHhlER7Bky09ly3XuKFjJWLxEgT943QK4Dgwl8pLEXoXD4SggJXkzHjMMhd82GGzOldYTUktbYht2ncX2EPvkgoPbFb6jTGwoQBKM6bEUDR4wSwey7iRPXngXMVzsHE1BQ0gF"
})
