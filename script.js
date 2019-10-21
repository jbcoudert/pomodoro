$(document).ready(function () {
    var timerInstance = new easytimer.Timer();
    var timer = timerInstance;
    $('#start').click(function () {
        timer.start({ countdown: true, startValues: { seconds: 10 } });
        $('#countdownExample .values').html(timer.getTimeValues().toString());
        timer.addEventListener('secondsUpdated', function (e) {
            $('#countdownExample .values').html(timer.getTimeValues().toString());
        });
    })

    $('#pause').click(function () {
        timer.pause();
    })

    timer.addEventListener('targetAchieved', function (e) {
        $('#countdownExample .values').html('KABOOM!!');
    });

    $("#addTask").click(function () {

        var newTd = $("<td>")

        $(".task3").append(newTd)
        $(".task3").append($("#newTask").val() , $(".fa-trash"))
    })

    $(".fa-trash").click(function () {
        $(this).parent().remove();
    });

})