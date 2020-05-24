import axios from "axios";


export const getAlunos = () => {
  return axios.get('http://localhost:3000/alunos')
  .then(function (response) {
    // handle success
    return response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

export const getTimes = () => {
  return axios.get('http://localhost:3000/times')
  .then(function (response) {
    // handle success
    return response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

export const getAlunosInscritos = () => {
  return axios.get('http://localhost:3000/alunosInscritos')
  .then(function (response) {
    // handle success
    return response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
};

export const patchIntegrantesDoTime = (aluno, time) => {
  return axios.patch('http://localhost:3000/times/'+ time.id, {
    id: time.id,
    nome: time.nome,
    integrantes: time.integrantes
  })
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

export const postAlunosInscritos = (lista) => {
    return lista.map((value) => {
      return axios.post('http://localhost:3000/alunosInscritos', {
        id: value.id,
        nome: value.nome,
        curso: value.curso
      })
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
    })
};

