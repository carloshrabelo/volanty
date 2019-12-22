const api = params =>
  fetch(`http://fipeapi.appspot.com/api/1/${params}`).then(response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });

export const getMarcas = () => api(`carros/marcas.json`);
export const getVeiculos = id => api(`/carros/veiculos/${id}.json`);
export const getModelos = (marcaId, veiculoId) =>
  api(`/carros/veiculo/${marcaId}/${veiculoId}.json`);
export const getVeiculo = (marcaId, veiculoId, fipe_codigo) =>
  api(`/carros/veiculo/${marcaId}/${veiculoId}/${fipe_codigo}.json`);
