//kickoff the application
$(function(){
	window.router = new AppRouter();
	Backbone.history.start();
});