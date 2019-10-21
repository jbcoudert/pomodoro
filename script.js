$(document).ready(function() {
    var timerInstance = new easytimer.Timer();
    var timer = timerInstance;
    $('#start').click(function() {
        timer.start({countdown: true, startValues: {seconds: 10}});
        $('#countdownExample .values').html(timer.getTimeValues().toString());  
        timer.addEventListener('secondsUpdated', function (e) {
            $('#countdownExample .values').html(timer.getTimeValues().toString());
        });
    })
    $('#pause').click(function() {
       timer.pause();
    })
    timer.addEventListener('targetAchieved', function (e) {
        $('#countdownExample .values').html('KABOOM!!');
    });

    $("#addTask").click(function() {
        
        var newTd = $("<td>")
        $("#tr-2").append(newTd)
        $(newTd).html($("#newTask").val())
    })

})