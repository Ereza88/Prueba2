var Reserva;
exports.setModel = function(modelo){
	Reserva = modelo;
};
exports.index = function(req, res){
	Reserva.find({}, function(error, reservas){
		if(error){
			res.send('Ha surgido un error.');
		}else{
			res.render('reservas/index', {
				reservas: reservas
			});
		}
	})
};

exports.create = function(req, res){
	res.render('reservas/save', {
		put: false,
		action: '/reservas/',
		reserva: new Reserva({
			nombre: '',
			apellido: '',
			comensales: '',
			observaciones: ''
		})
	});
};
exports.store = function(req, res){
	var reserva = new Reserva({
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		comensales: req.body.comensales,
		observaciones: req.body.observaciones		
	});
	reserva.save(function(error, documento){
		if(error){
			res.send('Error al intentar guardar la reserva store.');
		}else{	
			res.redirect('/reservas');
		}
	});
};
exports.show = function(req, res){
	Reserva.findById(req.params.id, function(error, documento){
		if(error){
			res.send('Error al intentar ver la reserva.');
		}else{
			res.render('reservas/show', {
				reserva: documento
			});
		}
	});
};
exports.edit = function(req, res){
	Reserva.findById(req.params.id, function(error, documento){
		if(error){
			res.send('Error al intentar ver la reserva.');
		}else{
			res.render('reservas/save', {
				put: true,
				action: '/reservas/' + req.params.id,
				reserva: documento
			});
		}
	});
};
exports.update = function(req, res){
	Reserva.findById(req.params.id, function(error, documento){
		if(error){
			res.send('Error al intentar modificar la reserva.');
		}else{
			var reserva = documento;
			reserva.nombre = req.body.nombre;
			reserva.apellido = req.body.apellido;
			reserva.comensales = req.body.comensales,
			reserva.observaciones = req.body.observaciones			
			reserva.save(function(error, documento){
				if(error){
					res.send('Error al intentar guardar la reserva update.');
				}else{	
					res.redirect('/reservas');
				}
			});
		}
	});
};
exports.destroy = function(req, res){
	Reserva.remove({_id: req.params.id}, function(error){
		if(error){
			res.send('Error al intentar eliminar la reserva.');
		}else{	
			res.redirect('/reservas');
		}
	});
};
