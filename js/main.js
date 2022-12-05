// Panic Function

function panic(str){
    if(str.split(" ").length > 1){
        let stringArr = str.toUpperCase().split(" ")
        stringArr.push("!")
        return stringArr.join(" 😱 ")
    }else{
        let stringArr = str.toUpperCase().split("")
        stringArr.push("!")
        return stringArr.join("")
    }
}