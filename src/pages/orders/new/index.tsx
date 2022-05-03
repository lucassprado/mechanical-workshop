import Head from "next/head";

import styles from './styles.module.scss';

export default function New() {
  return (
    <>
      <Head>
        <title>Nova ordem de serviço | i.Fix</title>
      </Head>

      <main className={styles.newOsContainer}>
        <h1>Nova ordem de serviço</h1>
        
        <p>Descrição</p>
        <textarea/>

        <p>Cliente</p>
        <input/>

        <p>Carro</p>
        <input/>

        <p>Placa</p>
        <input/>

        <p>Ano</p>
        <input/>

        <p>Serviço</p>
        <select name="" id=""></select>

        {/* <input 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        /> */}
      </main>
    </>
  );
}