
import * as M from "@root/Types";

import Cors from "cors";

import * as T from "@common/textile";
import * as S from "@common/server";
import {Client, ThreadID, Where} from '@textile/hub'
import {Product} from '@root/Types'

export default async function productList(req, res) {
  await S.cors(req, res);

  let products: any = [];
  let threads: any = [];
  try {
    const query = new Where('_id').ne("PD")
    products = await T.listProducts({ query:query, key: M.testKey, threadID: M.testThreadId });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e.message,
    });
  }

  return res.json({ products });
}
