// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APPID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  pusher.trigger("gremio-website", "music-request", req.body);
  return { error: null, message: "Added music" };
}
