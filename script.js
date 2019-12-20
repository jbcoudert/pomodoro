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
        // $.get('updateTask.php', )
        $("#middleCol").append(transfert)

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

// CREATE TASK 

    cpt=0

    
    
    $("#addTask").click(function () {
        var newLi = $("<li>", {
            
        })
    
        var newIcon = $("<i>", {
            class: "fa fa-trash",
        })
         
        $("#firstCol").append(newLi)   
        newLi.append($("#newTask").val())
        var postData = { 'title': $("#newTask").val() }

        $.post('createTask.php', postData, function (data) {
            console.log(postData);
            newIcon.attr("id", data[0])

        });
        newIcon.appendTo(newLi)


        $(newIcon).click(function () {
            $(this).parent().remove();
        });
    })

// LIST TASK

    var getData1 = { 'title': $("#newTask").val() }

    $.get('listTask.php', getData1, function (listTask) {
    //     // console.log(list);
        $.each(listTask, function (i, listTask) {
            var newIcon = $("<i>", {
                class: "fa fa-trash",
                id: listTask["id"]
            })
            var newLi = $("<li>", {
                id: listTask["id"]
            })
            $("#firstCol").append(newLi)
            $(newLi).append(listTask["name"])
            $(newIcon).appendTo($(newLi))
            $(newIcon).click(function () {
                var delIcons = $(this).attr("id");
                var idData = {"id" : delIcons}
                var liToDelete = $(this).parent();
                $.post("deleteTask.php" , idData , function(del) {
                    liToDelete.remove();
                })
                // $(this).parent().remove()
            });
        })
    })

    //     $("#firstCol").sortable();

})