define(['lib/backbone', 'text!tpl/'], function(Backbone, tpl){

	var Name = Backbone.View.extend({

		template: _.template(tpl),
		Tagname: "div",
		className: 'className',

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

		render: function(){

			this.$el.html(this.template());

			return this;
		}


	})

	return Name;

})