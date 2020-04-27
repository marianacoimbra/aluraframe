class Mensagem {

    constructor(texto = '') {
        this._text = texto;
    }

    get texto() {
        return this._text;
    }

    set texto(texto) {

        this._texto = texto;
    }
}