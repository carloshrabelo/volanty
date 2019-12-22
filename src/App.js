import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./App.module.scss";

import Input from "./components/input/input";
import Veiculo from "./components/veiculo/veiculo";
import { getMarcas, getVeiculos, getModelos, getVeiculo } from "./services/api";

function App() {
  const [store, updateStore] = useState({
    marcas: [],
    models: [],
    years: [],
    table: {}
  });
  const [form, updateForm] = useState({
    marca: {},
    model: {},
    year: {},
    table: {}
  });
  const { marcas, models, years, table } = store;

  useEffect(() => {
    getMarcas().then(marcas =>
      updateStore({
        ...store,
        marcas
      })
    );
  }, []);

  return (
    <>
      <header className={styles.header}>
        <Logo className={styles.logo}></Logo>
      </header>
      <main className={styles.main}>
        <Input
          id="marca"
          label="marca"
          list={marcas}
          onChange={marca => {
            updateForm({ ...form, marca, veiculo: {}, years: {} });
            marca &&
              marca.id &&
              getVeiculos(marca.id).then(models =>
                updateStore({
                  ...store,
                  models,
                  years: [],
                  table: {}
                })
              );
          }}
        ></Input>
        {form.marca && form.marca.id && (
          <Input
            id="models"
            label="modelo"
            list={models}
            onChange={veiculo => {
              updateForm({ ...form, veiculo, years: {} });
              if (veiculo && veiculo.id)
                getModelos(form.marca.id, veiculo.id).then(years =>
                  updateStore({
                    ...store,
                    years,
                    table: {}
                  })
                );
            }}
          />
        )}
        {form.veiculo && form.veiculo.id && (
          <Input
            id="years"
            label="ano do carro"
            list={years}
            onChange={years => {
              updateForm({ ...form, years });
              if (years && years.fipe_codigo)
                getVeiculo(
                  form.marca.id,
                  form.veiculo.id,
                  years.fipe_codigo
                ).then(table => {
                  updateStore({
                    ...store,
                    table
                  });
                });
            }}
          />
        )}
        {form.years && form.years.fipe_codigo && <Veiculo {...table}></Veiculo>}
      </main>
    </>
  );
}

export default App;

// Temos uma tela principal onde o usuário escolhe a marca, o modelo e o ano do carro. E após essa seleção, o usuário visualiza o preço do veículo e mais algumas informações básicas, como marca, modelo do veículo, ano do veículo, preço e combustível (caso esteja disponível).
