import { useEffect, useState } from 'react';
import Link from 'next/link';

import { api } from '../../services/axios';
import { NewClientModal } from '../../components/NewClientModal';

import styles from './styles.module.scss';

import { AiFillPlusCircle } from 'react-icons/ai';
import { MdEditNote } from 'react-icons/md';

interface ClientProps {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  vehicle: [];
}

export default function Clients() {
  const [clients, setClients] = useState<ClientProps[]>([]);

  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
  const [haveNewClients, setHaveNewClients] = useState(false);

  function handleOpenNewClientModal() {
    setIsNewClientModalOpen(true);
  }

  function handleCloseNewClientModal() {
    setIsNewClientModalOpen(false);

    setHaveNewClients(true);
  }
  
  useEffect(() => {
    const getClients = async () => {
      const response = await api.get('/clients');

      const updatedClients: ClientProps[] = response.data.data.map(client => ({
        id: client.id,
        name: client.name,
        cpf: client.cpf,
        email: client.email,
        phone: client.phone,
        vehicle: client.vehicle
      }));

      setClients(updatedClients);
    }

    getClients();

    setHaveNewClients(false);
  }, [haveNewClients]);
  
  return (
    <>
      <main className={`container`}>
        <div className={styles.header}>
            <h1>Clientes</h1>
              <button onClick={handleOpenNewClientModal}>
                <span>Criar</span>
                <AiFillPlusCircle />
              </button>
          </div>

          <table className={styles.clientTable}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Editar</th>
              </tr>
            </thead>

            <tbody>
              {
                clients.map(client => (
                  <tr key={client.id}>
                    <td>{client.name}</td>
                    <td>{client.cpf}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>
                      <Link href={`/clients/${client.id}`}>
                        <a>
                          <MdEditNote />
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))
                }
            </tbody>
          </table>
      </main>

      <NewClientModal
        isOpen={isNewClientModalOpen}
        onRequestClose={handleCloseNewClientModal}
      />
    </>
  );
}