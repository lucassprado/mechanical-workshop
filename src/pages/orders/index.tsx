import { useEffect, useState } from 'react';
import Head from 'next/head';

import { api } from '../../services/axios';

import { NewOrderModal } from '../../components/NewOrderModal';

import styles from './styles.module.scss';

import Link from 'next/link';

import { MdEditNote } from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';

type ServiceOrderProps = {
  id: string;
  client: string;
  vehicle: string;
  plate: string;
  year: string;
  status: string;
  mechanic: string;
  description: string;
  createdAt: Date;
}

export default function Orders() {
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  const [orders, setOrders] = useState<ServiceOrderProps[]>([]);

  function handleOpenNewOrderModal() {
    setIsNewOrderModalOpen(true);
  }

  function handleCloseNewOrderModal() {
    setIsNewOrderModalOpen(false);
  }

  async function getOrders() {
    const response = await api.get('/manage-service-order');

    const updatedOrders: ServiceOrderProps[] = response.data.data.map(order => ({
      id: order.data.id,
      client: order.data.client,
      vehicle: order.data.vehicle,
      plate: order.data.plate,
      year: order.data.year,
      status: order.data.status,
      description: order.data.description,
      createdAt: order.data.createdAt
    }));

    setOrders(updatedOrders);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <Head>
        <title>Ordens de serviço | i.Fix</title>
      </Head>

      <main className={styles.osContainer}>
        <div className={styles.osHeader}>
          <h1>Ordens de Serviço</h1>
            <button onClick={handleOpenNewOrderModal}>
              <span>Criar</span>
              <AiFillPlusCircle />
            </button>
        </div>

        <table className={styles.osTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Veículo</th>
              <th>Placa</th>
              <th>Mecânico</th>
              <th>Status</th>
              <th>Data</th>
              <th>Editar</th>
            </tr>
          </thead>

          <tbody>
            {
              orders.map(serviceOrder => {
                return (
                  <tr key={serviceOrder.id}>
                    <td>{serviceOrder.id}</td>
                    <td>{serviceOrder.vehicle}</td>
                    <td>{serviceOrder.plate}</td>
                    <td>{serviceOrder.mechanic}</td>
                    <td>{serviceOrder.status}</td>
                    <td>
                      {new Intl.DateTimeFormat('pt-BR').format(
                        new Date(serviceOrder.createdAt)
                      )}
                    </td>
                    <td>
                      <Link href='#'>
                        <a>
                          <MdEditNote/>
                        </a>
                      </Link>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </main>

      <NewOrderModal
        isOpen={isNewOrderModalOpen}
        onRequestClose={handleCloseNewOrderModal}
      />
    </>
  );
}
