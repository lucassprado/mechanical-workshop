import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/axios';

import styles from './styles.module.scss';

interface NewClientModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#modal-root');

export function NewClientModal({ isOpen, onRequestClose }: NewClientModalProps) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [uf, setUf] = useState('');
  const [address, setAddress] = useState('');

  async function handleCreateNewClient(event: FormEvent) {
    event.preventDefault();

    const newClient = {
      name,
      cpf,
      email,
      phone,
      uf,
      address
    }

    await api.post('/clients', {
      ...newClient
    })

    setName('');
    setCpf('');
    setEmail('');
    setPhone('');
    setUf('');
    setAddress('');

    onRequestClose();
  }

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.reactModalOverlay}
      className={styles.reactModalContent}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className={styles.reactModalClose}
      >
        <img src="/images/close.svg" alt="Fechar modal" />
      </button>
    
      <form className={styles.container} onSubmit={handleCreateNewClient}>
        <h2>Cadastrar cliente</h2>

        <input
          type="text"
          placeholder="Nome"
          onChange={event => setName(event.target.value)}
        />

        <input
          type="text"
          placeholder="CPF"
          onChange={event => setCpf(event.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        />

        <input
          type="text"
          placeholder="Telefone"
          onChange={event => setPhone(event.target.value)}
        />

        <input
          type="text"
          placeholder="Estado"
          onChange={event => setUf(event.target.value)}
        />

        <input
          type="text"
          placeholder="Endereço"
          onChange={event => setAddress(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}