var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "51c234d9d2b943dd8f9a0561a5e8722c",
  'q': "cats",
  'begin_date': "20050101",
  'end_date': "20080101",
});

// var searchTerm = $("#search-term").val(); // User Input for search term



$.ajax({
    url: url,
    method: 'GET',
  })
  .then(function(response) {
console.log(url);
});
