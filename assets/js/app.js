

$("#submit").click(function () {
  event.preventDefault();

  var searchTerm = $("#search-term").val().trim(),
    startDate = $("#start-year").val() + "0101",
    endDate = $("#end-year").val() + "1231",
    numResults = $("#number-of-records").val(),
    clear = function () {
      $("#articles-div").empty();
    },
    url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  url += '?' + $.param({
    'api-key': "51c234d9d2b943dd8f9a0561a5e8722c",
    'q': searchTerm,
    'begin_date': startDate,
    'end_date': endDate,
  });

  clear();

  $.ajax({
      url: url,
      method: 'GET',
    })
    .then(updatePage);

});