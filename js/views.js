/****** VIEWS  *******/
//Skylanders View
App.SkylandersListView = Backbone.View.extend({
	template: _.template($("#SkylandersList-template").html()),
	initialize: function (){
		_.bindAll(this, "render");
		this.collection.bind("reset", this.render, this);
        this.collection.fetch();
		this.render();
	},
	events:{
		"click .character": "changeCharacter",
		

	},
	render: function(){
		var collection = this.collection;
		$(this.el).html(this.template({ skylanders : collection.toJSON() }));
		return;
	},
	changeCharacter: function(ev){
		var character = $(ev.target).data('character');
		alert(character);
	}
});
