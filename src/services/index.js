import axios from "axios";

export const getAlunos = () => {
  return axios.get('http://localhost:8080/api/aluno/list', {
  })
  .then(function (response) {
    // handle success
    return response.data.content.list
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

export const getTimes = () => {
  return axios.get('http://localhost:8080/api/time/listar')
  .then(function (response) {
    // handle success
    return response.data.content.list
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

export const getResultados = () => {
  return axios.get('http://localhost:8080/api/time/resultado')
  .then(function (response) {
    // handle success
    return response.data.content.resultadoFinal
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

export const postAluno = (dto) => {
    axios.post('http://localhost:8080/api/aluno/cadastrar?idUsuario='+sessionStorage.getItem("id"), dto)
    .then(function (response) {
      // handle success
      console.log(response)
      return response
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return error
    })
};

export const postTime = (nome) => {
  return axios.post('http://localhost:8080/api/time/criar', {nome})
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error
  })
};

export const postIntegrante = (idAluno, idTime) => {
  return axios.post('http://localhost:8080/api/time/adicionar_aluno?idAluno='+ idAluno +'&idTime='+ idTime)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error
  })
};

export const deleteIntegrante = (idAluno) => {
  return axios.delete('http://localhost:8080/api/time/remover_aluno/?idAluno='+ idAluno)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error
  })
};

export const deleteTime = (idAluno) => {
  return axios.delete('http://localhost:8080/api/time/excluir/?id='+ idAluno)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error
  })
};

export const getAvaliacoesPorAvaliador = () => {
  return axios.get('http://localhost:8080/api/avaliacao/list/avaliador/?id='+sessionStorage.getItem("id"))
  .then(function (response) {
    // handle success
    return response.data.content.list
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

export const postAvaliacaoDoAvaliador = (avaliacao) => {
  return axios.post('http://localhost:8080/api/avaliacao/avaliar/?idUsuario='+sessionStorage.getItem("id"), avaliacao)
  .then(function (response) {
    // handle success
    console.log(response)
    return response
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return error
  })
};

export const getUsuario = (login, password) => {
  return axios.get('http://localhost:8080/api/usuario/usuario/?usuario='+login, {
  })
  .then(function (response) {
    // handle success
    return response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    return undefined
  })
};