function dispatch(handler, req, res) {
    var content = "";
    if (typeof handler === 'function') {
        handler(req, res);
    } else {
        console.log("No se ha encontrado manipulador de petici�n para esta peticion.");
    }
}

exports.dispatch = dispatch;