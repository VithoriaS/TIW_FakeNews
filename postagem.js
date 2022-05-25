var db_noticias_inicial = {"data": [
    {
        'id': 1,
        'titulo':'Massacre em escola nos EUA',
        'subTitulo':'18 crianças foram mortas a tiros em uma escola nos Estados Unidos',
        'noticia':'Ocorreu um tiroteio em uma escola de ensino fundamental no Texas, Estados Unidos. O criminoso, 18 anos foi encontrado morto no local. Este caso já é considerado como o maior massacre desde 2012, no massacre da escola Sandy Hook que deixou 26 pessoas mortas',
        'imagem':''
    },

    {
        'id': 2,
        'titulo':'Influenciador morreu junto de seu cachorro em acidente no seu fusca',
        'subTitulo':'Incluenciador que viajava ao redor do mundo sofre acidente e acaba falecendo junto de seu cão',
        'noticia':'Jesse Koz viajava desde de 2017, em seu fusca com intenção de chegar no Alasca em setembro deste ano, 2022. Seu companheiro, Shurastey, um cão da raça golden retrivier de 6 anos, já acumulava quase 500 mil seguidores em sua conta no instagram',
        'imagem':''
    },

    {
        'id': 3,
        'titulo':'Poderá ser sacado até mil reais nesta semana, do FGTS',
        'subTitulo':'Quase 7 milhões de trabalhadores terão a oportunidade de executar esse saque',
        'noticia':'Trabalhadores nascidos em agosto e em setembro terão a oportunidade de sacar até R$ 1.000,00 do FGTS, a partir desta semana. As estimativas calculam que serão disponibilizados 5 bilhões de reais pelo governo federal.',
        'imagem':''
    },

    {
        'id': 4,
        'titulo':'França devolve fósseis ao Brasil',
        'subTitulo':'Cerca de mil fósseis do período Cretáceo foram devolvidos ao Brasil pela França',
        'noticia':'Em cerimônia Brasil teve o maior lote de fósseis já recuperado. Fósseis de até 145 milhões de anos serão retornados para o Brasil. Cerimônia realizada por autoridade do governo francês recuperou 998 peças do período Cretáceo contrabandeadas',
        'imagem':''
    },

    {
        'id': 5,
        'titulo':'IEM Major Rio 2022',
        'subTitulo':'Primeiro Major do Brasil será realizado no Rio de Janeiro, com lugar marcado e tipos de ingressos já definidos',
        'noticia':'Ingressos para um dos maiores campeonatos do jogo CS:GO podem variar de R$89,00 até R$1999,00. Ingressos começaram a ser vendidos nesta quarta-feira (25/05) as 14 horas. O evento já tem data marcada para o final de outubro e início de novembro.',
        'imagem':''
    }
]};

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
        "titulo": noticia.titulo,
        "subTitulo" : noticia.subTitulo,
        "noticia": noticia.noticia,
        "imagem" : noticia.imagem,
    };

    db.data.push(novaNoticia);
    displayMessage("Noticia inserida com sucesso");

    localStorage.setItem('db_noticias', JSON.stringify(db));
}

function updateNoticia(id, noticia) {
    let index = db.data.map(obj => obj.id).indexOf(id);

    db.data[index].titulo = noticia.titulo,
    db.data[index].subTitulo = noticia.subTitulo,
    db.data[index].noticia = noticia.noticia,
    db.data[index].imagem = noticia.imagem,

    displayMessage("Noticia alterada com sucesso");

    localStorage.setItem('db_noticias', JSON.stringify(db));
}

function deleteNoticia(id) {    
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Noticia removida com sucesso");

    localStorage.setItem('db_noticias', JSON.stringify(db));
}