(function() {
  var questions = [{
 question : "How many miles per dollar do you get with AA Advantage Platinum" , //Gen
  choices : [ "$6", "$11", "$8", "$5"],
  correctAnswer : "$8"
},
{
  question : "Which of the following is a new route from DFW?" ,  //Gen
  choices : [ "Panama City, FL", "Des Moines, IA", "Chicago, IL", "Austin, TX"],
  correctAnswer : "Panama City"
},
{
  question : "Which of the following is NOT offered on board?" ,  //Gen
  choices : [ "Apple Juice", "Beer", "Ginger Ale", "Chocolate Milk"],
  correctAnswer : "Chocolate Milk"
 },
 {
  question : "When was American airlines first founded?" , //Gen
  choices : [ "1906", "1975", "1930", "1942"],
  correctAnswer : "1930"
},
{
  question : "How many airplanes does AA own?" , //Gen
  choices : [ "1500", "500", "3000", "1000"],
  correctAnswer : "1500"
},
{
  question : "Which one of these famous Youtubers flies on American Airlines?" , //Gen
  choices : [ "Jake Paul", "Casey Neisat", "Pewdewpie", "Freddy"],
  correctAnswer : "Casey Neisat"
},
{
  question : "Which one of these cities is the hub of AA?" , //Gen
  choices : [ "Atlanta , Georgia", "New York City , New York", "Los Angeles , California", "Fort Worth , Texas"],
  correctAnswer : "Fort Worth, Texas"
},
{
  question : "Who is the first African American pilot of AA?" , //Gen
  choices : [ "Daniel Samuels", "Dave Harris", "Eric Sandlin", "Leslie Schroyer"],
  correctAnswer : "Dave Harris"
},
{
  question : "Which one of these movies features the main character trying to get 10 million AA miles?" , //
  choices : [ "Airplanes", "Up", "Up in the air ", "The aviator"],
  correctAnswer : "Up"
},
{
  question : "How many countries does AA fly to?" , //Gen
  choices : ["15", "55", "96", "45"],
  correctAnswer : "55"
},
{
  question : "How many employees does AA have?" , //Gen
  choices : [ "86000", "12500", "113300", "45000"],
  correctAnswer : "113300"
},
{
  question : "How many jobs has AA created since its founding?" , //Gen
  choices : ["1000000", "900000", "800000", "450000"],
  correctAnswer : "900000"
},
{
  question : "Who was the first female AA pilot?" , //Gen
  choices : [ "Bonnie Tiburzi", "Sally Ride", "Bessie Coleman", "Amy Johnson"],
  correctAnswer : "Bonnie Tiburzi"
}];
  


  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<p class="title is-3">Question ' + (index + 1) + '</p>');
    qElement.append(header);
    
    var question = $('<div class="notification is-light title is-5">').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul class="donate-now container">');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value="' + i + '" id="' + i + '"/><label class="title is-2" for="' + i + '"></label>';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<h1>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();

