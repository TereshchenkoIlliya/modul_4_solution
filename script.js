

(function() {
    var names = [ "Illuha", "Yuri", "Roman", "Aleksei", "Gary", "Dan", "Tommy", "Kolya", "Ivan"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'i') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();