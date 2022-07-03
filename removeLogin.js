const form = document.querySelector('#remove-form');
form.onsubmit = (e) => {
    e.preventDefault();
} 


function getProperty(str, prop, value) {
    
    let property = {};
    if(prop && value) {
        
        property = JSON.parse(localStorage.getItem(str)).usuarios.find(e => e[prop] === value);
        
    } else {
        property = JSON.parse(localStorage.getItem(str)).usuarios;
    }

    return property;
}

function removeUser(localStorageItem, login, senha) {
    //Busco do localStorage
    let database = localStorage.getItem(localStorageItem);
    //Desestruturo usuarios do localStorage
    let { usuarios } = JSON.parse(database);

    //Busco o usuário a ser removido. Se achar, retorna o index senão, retorna -1
    let userToBeRemoved = usuarios.findIndex(e => (e.login === login) && (e.senha === senha));

    if (userToBeRemoved > 0) {
        usuarios.splice(userToBeRemoved, 1)
        localStorage.setItem('db_usuarios', JSON.stringify ({usuarios}));
        
        alert('Usuário removido com sucesso!');
        setTimeout(() => {
            window.location.href = '/login.html';
          }, 3000)
    } else {
        alert('Usuário não encontrado.');
    }

}


function removeLogin() {
    const login = form.querySelector('#username').value;
    const senha = form.querySelector('#password').value;

    // const currentUsers = getProperty('db_usuarios');
    let database = localStorage.getItem('db_usuarios');
    //Desestruturo usuarios do localStorage
    let { usuarios } = JSON.parse(database);

    //senhas é uma variável que não é utilizada, portanto pode ser removida.
    // const senhas = getProperty('db_usuarios', "senha", "Ola");

    const idx = usuarios.findIndex(e => (e.login === login) && (e.senha === senha));

    if(idx > 0) removeUser('db_usuarios', login, senha);
    else if(idx < 0) alert('Usuário não existente');
}


//Remove Login
form.querySelector('#btn_remover').addEventListener('click', removeLogin);

  
