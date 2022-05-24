import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { OrderProps } from "../../pages/orders";
import { api } from "../../services/axios";

interface OrderComponentProps {
  order: OrderProps;
}

export default function Order({ order }: OrderComponentProps) {
  return (
    <>
      <h1>{order.client}</h1>
      <p>{order.vehicle}</p>
    </>
  );
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { id } = params;
  
  const response = await api.get(`/service-orders/${id}`);

  const order = {
    id: response.data.data.id,
    client: response.data.data.client,
    vehicle: response.data.data.vehicle_name,
    plate: response.data.data.license_plate,
    year: response.data.data.year,
    mechanic: response.data.data.mechanic,
    description: response.data.data.description,
    status: response.data.data.status,
    createdAt: response.data.data.created_at
  }

  return {
    props: {
      order
    }
  }
}