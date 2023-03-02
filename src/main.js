function adicionarBotaoUI(){
    try{
        setTimeout(function(){
            document.getElementsByClassName('_aamu _ae3_ _ae47 _ae48')[0].append(button_download);
        }, 2000);
    }catch(Ex){
        adicionarBotaoUI();
    }
}
 
adicionarBotaoUI();

button_download.addEventListener('click', () => {
    var link_image = document.getElementsByClassName('_aagu _aato')[0].firstChild.firstChild.src;
    download_image(link_image, 'instagramImage.png')
});