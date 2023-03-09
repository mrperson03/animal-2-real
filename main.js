function start() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/train/audio/1ix3ut7xpo8JZRqC730AjzueJ6GqtoSyu', modelReady);
    document.getElementById("detect").innerHTML = '<span id = "detected"><h3>Detected Dog: </h3><h3>Detected Cat: </h3><h3>Detected Cow: </h3><h3>Detected Lion: </h3></span>'
    document.getElementById("detect").hidden = false
}

function modelReady() {
    classifier.classify(gotResults);
}



