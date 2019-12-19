$(document).ready(function () {
    var timerInstance = new easytimer.Timer();
    var timer = timerInstance;
    timer.start({ countdown: true, startValues: { seconds: 2 } });
    $('#countdownExample .values').html(timer.getTimeValues().toString());
    $('#start').click(function () {
        timer.start({ countdown: true, startValues: { seconds: 2 } });
        $('#countdownExample .values').html(timer.getTimeValues().toString());
        timer.addEventListener('secondsUpdated', function (e) {
            $('#countdownExample .values').html(timer.getTimeValues().toString());

        });
        
        var transfert = $("<li>")
        transfert = $("#firstCol li:nth-child(2)")
        $("#middleCol").append(transfert)
        // $("#firstCol li:nth-child(2)").hide() ggg

        $("#middleCol").append($(transfert))
        
    })

    $('#pause').click(function () {
        timer.pause();
    })

    timer.addEventListener('targetAchieved', function (e) {
        $('#countdownExample .values').html('KABOOM!!');
        var transfert = $("<li>")
        transfert = $("#middleCol li:nth-child(5)")
        $("#lastCol").append(transfert)
        
    });

    cpt = 0

    var postData = {'title': $("#newTask").val()}
    
    $.get('listTask.php', postData, function (list) {
        var newLi = $("<li>", {
            id : "li" + cpt
        })
        console.log(list);
        $.each(list, function(i, list) {
            $("#firstCol").append(newLi)
            $(newLi).append(list)
        })
    })

    $("#addTask").click(function () {
        cpt ++
        var newLi = $("<li>", {
            id : "li" + cpt
        })

        var newIcon = $("<i>", {
            class : "fa fa-trash"
        })


        // $("#firstCol").append(newLi)
        // $(newLi).append($("#newTask").val())
        $.post('createTask.php',postData, function(resp) {
            console.log(resp);  
        });
        $(newIcon).appendTo($(newLi))
            

        $(newIcon).click(function () {
            $(this).parent().remove();
        });
    })

    $(".fa-trash").click(function () {
        $(this).parent().remove();
    });

    // $(function(){
    //     $("#firstCol").sortable();
    // })

})