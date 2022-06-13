import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/axios';

import styles from './styles.module.scss';

interface NewVehicleModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#modal-root');

export function NewVehicleModal({ isOpen, onRequestClose }: NewVehicleModalProps) {
  const [model, setModel] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [year, setYear] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [clientId, setClientId] = useState('');

  async function handleCreateNewVehicle(event: FormEvent) {
    event.preventDefault();

    const newVehicle = {
      model,
      manufacturer,
      year,
      license_plate: licensePlate
    }

    await api.post(`/clients/${clientId}/vehicles`, {
      ...newVehicle
    })

    setModel('');
    setManufacturer('');
    setYear('');
    setLicensePlate('');

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
    
      <form className={styles.container} onSubmit={handleCreateNewVehicle}>
        <h2>Cadastrar veículo</h2>

        <input
          type="text"
          placeholder="ID do cliente"
          onChange={event => setClientId(event.target.value)}
        />

        <input
          type="text"
          placeholder="Modelo"
          onChange={event => setModel(event.target.value)}
        />

        <input
          type="text"
          placeholder="Marca"
          onChange={event => setManufacturer(event.target.value)}
        />

        <input
          type="text"
          placeholder="Placa"
          onChange={event => setLicensePlate(event.target.value)}
        />

        <input
          type="text"
          placeholder="Ano"
          onChange={event => setYear(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}