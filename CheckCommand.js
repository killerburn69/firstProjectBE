const CheckType = require("./CheckType")
const CheckOption = require("./CheckOption")
const path =require("path")
const fs = require("fs")
const { isBuffer } = require("util")
const CheckCommand = (input) => {
    const Nothing = input[4] == undefined && input[3] == undefined && input[2] == undefined && input[1] == undefined && input[0] == undefined
    if (Nothing) {
        console.log("Không có yêu cầu nào cả. Mời nhập lại");
        return false
    }
    //Kiểm tra nhập chỉ có file
    const wrongFile = input[0].indexOf(".") === -1
    if (wrongFile) {
        console.log("Sai cách nhập file or folder.Mời nhập lại")
        return false
    }
    const pathDoesNotExits = fs.existsSync(`${__dirname}${input[0].slice(1)}`)
    if(!pathDoesNotExits){
        console.log("Đường dẫn ko có");
        return false
    }
    //input là một file ./
    const Check = input[0].split('/')
    const CheckFileOrFolder = input[4] == undefined && input[3] == undefined && input[2] == undefined && input[1] == undefined && (Check.includes("") || Check.includes("") == false)
    if (CheckFileOrFolder) {
        console.log("Chưa có điều kiện để thực hiện. Nhập lại")
        return false
    }
    else {
        for (let i = 1; i < input.length; i++) {
            if(input.includes("--")){
                if (!CheckOption(input[i])) {
                    console.log("một option bị sai. Yêu cầu rà soát lại" + " " + input[i])
                    return false
                    // break;
                }
            }
            // else{
            //     if(!CheckType(input[i]) && input[i].includes("--type")){
            //         console.log("type chưa có điều kiện. vui lòng nhập")
            //         return false
            //     }
            // }
        }
        if(input[1].includes('--type') && !CheckType(input[2])){
            console.log("type chưa có điều kiện. vui lòng nhập")
            return false
        }
    }
    return true
}
module.exports = CheckCommand
