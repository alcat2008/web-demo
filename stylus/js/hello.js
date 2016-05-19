var hello = function(message){
  print(message);
};

function print(text){
  var messageBox = document.getElementById("message-box");
  messageBox.innerText = messageBox.innerText + "\n" + text;
};

hello('Gimm');
