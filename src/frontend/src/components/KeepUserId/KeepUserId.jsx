import axios from 'axios';

function KeepUserId(){
    // Verificar se o token JWT está presente
    const token = localStorage.getItem('token');

  if (token) {
    // Decodificar o token JWT para obter as informações do usuário
    const decodedToken = jwt_decode(token);

    // Extrair o ID do usuário do token decodificado
    const userId = decodedToken.id;

    return userId;
  } else {
    // Caso o token não esteja presente, o usuário não está logado
    return null;
  }
}

export default KeepUserId;