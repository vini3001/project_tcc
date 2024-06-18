import { createInstance } from 'localforage'

const storage = createInstance({
  name: 'vortex',
})

export default storage
