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
        // $("#firstCol li:nth-child(2)").hide()

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
    var postData1 = { 'title': $("#newTask").val() }
    // console.log(postData);

    $.get('listTask.php', postData1, function (list) {
        // console.log(list);
        $.each(list, function (i, list) {
            var newIcon = $("<i>", {
                class: "fa fa-trash",
                id: "delete"
            })
            var newLi = $("<li>", {
                id: "li" + cpt
            })
            $.get('deleteTask.php', newIcon, function (del) {
                $.each(del, function (j, del) {

                })
            })
            $(newIcon).click(function () {
                var delIcons = $(this).attr("id");
                var id = delIcons.replace("delete" , "");
                var delId = "#delete" + id;
                var del = $(delId);
                var tassData = {
                    "id" : id ,
                }
                $.post("deleteTask.php" , tassData , function(oDD) {
                    console.log(oDD);
                    console.log(newIcon);
                    
                })

                $(this).parent().remove();
            });

            $("#firstCol").append(newLi)
            $(newLi).append(list)
            $(newIcon).appendTo($(newLi))
        })
    })

    $("#addTask").click(function () {
        cpt++
        var newLi = $("<li>", {
            id: "li" + cpt
        })

        var newIcon = $("<i>", {
            class: "fa fa-trash",
            id: $("[id=taches_id]")
        })


        $("#firstCol").append(newLi)
        $(newLi).append($("#newTask").val())
        var postData = { 'title': $("#newTask").val() }
        $.post('createTask.php', postData, function (resp) {
            console.log(resp);
        });
        $(newIcon).appendTo($(newLi))


        $(newIcon).click(function () {
            $(this).parent().remove();
        });
    })

    // $(".fa-trash").click(function () {
    //     $(this).parent().remove();
    // });

    // $(function(){
    //     $("#firstCol").sortable();
    // })

})