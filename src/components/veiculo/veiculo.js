import React from "react";

export const Veiculo = ({
  fipe_codigo,
  name,
  combustivel,
  marca,
  ano_modelo,
  preco
}) => (
  <table>
    <tbody>
      <tr>
        <th>Código FIPE:</th>
        <td>{fipe_codigo}</td>
      </tr>
      <tr>
        <th>Nome:</th>
        <td>{name}</td>
      </tr>
      <tr>
        <th>Combustível:</th>
        <td>{combustivel}</td>
      </tr>
      <tr>
        <th>Marca:</th>
        <td>{marca}</td>
      </tr>
      <tr>
        <th>Ano Modelo:</th>
        <td>{ano_modelo}</td>
      </tr>
      <tr>
        <th>Preço:</th>
        <td>{preco}</td>
      </tr>
    </tbody>
  </table>
);

export default Veiculo;
