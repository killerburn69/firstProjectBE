const CheckType = (input) =>{
    const typeArray = ["images","texts","bash"]
    const typeArrayOption = []
    for(let i = 0;i<typeArray.length;i++){
        if(input.includes(typeArray[i])){
            typeArrayOption.push(typeArray[i])
        }
    }
    if(typeArrayOption.length === 0){
        return false
    }
    return true
}
module.exports = CheckType