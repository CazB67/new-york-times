



    


$("#search").on("click", function(event) {
  var APIKey = "&api-key=A4Q6FKrBWCA51rbiR8pn6ovKGqL5Ikh3&page=0";
    var search = $("#search-term").val().trim();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + APIKey;
    var articleCount = $("#numOfRecords").val().trim();
    console.log(search);

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(reply) {
       
        
        
        var articles = $(".top-articles");
        for(var i=0; i< articleCount; i++) {
          //console.log(reply.response.docs[i].snippet);
          console.log (reply.response.docs[i].web_url);
          var article = $("<div>").addClass("p-3 mb-2 border border-secondary articleList");
          $(article).text(reply.response.docs[i].snippet);
          $(article).attr("src", reply.response.docs[i].web_url)
          $(articles).append(article)




        }
        $(".articleList").on("click", function(){
          var listObject = $(this);
          console.log(this);
          
          window.location.href = $(listObject[0]).attr("src");



          
          
          
          });
        

      
      });
    });
    
    
