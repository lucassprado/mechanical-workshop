import Head from "next/head";
import { GetServerSideProps } from "next";

import { api } from "../../services/axios";
import { useEffect, useState } from "react";

import styles from './order.module.scss';

type OrderProps = {
  id: string;
  client: string;
  vehicle: string;
  plate: string;
  year: string;
  status: string;
  mechanic: string;
  description: string;
  createdAt: string;
}

interface OrderComponentProps {
  order: OrderProps;
  id: string;
}

export default function Order({ id }: OrderComponentProps) {
  const [order, setOrder] = useState<OrderProps>();
  
  async function getOrder(id) {
    const { data: { data } } = await api.get('/get-order');

    const currentOrder = data.filter(order => order.data.id === Number(id))[0]['data'];

    setOrder(currentOrder);
  }
  
  useEffect(() => {
    getOrder(id);
  }, [])
  
  return (
    <>
      <Head>
        <title>Ordem de serviço | ig.news</title>
      </Head>

      <main>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { id } = params;

  return {
    props: {
      id
    }
  }
}