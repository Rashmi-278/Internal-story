import * as U from "@common/utilities";
import * as M from "@root/Types";

import { Buckets, PrivateKey, Filecoin, Client, ThreadID,Identity, UserAuth } from "@textile/hub";

const GB_BYTES = 104857600 * 10;

const TEXTILE_KEY_INFO = {
  key: process.env.TEXTILE_HUB_KEY,
  secret: process.env.TEXTILE_HUB_SECRET,
};

const BUCKET_NAME = "data";

export const generateToken = async () => {
  const identity = await PrivateKey.fromRandom();
  const api = identity.toString();
  return api;
};

export const getFilecoinAPIFromUserToken = async ({ key }) => {
  const identity = await PrivateKey.fromString(key);
  const filecoin = await Filecoin.withKeyInfo(TEXTILE_KEY_INFO);
  await filecoin.getToken(identity);

  return {
    filecoin,
  };
};

export const getBucketAPIFromUserToken = async ({ key, bucketName }) => {
  const identity = await PrivateKey.fromString(key);
  const name = U.isEmpty(bucketName) ? BUCKET_NAME : bucketName;
  const buckets = await Buckets.withKeyInfo(TEXTILE_KEY_INFO);
  await buckets.getToken(identity);

  let root = null;
  try {
    const created = await buckets.getOrCreate(name);
    root = created.root;
  } catch (e) {
    console.log(e);
    return {
      error: e.message,
      buckets: null,
      bucketKey: null,
      bucketRoot: null,
    };
  }

  if (!root) {
    return { error: "Missing root", buckets: null, bucketKey: null, bucketRoot: null };
  }

  return {
    buckets,
    bucketKey: root.key,
    bucketRoot: root,
    bucketName: name,
  };
};

export const deleteBucket = async (options) => {
  const { buckets, bucketKey, bucketRoot, bucketName, error } = await getBucketAPIFromUserToken({
    key: options.key,
    bucketName: options.bucketName,
  });

  if (error) {
    return {
      error,
    };
  }

  return await buckets.remove(options.bucketKey);
};

export const createBucket = async (options) => {
  const { buckets, bucketKey, bucketRoot, bucketName, error } = await getBucketAPIFromUserToken({
    key: options.key,
    bucketName: options.bucketName,
  });

  if (error) {
    return {
      error,
    };
  }

  return bucketRoot;
};


export const listBuckets = async (options) => {
  const { buckets, bucketKey, bucketRoot, bucketName, error } = await getBucketAPIFromUserToken({
    key: options.key,
    bucketName: options.bucketName,
  });

  let userBuckets = [];
  try {
    userBuckets = await buckets.list();
  } catch (e) {
    console.log(e);
    return {
      error: "Failed to fetch bucket list",
    };
  }

  for (let k = 0; k < userBuckets.length; k++) {
    try {
      const path = await buckets.listPath(userBuckets[k].key, "/");
      const data = path.item;

      userBuckets[k].bucketSize = data.size;
      userBuckets[k].cid = data.cid;
      userBuckets[k].isDir = data.isDir;
      userBuckets[k].items = data.items;
    } catch (e) {
      console.log(e);
      userBuckets[k].bucketSize = 0;
      userBuckets[k].cid = "FAILED TO RETRIEVE";
      userBuckets[k].isDir = false;
      userBuckets[k].items = [];
    }
  }

  return userBuckets;
};

const setupThreadClient = async (key) => {
  const client = await Client.withKeyInfo(TEXTILE_KEY_INFO);
  const identity = await PrivateKey.fromString(key);
  await client.getToken(identity);
  return client;
}
export const setupDB = async (options) => {
  const client = await setupThreadClient(options.key);
  const threadID = await client.newDB(undefined, options.dbName)
  console.log("ThreadId "+threadID);
  await client.newCollection(threadID, { name: 'products', schema:M.productSchema })
  return threadID
}

export const createCollection = async (options) => {
  const client = await setupThreadClient(options.key);
  const threadID = ThreadID.fromString(options.threadID)
  return await client.newCollection(threadID, { name: 'products', schema:M.productSchema })
}


export const addProduct = async (options) => {
  const client = await setupThreadClient(options.key);
  const threadID = ThreadID.fromString(options.threadID)
  return await client.create(threadID, 'products', [options.product])
}


export const listProducts = async (options) => {
  const client = await setupThreadClient(options.key);
  const query = options.query
  const list = await client.find<M.Product>(ThreadID.fromString(options.threadID), "products", query)
  return list
}

export const listCollections = async (options) => {
  const client = await setupThreadClient(options.key);
  const list = await client.listCollections(ThreadID.fromString(options.threadID));
  return list
}
export const listThreads = async (options) => {
  const client = await setupThreadClient(options.key);
  const list = await client.listThreads();
  return list
}