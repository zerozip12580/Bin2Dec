function trans(){
    let inputvalue = document.getElementById("myInput").value;
    let inputchar = inputvalue.split('');
    let res = 0;

    if(!check(inputchar)){
        return;
    }

    for (let i = 0; i < inputchar.length; i++) {
        res *= 2;
        res += Number(inputchar[i]);
    }
    
    document.getElementById("output").innerHTML = res;
    
}
function check(arr){
    let flag = true;
    if (arr.length > 8) {
        alert("输入过多了哦");
        flag = false;
    }
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] != 0 && arr[index] != 1){
            alert("输入的不是二进制数哦");
            flag = false;
            return flag;
        }
    }
    return flag;
}