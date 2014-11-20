var API_BASE_URL = "https://api.github.com";
var USERNAME = "ivangonzalez7";
var PASSWORD = "saviola7";

/*
$("#button_get_gist").click(function(e) {
	e.preventDefault();
	getGist($("#gist_name").val());
});



function getGist(gist_name) {
	var url = 'https://api.github.com/gists/' + gist_name;

	$.ajax({
		url : url,
		type : 'GET',
		crossDomain : true,
		dataType : 'json',
	}).done(function(data, status, jqxhr) {
				var gist = data;
				
					$('<h4> url: ' + gist.url + '</h4>').appendTo($('#gist_result'));
					$('<p>').appendTo($('#gist_result'));	
					$('<strong> ID: </strong> ' + gist.id + '<br>').appendTo($('#gist_result'));
					$('<strong> description: </strong> ' + gist.description + '<br>').appendTo($('#gist_result'));
					$ ('<strong> html url : </strong> ' + gist.html_url + '<br>').appendTo($('#gist_result'));
					$('</p>').appendTo($('#gist_result'));
				
				

	}).fail(function() {
		$("#repos_result").text("No repositories.");
	});

}

*/
$("#button_get_repo").click(function(e) {
	e.preventDefault();
	getRepo($("#repository_name").val());
});
