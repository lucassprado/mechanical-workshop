import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/axios';

import styles from './styles.module.scss';

interface NewOrderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#modal-root');

export function NewOrderModal({ isOpen, onRequestClose }: NewOrderModalProps) {
  const [clientId, setClientId] = useState('');
  const [vehicleId, setVehicleId] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [description, setDescription] = useState('');
  const [chassi, setChassi] = useState('');

  async function handleCreateNewOrder(event: FormEvent) {
    event.preventDefault();

    const newOrder = {
      client_id: clientId,
      vehicle_id: vehicleId,
      license_plate: vehiclePlate,
      year: vehicleYear,
      description,
      chassi
    }

    await api.post('/service-orders', {
      ...newOrder
    })

    setClientId('');
    setVehicleId('');
    setVehiclePlate('');
    setVehicleYear('');
    setDescription('');
    setChassi('');

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
          placeholder="ID do cliente"
          onChange={event => setClientId(event.target.value)}
        />
 
        <input
          type="text"
          placeholder="ID do veículo"
          onChange={event => setVehicleId(event.target.value)}
        />

        <input
          type="text"
          placeholder="Chassi"
          onChange={event => setChassi(event.target.value)}
        />

        <div className={styles.vehicleInfo}>
          <input
            type="text"
            placeholder="Placa"
            onChange={event => setVehiclePlate(event.target.value)}
          />

          <input
            type="text"
            placeholder="Ano"
            onChange={event => setVehicleYear(event.target.value)}
          />
        </div>
        <textarea placeholder="Descrição"
          onChange={event => setDescription(event.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </Modal>
  );
}