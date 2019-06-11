function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(shout(string))
}


function logWhisper(string) {
  console.log(whisper(string))
}

function sayHiToGrandma(string) {
  if (whisper(string)) {
    return "I can\'t hear you!" 
  } else if (logShout(string)) {
    return "YES INDEED!"
  } else if (console.log("I love you, Grandma.")) {
    return "I love you, too."
  }
  
  
    
  
}