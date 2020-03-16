var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + APIKey;
var APIKey = "&api-key=A4Q6FKrBWCA51rbiR8pn6ovKGqL5Ikh3";
var search = $("#search-term").val().trim();

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(reply) {
       

        console.log(reply);
      });