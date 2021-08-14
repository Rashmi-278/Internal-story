import Cors from "cors";

import * as T from "@common/textile";
import * as S from "@common/server";
import * as M from "@root/Types";

export default async function productsUpdate(req, res) {
  await S.cors(req, res);

  let bucket = null;
  try {
    const newProduct = {_id:"PD4", name:"shoes", brand:"adidas"};
    bucket = await T.updateProduct({ product:newProduct, key: M.testKey, threadID: M.testThreadId });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e.message,
    });
  }

  return res.json({ success: true });
}
