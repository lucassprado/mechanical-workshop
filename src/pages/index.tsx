import { useState } from 'react';
import Head from 'next/head';

import styles from './home.module.scss';

import { MdEditNote } from "react-icons/md";

type ServiceOrderProps = {
  id: string;
  vehicleName: string;
  plate: string;
  status: string;
  createdAt: Date;
}

export default function Home() {
  const [serviceOrders, setServiceOrders] = useState<ServiceOrderProps[]>([
    { id: '1', vehicleName: 'Palio', plate: 'HDA44512', status: 'Aguardando pagamento', createdAt: new Date() },
    { id: '2', vehicleName: 'Gol', plate: 'HDGBHABD556', status: 'Aguardando pagamento', createdAt: new Date() },
    { id: '3', vehicleName: 'Corsa', plate: 'HDGBHABD556', status: 'Aguardando pagamento', createdAt: new Date() },
  ]);

  return (
    <>
      <Head>
        <title>Home | iFix</title>
      </Head>

      <main className={styles.osContainer}>
        <h1>Ordens de Serviços</h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Veículo</th>
              <th>Placa</th>
              <th>Status</th>
              <th>Data</th>
              <th>Editar</th>
            </tr>
          </thead>

          <tbody>
            {
              serviceOrders.map(serviceOrder => {
                return (
                  <tr key={serviceOrder.id}>
                    <td>{serviceOrder.id}</td>
                    <td>{serviceOrder.vehicleName}</td>
                    <td>{serviceOrder.plate}</td>
                    <td>{serviceOrder.status}</td>
                    <td>
                      {new Intl.DateTimeFormat('pt-BR').format(
                        new Date(serviceOrder.createdAt)
                      )}
                    </td>
                    <td>
                      <MdEditNote/>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>
    </>
  );
}
