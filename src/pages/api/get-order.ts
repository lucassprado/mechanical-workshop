import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from 'faunadb';

import { fauna } from '../../services/fauna';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const response = await fauna.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection('service_orders'))),
        q.Lambda(x => q.Get(x))
      )
    )

    return res.status(200).send(response);
  } else {
    res.setHeader('Allow', 'POST and GET');
    res.status(405).end('Method not allowed');
  }
}
