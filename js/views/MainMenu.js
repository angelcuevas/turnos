//define(['lib/backbone'/*, 'text!tpl/MainMenu.html'*/], function(Backbone/*, tpl*/){

	var MainMenu = Backbone.View.extend({

		template: _.template($("script.menuTemplate").html()),
		//Tagname: "div",
		//className: 'mainMenu',
		el: "#formenu",

		events: {
			"click .showList" : function(){$("#content").html("ARGGGGGGGG");},
			"click .showCandelar" : function(){$("#content").html("uhhhhhhhhhhhhh");}
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

			this.$el = $("#formenu");

			this.$el.html(this.template());

			return this;
		}


	})

/*	return MainMenu;

})*/