var db_noticias_inicial = {"data": []};

var db = JSON.parse(localStorage.getItem('db_noticias'));
if (!db) {
    db = db_noticias_inicial
};

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertNoticia(noticia) {
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novaNoticia = {
        "id": novoId,
        "nome": noticia.nome,
        "titulo" : noticia.titulo,
        "descricao": noticia.descricao,
        "imagem" : noticia.imagem,
    };

    db.data.push(novaNoticia);
    displayMessage("Noticia inserida com sucesso");

    localStorage.setItem('db_noticias', JSON.stringify(db));
}

function updateNoticia(id, noticia) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].nome = noticia.nome,
    db.data[index].titulo = noticia.titulo,
    db.data[index].descricao = noticia.descricao,
    db.data[index].imagem = noticia.imagem,

    displayMessage("Noticia alterada com sucesso");

    localStorage.setItem('db_noticias', JSON.stringify(db));
}

function deleteNoticia(id) {    
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Noticia removida com sucesso");

    localStorage.setItem('db_noticias', JSON.stringify(db));
}