//backbone code
var Book = Backbone.Model.extend({
	idAttribute: "_id"
});

var BookCollection = Backbone.Collection.extend({
	model: Book,
	url: "/books"
});

var BookView = Backbone.View.extend({
	template: "li",
	className: "book",
	render: function(){
		var template = $("#booktemplate").html();
		var compiled = Handlebars.compile(template);
		var html = compiled(this.model.attributes);
		this.$el.html(html);
		return this;

		//this.el --> is a reference to the view, when its rendered, as HTML object 
		//this.$el --> same, but now it's wrapped in jQuery object, 
		//we can use them interchangeably, but every time we want to use jQuery method with
		// our view, we need to use $el
	}
});

var BookCollectionView = Backbone.View.extend({
	tagName: "ul",
	className: "books",
	render: function(){
		this.collection.each(function(book){
			var bookView = new BookView({model: book});
			this.$el.append(bookView.render().el);
		}, this);
	  return this;
	}
});