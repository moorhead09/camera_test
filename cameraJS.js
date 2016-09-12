var startBtn = document.getElementById('startBtn');

function start(){
    navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true
    }).then(gotStream).catch(logError);
    startBtn.disabled = true;
}

function gotStream(stream){
    stream.getTracks().forEach(function(track){
        track.onended = function(){
            startBtn.disabled = stream.active;
        };
    });
}

function logError(error){
    log(error.name + ": " + error.message);
}