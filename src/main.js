

$(document).ready(function() {

    $('#moodGetter').click(function() {
    let city = $('#mood').val();
    $('#mood').val("");
    $.ajax({
      // url: `https://developers.zomato.com/api/v2.1/search?apikey=dbbf59bf991908cbdc0b18e63de1a1ff&city_id=286&cuisine_id=1`,
      url: `https://developers.zomato.com/api/v2.1/search?cuisine_id=1&city_id=286&lat=45.5231&lon=122.6765&apikey=dbbf59bf991908cbdc0b18e63de1a1ff`,

//apikey=dbbf59bf991908cbdc0b18e63de1a1ff
      // https://developers.zomato.com/api/v2.1/search/?cuisine_id=1&city_id=286&lat=45.5231&lon=122.6765
// 45.5231° N, 122.6765° W
//"https://developers.zomato.com/api/v2.1/search?city_id=286&cuisine_id=1"clear


      // url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dbbf59bf991908cbdc0b18e63de1a1ff`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        $("#results").text("You should see some food here:");
        // results = JSON.parse(response);
        console.log(response);
        $("#results").append(response.count);

        console.log("got into success");
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
    // console.log("end of file.");
  });
});
// .attr
// yelp client id cDAdfpWUkpP9BB_aW4qjbA
// w8LTEGB0yUCcJpxcSQSeTDneXQJzCe8YXxUSGz7m7tOBUABVOiAUiMo_UwH0zI5umPJIRCsjTDdtXSW-EAReTFYsjVv4ScOOO8DylV9WVnBOrKyDlbaNyGZ7RZaxWnYx
