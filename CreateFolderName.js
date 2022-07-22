const path = require("path")
const fs = require("fs")
const CheckLetter = require("./CheckLetter")
const FolderModify = require("./CreateFolderModify")
const FolderSize = require("./CreateFolderSize")
const CreateFolderName = (dirPath,dirname) => {
    const getLetterFromMain = fs.readdirSync(dirname)
    getLetterFromMain.map((item,index)=>{
        switch(path.extname(item)){
            case "":
            case ".json":
            case ".js":
                break;
            default:
                if(!fs.existsSync(path.join(dirPath,CheckLetter(item.toLowerCase().slice(0,1))))){
                    fs.mkdirSync(path.join(dirPath,CheckLetter(item.toLowerCase().slice(0,1))))
                }
                fs.copyFileSync(path.join(dirname,item), `${dirPath}\\${CheckLetter(item.toLowerCase().slice(0,1))}\\${item}`)
                break;
        }
    })
    fs.readdirSync(dirPath).map((item, index)=>{
        switch(path.extname(item)){
            case "":
            case ".json":
            case ".js":
                break;
            default:
                if(!fs.existsSync(path.join(dirPath,CheckLetter(item.toLowerCase().slice(0,1))))){
                    fs.mkdirSync(path.join(dirPath,CheckLetter(item.toLowerCase().slice(0,1))))
                }
                fs.copyFileSync(path.join(dirPath,item), `${dirPath}\\${CheckLetter(item.toLowerCase().slice(0,1))}\\${item}`)
                break;
        }
    })
}
const CreateWithModify = (dirPath)=>{
    const file = fs.readdirSync(dirPath)
    for(let i = 0;i<file.length;i++){
        if(file[i] === "node_modules" || path.extname(file[i])===".js" || path.extname(file[i])===".json" || file[i]==="Test"){
            continue;
        }
        else{
            if(!path.extname(file[i])){
                FolderModify.CreateAnotherFolderModify(path.join(dirPath,file[i]))
            }
        }
    }
}
const CreateWithSize2 = (dirPath)=>{
    const file = fs.readdirSync(dirPath)
    for(let i = 0;i<file.length;i++){
        if(file[i] === "node_modules" || path.extname(file[i])===".js" || path.extname(file[i])===".json" || file[i]==="Test"){
            continue;
        }
        else{
            if(!path.extname(file[i])){
                FolderSize.CreateAnotherFolderSize(path.join(dirPath,file[i]))
            }
        }
    }
}
const CreateTwoOption = (dirPath) =>{
    const file = fs.readdirSync(dirPath)
    for(let i = 0;i<file.length;i++){
        if(file[i] === "node_modules" || path.extname(file[i])===".js" || path.extname(file[i])===".json" || file[i]==="Test"){
            continue;
        }
        else{
            if(!path.extname(file[i])){
                FolderModify.CreateWithSize(path.join(dirPath,file[i]))
            }
        }
    }
}
const CreateAnotherFolderName = (dirPath)=>{
    fs.readdirSync(dirPath).map((item, index)=>{
        if(!fs.existsSync(path.join(dirPath,CheckLetter(item.toLowerCase().slice(0,1))))){
            fs.mkdirSync(path.join(dirPath,CheckLetter(item.toLowerCase().slice(0,1))))
        }
        fs.renameSync(path.join(dirPath,item), `${dirPath}\\${CheckLetter(item.toLowerCase().slice(0,1))}\\${item}`)
    })
}
module.exports = {CreateFolderName,CreateWithModify, CreateWithSize2, CreateTwoOption, CreateAnotherFolderName}

