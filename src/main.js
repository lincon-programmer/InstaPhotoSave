function adicionarBotaoUI(){
    try{
        setTimeout(function(){
            var menu_reacoes = document.getElementsByClassName('_aamu _ae3_ _ae47 _ae48')[0];
            if(menu_reacoes != undefined){
                menu_reacoes.append(button_download)
            };
        }, 2000);
    }catch(Ex){
        adicionarBotaoUI();
    }
}

function carregar_pagina() {
    try {
        setTimeout(function(){
            var elements = document.querySelectorAll('._aabd');
            elements.forEach(function(element){
                
                element.addEventListener('click', function(){
                    adicionarBotaoUI();
                });
            });
        }, 2000);
    } catch (error) {
        carregar_pagina();
    }
}

carregar_pagina();

button_download.addEventListener('click', () => {
    var link_image = document.getElementsByClassName('_aagu _aato')[0].firstChild.firstChild.src;
    download_image(link_image, 'instagramImage.png')
});