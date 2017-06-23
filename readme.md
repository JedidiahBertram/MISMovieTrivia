# Make It Stop Movie Trivia Madness
![alt text](https://github.com/JedidiahBertram/obnoxious-youtube-game/blob/master/assets/Screen%20Shot%202017-06-23%20at%2010.16.38%20AM.png)

---
### Stack:
* __JavaScript__
* __jQuery__
* __CSS__
* __HTML__

---
### The Story Behind the MADNESS!
This was the first webpage I ever built, and I was tasked with completing it in 7 days.

This was for my bootcamps (Galvanize Austin) Q1 project, at the time I started working on the project I had been in the course for 5 weeks.

My knowledge before starting the bootcamp was very limited and really was just the studying I had done to be accepted into the program, and the pre-course curriculum. The point I am trying to get across is that at the time, I was virtually brand new at this. I was very proud of this project and the progress I had made in such a short period of time, and I still am.

The basic idea for the webpage was to make a fun and funny trivia app that distracts the player as they try to think of the guess with an obnoxious YouTube video playing in the background.

At first, the trivia was supposed to be clever riddles that I wrote, and the YouTube videos would be provided through the YouTube API, but various challenges and obstacles popped up numerous times along the way and made me rethink the project almost completely and solve a lot of problems.

---
### Challenges:
One of the biggest challenges I faced was accessing the YouTube API.

I spent the first three days of the week we were given for the project studying how google API's and the YouTube API work. I got a pretty good grasp on how google API's work, and getting keys for google APIs, but the complexity that the YouTube API has come to in recent years would illude me. After three days of trying to get it working, I asked my instructor for help, and he said that it might be too complex for me to figure out and get working in a week and I should figure something else out. Some may see this as time wasted, but even though the initial goal was never met, I still learned A LOT from the three days of studying and trial and error.

So I couldn't use the YouTube API. I had to figure out another way to get random videos to play on the webpage, or start a new project all together. It didn't take me long to decipher the YouTube player embed code, and use javascript to cycle through a list of super obnoxious videos. I also figured out how to make the video repeat endlessly, and take away controls of the player entirely so that the user could never stop the video, or adjust the volume within the player.

This is what that code looked like:

```var videoIds = ['b-t8JmyCvWg', '2d2xFRb6Srs', '8of00uEVRRA', 'f_SwD7RveNE', 'BB0DU4DoPP4',
    'TnnBgRHlRRc', 'dMLaKR9eoRA', 'IAR5cqVYQKw', 'LEC_lkpD3rM', 'dDfmUTXXi_U', 'qWPwfQcPS5s',
    '3S8ynIDYyG4', 'o1eHKf-dMwo'
  ];

  function videoLoad() {
    var videoId = videoIds[Math.floor(Math.random() * videoIds.length)];

    var embedUrl = `<iframe width="640" height="390" src='https://www.youtube.com/embed/${videoId}?version=3&autoplay=1&controls=0&disablekb=0&&showinfo=0&loop=1&playlist=${videoId}'; frameborder="0"></iframe>`;

    var ytVideo = $('.ytVideo');
    ytVideo.append(embedUrl);
  }

  videoLoad();
  ```

But I still had to find an API to use, as it was one of the requirements of the project.

I scoured the internet for a trivia API that would work with what I was trying to accomplish, only to find that there were not many. The ones that did exist were either multiple choice, or true or false questions, which would not work for my idea. To make the game truly annoying and difficult, the user would have to come up with an answer from their brains, with no help. Using multiple choice or true or false, a user would just be able to use the process of elimination to guess the correct answer and be alleviated of the obnoxiousness! NO FUN!

So how would I generate some sort of trivia in such a way that the users knowledge (or googling) would be the only way to answer the question, if there were no trivia APIs out there to help.

I had to get creative, and thought of a solution. I would use the OMDB API to display a plot synopsis of a single movie, and the user would have to guess the title of the movie from the plot synopsis. It worked like a charm.

At this point, my app was able to generate the random obnoxious videos, as well as the trivia question and answer, and functioned mostly as it should. Cycling through the videos and movie trivia on a correct guess, but registering incorrect on a wrong guess.

I still had some functionality to add, and the app took some different forms when this came into play as well.

I wanted to add a timer, coded 100% in javascript, and I did that.

I wanted to add a score counter, and I did that.

Eventually with this functionality the app worked as follows:

When a player hit start, the timer would begin counting down and a video and question would load. As they guessed, the scores for correct or incorrect would increase, and if the correct guess was given, the video would cycle. Giving the player a slight reprieve from the horribleness, with a different video. When the timer runs out, the score is still displayed, and the user is given the option to play again. In the end it came out to be a beat your last score type of game.

After that, all I had left was styling, which I wanted to do 100% in HTML and CSS just to brush up my chops there, and I think it turned out pretty well.
