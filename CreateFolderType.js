const path = require("path")
const fs = require("fs")
const CopyFile = require("./CopyFile")
const FolderName = require("./CreateFolderName")
const FolderModify = require("./CreateFolderModify")
const FolderSize = require("./CreateFolderSize")
const CreateFolderType = (dirPath, typeArrayOption) => {
    typeArrayOption.map((item, index) => {
        fs.mkdirSync(path.join(dirPath, item), {}, err => {
            if (err) throw err
        })
    })
}
const MoveFileToType = (typeArrayOption, dirPath, dirname) => {
    typeArrayOption.map((item, index) => {
        console.log("hello1");
        switch (item) {
            case "images":
                if (path.extname(dirPath)) {
                    CopyFile(path.join(path.dirname(dirPath), item), item, dirname)
                }
                else {
                    CopyFile(path.join(dirPath, item), item, dirname)
                }
                break;
            case "texts":
                if (path.extname(dirPath)) {
                    CopyFile(path.join(path.dirname(dirPath), item), item, dirname)
                }
                else {
                    CopyFile(path.join(dirPath, item), item, dirname)
                }
                break;
            case "bash":
                if (path.extname(dirPath)) {
                    CopyFile(path.join(path.dirname(dirPath), item), item, dirname)
                }
                else {
                    CopyFile(path.join(dirPath, item), item, dirname)
                }
                break;
            default:
                break;
        }
    })

    typeArrayOption.map((item, index) => {
        console.log("hello");
        switch (item) {
            case "images":
                if (path.extname(dirPath)) {
                    CopyFile(path.join(path.dirname(dirPath), item), item, path.join(path.dirname(dirPath)))

                }
                else {
                    const file = fs.readdirSync(dirPath)
                    file.map((typeItem, index) => {
                        if (path.extname(typeItem)) {
                            CopyFile(path.join(dirPath, item), item, path.join(dirPath))
                        }
                    })
                }
                break;
            case "texts":
                if (path.extname(dirPath)) {
                    CopyFile(path.join(path.dirname(dirPath), item), item, path.join(path.dirname(dirPath)))
                }
                else {
                    const file = fs.readdirSync(dirPath)
                    file.map((typeItem, index) => {
                        if (path.extname(typeItem)) {
                            CopyFile(path.join(dirPath, item), item, path.join(dirPath))
                        }
                    })
                }

                break;
            case "bash":
                if (path.extname(dirPath)) {
                    CopyFile(path.join(path.dirname(dirPath), item), item, path.join(path.dirname(dirPath)))
                }
                else {
                    const file = fs.readdirSync(dirPath)
                    file.map((typeItem, index) => {
                        if (path.extname(typeItem)) {
                            CopyFile(path.join(dirPath, item), item, path.join(dirPath))
                        }
                    })
                }
                break;
            default:
                break;
        }
    })
}
const CreateWithName = (dirPath)=>{
    const file = fs.readdirSync(dirPath)
    for(let i = 0;i<file.length;i++){
        if(file[i] === "node_modules" || path.extname(file[i])===".js" || path.extname(file[i])===".json" || file[i]==="Test"){
            continue;
        }
        else{
            if(!path.extname(file[i])){
                FolderName.CreateAnotherFolderName(path.join(dirPath,file[i]))
            }
        }
    }
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
const CreateWithSize = (dirPath)=>{
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
const CreateWithNameAndModify = (dirPath)=>{
    const file = fs.readdirSync(dirPath)
    for(let i = 0;i<file.length;i++){
        if(file[i] === "node_modules" || path.extname(file[i])===".js" || path.extname(file[i])===".json" || file[i]==="Test"){
            continue;
        }
        else{
            if(!path.extname(file[i])){
                FolderName.CreateWithModify(path.join(dirPath,file[i]))
            }
        }
    }
}
const CreateWithNameAndSize = (dirPath)=>{
    const file = fs.readdirSync(dirPath)
    for(let i = 0;i<file.length;i++){
        if(file[i] === "node_modules" || path.extname(file[i])===".js" || path.extname(file[i])===".json" || file[i]==="Test"){
            continue;
        }
        else{
            if(!path.extname(file[i])){
                FolderName.CreateWithSize2(path.join(dirPath,file[i]))
            }
        }
    }
}
const CreateWithModifyAndSize = (dirPath)=>{
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
module.exports = { CreateFolderType, MoveFileToType,CreateWithName, CreateWithModify, CreateWithSize, CreateWithModifyAndSize, CreateWithNameAndModify, CreateWithNameAndSize}