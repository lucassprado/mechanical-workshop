import { NextApiRequest, NextApiResponse } from "next";
import { query as q } from 'faunadb';

import { fauna } from '../../services/fauna';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const serviceOrder = req.body;
    
    console.log(serviceOrder)

    fauna.query(
      q.Create(
        q.Collection('service_orders'),
        { data: serviceOrder }
      )
    );

    return res.status(200).json({ status: 'OK' })
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}
