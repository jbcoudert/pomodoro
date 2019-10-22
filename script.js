$(document).ready(function () {
    var timerInstance = new easytimer.Timer();
    var timer = timerInstance;
    timer.start({ countdown: true, startValues: { seconds: 10 } });
    $('#countdownExample .values').html(timer.getTimeValues().toString());
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
    cpt = 0
    $("#addTask").click(function () {
        cpt ++
        var newLi = $("<li>", {
            id : "li" + cpt
        })

        var newIcon = $("<i>", {
            class : "fa fa-trash"
        })


        $("#firstCol").append(newLi)
        $(newLi).append($("#newTask").val())
        $(newIcon).appendTo($(newLi))

        $(newIcon).click(function () {
            $(this).parent().remove();
        });
    })

    $(".fa-trash").click(function () {
        $(this).parent().remove();
    });


    $( function() {
        $( "#firstCol" ).sortable();
        $( "#firstCol" ).disableSelection();
      } );
})