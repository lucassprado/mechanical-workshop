import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { NewOrderModal } from '../../components/NewOrderModal';

import styles from './styles.module.scss';

import { MdEditNote } from 'react-icons/md';
import { AiFillPlusCircle } from 'react-icons/ai';

type ServiceOrderProps = {
  id: string;
  vehicleName: string;
  plate: string;
  status: string;
  mechanic: string;
  createdAt: Date;
}

export default function Orders() {
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  function handleOpenNewOrderModal() {
    setIsNewOrderModalOpen(true);
  }

  function handleCloseNewOrderModal() {
    setIsNewOrderModalOpen(false);
  }

  const [serviceOrders, setServiceOrders] = useState<ServiceOrderProps[]>([
    { id: '1', vehicleName: 'Palio', plate: 'HDA44512', status: 'Aguardando pagamento', mechanic: 'Jubileu', createdAt: new Date() },
    { id: '2', vehicleName: 'Gol', plate: 'HDGBHABD556', status: 'Aguardando pagamento', mechanic: 'Elizeu', createdAt: new Date() },
    { id: '3', vehicleName: 'Corsa', plate: 'HDGBHABD556', status: 'Aguardando pagamento', mechanic: 'Irineu', createdAt: new Date() },
  ]);

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
              serviceOrders.map(serviceOrder => {
                return (
                  <tr key={serviceOrder.id}>
                    <td>{serviceOrder.id}</td>
                    <td>{serviceOrder.vehicleName}</td>
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
