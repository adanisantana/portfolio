const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit',function(event){
    event.prevantDefault();
    const campoNome= document.querySelector('#name');
    const txtNome = document.querySelector('txtNome');

    if(campoNome.value.length<3){
        txtNome.innerHTML ='o nome deve ter no minimo 3 caracteres'
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = '-';
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = 'Digite um email válido.';
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML='';
    }

    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');

    if(campoSubject.value.length<5){
        txtSubject.innerHTML='O assunto deve ser no minimo 5 caracteres'
        campoSubject.focus();
        return;
    }else{
        txtEmail.innerHTML = '-'
    }

    const campoMessage = document.querySelector('message');

    window.alert('Formulário enviado com sucesso');

    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''

});