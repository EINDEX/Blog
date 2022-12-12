/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Context, Hono } from "hono";
import { cors } from 'hono/cors'
import { StatusCode } from "hono/utils/http-status";

export interface Env {
  DB: D1Database;
}

type pv = {
  slug: string;
  pv: number;
};

const app = new Hono();

app.use("/*", cors({
  // origin: ["*"],
  origin: (origin) => origin.startsWith("https://") && origin.endsWith('.eindex.me')? origin: 'https://eindex.me',
  allowMethods: ["GET", "PUT", "OPTIONS"],
}) )

const addPV = async (slug: string, db: D1Database): Promise<Boolean> => {
  const { success, meta } = await db
    .prepare("update pv set pv = pv + 1 where slug = ?")
    .bind(slug)
    .run();
  if (!success) {
    return true;
  }
  if (meta.changes < 1) {
    const { success, meta } = await db
      .prepare("insert into pv (slug, pv) values (?, 1)")
      .bind(slug)
      .run();
    if (success) {
      return true;
    }
  }
  return false;
};


const getPV = async (slug: string, db: D1Database): Promise<Number> => {
  const { results } = await db
    .prepare("select slug, pv from pv where slug = ?")
    .bind(slug)
    .all<pv>();
  if (results && results.length > 0) {
    return results[0].pv;
  }
  return 0;
};

const getAllPV = async (db: D1Database): Promise<pv[]> => {
  const { results } = await db.prepare("select slug, pv from pv").bind().all<pv>();
  if (results && results.length > 0) {
    return results;
  }
  return [];
};

const getTotalPV = async (db: D1Database): Promise<Number> => {
  const { results } = await db.prepare("select sum(pv) total from pv").bind().all<{total: number}>();
  if (results && results.length > 0) {
    return results[0].total;
  }
  return 0;
};

const makeResponse = (c: Context, data: object, status: StatusCode) => {
  return c.json(data, status)
}

app.options("/pv", async (c)=> {
  c.newResponse(null, 200)
})

app.options("/pv/all", async (c)=> {
  c.newResponse(null, 200)
})

app.put("/pv", async (c) => {
  const slug = c.req.query("url");
  if (!slug) {
    return makeResponse(c, { msg: "missing params" }, 400)
  }
  const status = await addPV(slug, c.env.DB);
  if(status){
    const pvCount = await getPV(slug, c.env.DB)
    return makeResponse(c, { pv: pvCount }, 200)
  }

  return makeResponse(c, { status: status ? "OK" : "Failed" }, 200)
});

app.get("/pv", async (c) => {
  const slug = c.req.query("url");
  if (!slug) {
    return makeResponse(c, { msg: "missing params" }, 400)
  }
  const pvCount = await getPV(slug, c.env.DB);
  return makeResponse(c, { slug:slug, pv: pvCount }, 200)
});

app.get("/pv/all", async (c) => {
  const result = await getAllPV(c.env.DB);
  
  return makeResponse(c, result , 200)
});

app.get("/pv/total", async (c) => {
  const result = await getTotalPV(c.env.DB);
  
  return c.json({pv: result})
});

export default app;
