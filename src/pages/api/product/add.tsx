
import * as M from "@root/Types";

import Cors from "cors";

import * as T from "@common/textile";
import * as S from "@common/server";
import {Product} from '@root/Types'
import {Where} from '@textile/hub'

export default async function productList(req, res) {
  await S.cors(req, res);

  let products: any = [];
  try {
    const product = {_id:"PD3", name:"shoe", brand:"nike"};
    const query = new Where('_id').eq("PD3")
    products = await T.addProduct({ key: M.testKey, threadID: M.testThreadId,product, query })
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e.message,
    });
  }

  return res.json({ products });
}