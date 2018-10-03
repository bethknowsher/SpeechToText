window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = 'en-US';

recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;

  noteContent += transcript;
  noteTextarea.val(noteContent);
}

recognition.onspeechend = function() {
  instructions.text('You were quiet for a while so voice recognition turned itself off.');
}

recognition.onerror = function(event) {
  if(event.error == 'no-speech') {
    instructions.text('No speech was detected. Try again.');  
  };
}
$('#start-btn').on('click', function(e) {
  recognition.start();
});

$('#stop-btn').on('click', function(e) {
  recognition.stop();
});