function check() {
    var fileList = document.getElementById("sFiles").files;
    var list = "";
    for(var i=0; i<fileList.length; i++){
    list += "[" + fileList[i].size + " bytes]" + fileList[i].name + "<br>";
    }
    document.getElementById("result").innerHTML = list;
}