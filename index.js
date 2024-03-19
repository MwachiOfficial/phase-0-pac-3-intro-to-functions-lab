function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(shout = "hello"){
    console.log(shout.toUpperCase());
  }

function logWhisper(whisper = "hello"){
    console.log(whisper.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase() === string) {
        return "I can't hear you!"
    } else if (string.toUpperCase() === string){
        return "YES INDEED!"
    } else if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}