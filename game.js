$(document).ready(function(){
  // $('input[type=submit]').on('click' , function(ev){
  //   event.preventDefault();
var videoIds = ['AtbMnixO2nc', 'gI4J4z9jJy8', 'b-t8JmyCvWg', '3S8ynIDYyG4'];

var videoId = videoIds[Math.floor(Math.random()*videoIds.length)];

  console.log(videoId);

var url = `https://www.youtube.com/embed/${videoId}?version=3&autoplay=1&controls=0&disablekb=0&&showinfo=0&loop=1&playlist=${videoId}`;

  $('iframe').attr('src' , url);

var movieIds = ['tt0903747', 'tt0088763', 'tt1190536', 'tt0303461', 'tt1305826',
 'tt3061046', 'tt1049413', 'tt0114709', 'tt0113198', 'tt1449283', 'tt0816692',
 'tt0468569', 'tt1375666', 'tt0082971'];

var movieId = movieIds[Math.floor(Math.random()*movieIds.length)];

//console.log(movieId);

$.get('http://www.omdbapi.com/?i=' + movieId)
  .done(function(data){

    var triviaInfo = data.Plot;

//console.log(triviaInfo);

    var moviePlot = $(`<p>${data.Plot}</p>`);

var triviaQuestion = $( '.question' );
    triviaQuestion.append(moviePlot);

    $('input[type=submit]').on('click' , function(ev){
      event.preventDefault();
var userInput = $('input[type=text]').val();
      console.log(userInput);
    if(userInput === data.Title){
      window.alert('You got it right! You are not as dumb as you look!');
    }
    else {
      window.alert('WRONG ANSWER JACKASS!!!');
    }
//console.log($('iframe[type=src]'));

    });
  });
});
