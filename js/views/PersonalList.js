//define(['lib/backbone', 'text!tpl/PersonalList.html'], function(Backbone, tpl){

	var PersonalList = Backbone.View.extend({

		template: _.template($("script.listaTemplate").html()),
		Tagname: "div",
		className: 'personalList',

		events: {

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

		adjust: function(){

			h =  $("#content").outerHeight();
			$(this.el).css("max-height", h - 10)
			return this;
		},

		render: function(){

			this.$el.html(this.template({personal: personal}));


			return this;
		}


	})

/*	return PersonalList;

})*/