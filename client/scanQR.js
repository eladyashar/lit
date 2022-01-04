
$("#cameraIconFrame").click(function()  {
    $("#reader").css("display", "block");
    $("#cameraIconFrame").click(function() {
        $("#reader").css("display", "none");
    })
})

$("#userIcon").click(function () {
    window.location.href = "./score.html";
})