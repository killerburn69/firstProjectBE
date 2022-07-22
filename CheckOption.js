const CheckOption = (input) =>{
    if(input.indexOf("--type")===-1 && input.indexOf("--name")===-1 && input.indexOf("--modify")===-1 && input.indexOf("--size")===-1){
        return false
    }
    return true
}
module.exports = CheckOption