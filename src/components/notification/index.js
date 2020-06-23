import { store } from 'react-notifications-component';

export const showNotification = (
 message = '',
 title = '',
 type = 'success',
 insert = "bottom",
 container = "top-right",
 animationIn = ["animated", "fadeIn"],
 animationOut = ["animated", "fadeOut"],
 dismiss = {
 duration: 4000,
 onScreen: false
 }
) => {
 store.addNotification({
 title,
 message,
 type,
 insert,
 container,
 animationIn,
 animationOut,
 dismiss
 });
}

//type -> success / danger
//exemplo de chamada -> showNotification("Não foi possivel buscar as reservas.", "Erro!", "danger")
//import ->  import { showNotification } from '../components/notification';