define(['lib/backbone',

		],
			function (Backbone, Usuario,

					JuegoTerminado,
					FichaArticulo
					
					) {


	var Router = Backbone.Router.extend({

		routes: {
			"" : "home",
			"list": "list",
			"calendar": "calendar"
		},


		home: function(id){
			this.vaciar()
			
		},

		vaciar: function(){
			$("#content").empty();
		},

		list: function(){

			this.vaciar();
			lista.render();
			document.getElementById("content").appendChild(lista.el);	

		},

		calendar: function(){
			this.vaciar();
			calendario.render();
			document.getElementById("content").appendChild(calendario.el);	
		}		




	})



	return Router;
})

