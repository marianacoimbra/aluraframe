class MensagemView extends View {

    constructor(element) {
        super(element);
    }


    //Em JavaScript, uma string sem conteúdo é avaliada como falso. 
    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

   

}