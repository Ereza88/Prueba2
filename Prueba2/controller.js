function dispatch(handler, req, res) {
    var content = "";
    if (typeof handler === 'function') {
        handler(req, res);
    } else {
        console.log("No se ha encontrado manipulador de petición para esta peticion.");
    }
}

exports.dispatch = dispatch;