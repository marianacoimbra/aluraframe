class View {

    constructor(element) {
        this._element = element;
    }

    template() {
        throw new Error('Essa classe precisa ser implementada');
    }

    //O innerHTML
    // será responsável por converter as strings em elementos 
    //do DOM. Isto será inserido como filho da <div>
    
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}