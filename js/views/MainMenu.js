define(['lib/backbone'/*, 'text!tpl/MainMenu.html'*/], function(Backbone/*, tpl*/){

	var Name = Backbone.View.extend({

		template: _.template($("script.menuTemplate").html()),
		Tagname: "div",
		className: 'mainMenu',

		events: {
			"click .showList" : function(){alert("la puta madre");},
			"click .showCandelar" : function(){alert("2");}
		},

		initialize: function(){

			return this;
		},

		destroy: function(){

		    // COMPLETELY UNBIND THE VIEW
		    this.undelegateEvents();

		    this.$el.removeData().unbind(); 

		    // Remove view from DOM
		    this.remove();  
		    Backbone.View.prototype.remove.call(this);
			
		},

		render: function(){

			this.$el.html(this.template());

			return this;
		}


	})

	return Name;

})