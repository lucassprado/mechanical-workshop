import { useEffect, useState } from 'react';
import Link from 'next/link';

import { api } from '../../services/axios';
import { NewVehicleModal } from '../../components/NewVehicleModal';

import styles from './styles.module.scss';

import { AiFillPlusCircle } from 'react-icons/ai';
import { MdEditNote } from 'react-icons/md';

interface VehicleProps {
  id: string;
  clientName: string;
  model: string;
  manufacturer: string;
  year: string;
  licensePlate: string;
}

export default function Vehicles() {
  const [vehicles, setVehicles] = useState<VehicleProps[]>([]);

  const [isNewVehicleModalOpen, setIsNewVehicleModalOpen] = useState(false);
  const [haveNewVehicles, setHaveNewVehicles] = useState(false);

  function handleOpenNewVehicleModal() {
    setIsNewVehicleModalOpen(true);
  }

  function handleCloseNewVehicleModal() {
    setIsNewVehicleModalOpen(false);

    setHaveNewVehicles(true);
  }
  
  useEffect(() => {
    const getVehicles = async () => {
      const response = await api.get('/vehicles');

      const updatedVehicles: VehicleProps[] = response.data.data.map(vehicle => ({
        id: vehicle.id,
        clientName: vehicle.client_name,
        model: vehicle.model,
        manufacturer: vehicle.manufacturer,
        year: vehicle.year,
        licensePlate: vehicle.license_plate
      }));

      setVehicles(updatedVehicles);
    }

    getVehicles();

    setHaveNewVehicles(false);
  }, [haveNewVehicles]);
  
  return (
    <>
      <main className={`container`}>
        <div className={styles.header}>
            <h1>Veículos</h1>
              <button onClick={handleOpenNewVehicleModal}>
                <span>Criar</span>
                <AiFillPlusCircle />
              </button>
          </div>

          <table className={styles.vehicleTable}>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Placa</th>
                <th>Ano</th>
              </tr>
            </thead>

            <tbody>
              {
                vehicles.map(vehicle => (
                  <tr key={vehicle.id}>
                    <td>{vehicle.clientName}</td>
                    <td>{vehicle.model}</td>
                    <td>{vehicle.manufacturer}</td>
                    <td>{vehicle.licensePlate}</td>
                    <td>{vehicle.year}</td>
                    <td>
                      <Link href={`/vehicles/${vehicle.id}`}>
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

      <NewVehicleModal
        isOpen={isNewVehicleModalOpen}
        onRequestClose={handleCloseNewVehicleModal}
      />
    </>
  );
}