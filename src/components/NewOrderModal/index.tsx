import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import styles from './styles.module.scss';

interface NewOrderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#modal-root');

export function NewOrderModal({ isOpen, onRequestClose }: NewOrderModalProps) {
  async function handleCreateNewOrder(event: FormEvent) {
    event.preventDefault();

    // ...

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
    
      <form className={styles.container} onSubmit={handleCreateNewOrder}>
        <h2>Cadastrar ordem de serviço</h2>

        <input
          type="text"
          placeholder="Cliente"
        />

        <input
          type="text"
          placeholder="Carro"
        />

        <input
          type="text"
          placeholder="Placa"
        />

        <input
          type="text"
          placeholder="Ano"
        />

        <textarea placeholder="Descrição" />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}