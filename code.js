function odliczanie() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();

    document.getElementById("watch").innerHTML =
        today + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;

    setTimeout("odliczanie()", 1000);
}


