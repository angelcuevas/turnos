//define(['lib/backbone', 'text!tpl/calendar.html'], function(Backbone, tpl){

	var Calendar = Backbone.View.extend({

		template: _.template($("script.calendarTemplate").html()),
		Tagname: "div",
		className: 'calendar',

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

/*	return Calendar;

})*/