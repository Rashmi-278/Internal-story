import { Buckets, Identity, KeyInfo } from '@textile/hub'

const setup = async (key: KeyInfo, identity: Identity) => {
  // Use the insecure key to set up the buckets client
  const buckets = await Buckets.withKeyInfo(key)
  // Authorize the user and your insecure keys with getToken
  await buckets.getToken(identity) 

  const result = await buckets.open('io.textile.dropzone')
  if (!result.root) {
    throw new Error('Failed to open bucket')
  }
  return {
      buckets: buckets, 
      bucketKey: result.root.key,
  }
}



const initIndex = async (buckets: Buckets, bucketKey: string, identity: Identity) => {
  // Create a json model for the index
  const index = {
    author: identity.public.toString(),
    date: (new Date()).getTime(),
    paths: [],
  }
  // Store the index in the Bucket (or in the Thread later)
  const buf = Buffer.from(JSON.stringify(index, null, 2))
  const path = `index.json`
  await buckets.pushPath(bucketKey, path, buf)
}

const addIndexHTML = async (buckets: Buckets, bucketKey: string, html: string) => {
    // Store the index.html in the root of the bucket
    const buf = Buffer.from(html)
    const path = `index.html`
    await buckets.pushPath(bucketKey, path, buf)
  }