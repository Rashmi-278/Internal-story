import Cors from "cors";

import * as T from "@common/textile";
import * as S from "@common/server";
import * as M from "@root/Types";

export default async function productList(req, res) {
  await S.cors(req, res);
  let threadId ;
  try {
    threadId = await T.setupDB({ key: M.testKey , dbName:"store1"});
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e.message,
    });
  }

  return res.json({ threadId: threadId});
}