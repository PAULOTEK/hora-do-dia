function carregar() {
    var mens = document.getElementById('msg');
    var img = document.getElementById('foto');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var sec = data.getSeconds();

    mens.innerHTML = `Agora são ${hora}:${min}:${sec} Horas .`
    if(hora >= 0 && hora < 12){
        //Bom Dia!!
        img.src = 'imagens/amanha.png'
        document.body.style.background = '#fbfe62'
    }else if(hora >= 12 && hora < 18 ){
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e99f3d'
    }else{
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#345a65'
    }
}
