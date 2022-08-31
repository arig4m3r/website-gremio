// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Pusher from 'pusher'

const pusher = new Pusher({
    appId: '1471045',
    key: '38000fe8ad1be55a3924',
    secret: '179bb0ac718045bf0351',
    cluster: 'sa1',
    useTLS: true
})

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    pusher.trigger('gremio-website', 'music-request', req.body)
}
