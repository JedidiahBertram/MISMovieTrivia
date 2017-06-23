$(document).ready(function() {

  $('button[type=clicker]').on('click', function(ev) {
    $('button[type=clicker]').hide();
    obnoxiousGame();
  });
  //obnoxiousGame();

  $('button[type=button]').on('click', function(ev) {
    $('button[type=button]').hide();
    $('.correctScoreDiv').empty();
    $('.incorrectScoreDiv').empty();
    obnoxiousGame();
  });

  function obnoxiousGame() {

    function startTimer(duration, display) {
      var timer = duration,
        minutes, seconds;
      var realTimer = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
          clearInterval(realTimer);
        }
        if (timer < 0) {
          $('.ytVideo').empty();
          $('.question').empty();
          $('button[type=button]').show();

        }
      }, 1000);

    }

    jQuery(function($) {
      var threeMinutes = 60 * 3,
        display = $('#time');
      startTimer(threeMinutes, display);
    });

    var userCorrectScore = 0;
    var userIncorrectScore = 0;
    //console.log(userScore);

    var videoIds = ['b-t8JmyCvWg', '2d2xFRb6Srs', '8of00uEVRRA', 'f_SwD7RveNE', 'BB0DU4DoPP4',
      'TnnBgRHlRRc', 'dMLaKR9eoRA', 'IAR5cqVYQKw', 'LEC_lkpD3rM', 'dDfmUTXXi_U', 'qWPwfQcPS5s',
      '3S8ynIDYyG4', 'o1eHKf-dMwo'
    ];

    function videoLoad() {
      var videoId = videoIds[Math.floor(Math.random() * videoIds.length)];

      //console.log(videoId);

      var embedUrl = `<iframe width="640" height="390" src='https://www.youtube.com/embed/${videoId}?version=3&autoplay=1&controls=0&disablekb=0&&showinfo=0&loop=1&playlist=${videoId}'; frameborder="0"></iframe>`;

      var ytVideo = $('.ytVideo');
      ytVideo.append(embedUrl);
      //$('iframe').attr('src' , url);
    }

    videoLoad();

    var movieIds = ['tt0084787', 'tt0137523', 'tt0073195', 'tt0089218', 'tt1490017',
      'tt0088763', 'tt0101414', 'tt0144117', 'tt1136608', 'tt0468569', 'tt1853728',
      'tt0319343', 'tt0116282', 'tt1119646', 'tt0780536', 'tt1375666', 'tt0816692',
      'tt0371746', 'tt0425210', 'tt1210166', 'tt0110912', 'tt0359950', 'tt0796366',
      'tt0838283', 'tt1049413', 'tt0434409', 'tt0080455', 'tt0206634', 'tt0106856',
      'tt0087332', 'tt0787475', 'tt0119654', 'tt0108037', 'tt0114694', 'tt0151804'
    ];

    function questionLoad() {
      var movieId = movieIds[Math.floor(Math.random() * movieIds.length)];
      $('input[type=submit]').off('click');
      //console.log(movieId);

      $.get('http://www.omdbapi.com/?i=' + movieId + '&apikey=25fb2c7a')
        .done(function(data) {
          var triviaInfo = data.Plot;

          //console.log(triviaInfo);

          var moviePlot = $(`<p>${triviaInfo}</p>`);
          var triviaQuestion = $('.question');
          triviaQuestion.append(moviePlot);

          $('input[type=submit]').on('click', function(ev) {
            event.preventDefault();
            var userInput = $('input[type=text]').val();
            //console.log(userInput);

            if (userInput.toLowerCase() === data.Title.toLowerCase()) {
              $('input[type=text]').val("");
              //console.log(userInput);
              userCorrectScore += 1;
              $('.correctAlert').show().delay(1000).fadeOut("fast");
              $('.correctScoreDiv').empty();
              $('.correctScoreDiv').append(userCorrectScore);
              //console.log(userScore);
              $('.ytVideo').empty();
              $('.question').empty();
              //window.alert('You got it right! You know your movies(/TV shows)');
              //window.alert('Click ok to play again! (If you think you can handle it.)');
              //window.location.reload();
              //$('.question').load(triviaInfo);
              videoLoad();
              questionLoad();
            } else {
              userIncorrectScore += 1;
              $('.incorrectScoreDiv').empty();
              $('.incorrectScoreDiv').append(userIncorrectScore);
              //window.alert('Incorrect. Click ok to keep trying.');
              $('.wrongAlert').show().delay(1000).fadeOut("fast");
              //console.log('WTF MATE!?');
            }

          });
        });
    }
    questionLoad();
  }

});
