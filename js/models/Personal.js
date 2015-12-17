define(['lib/backbone'],function(Backbone){


	var Personal =  Backbone.Model.extend({

		id: '',
		nombre: '',
		gender: '',
		tipo:'',
		horas : '',
		canDoCaja: ''

	})


	return Personal;

})