const path = require("path")
const fs = require("fs")
const CheckModify = require("./CheckModify")
const FolderSize = require("./CreateFolderSize")
const CreateFolderModify = (dirPath, dirname)=>{
    const getLetterFromMain = fs.readdirSync(dirname)
    getLetterFromMain.map((item, index)=>{
        switch(path.extname(item)){
            case "":
            case ".json":
            case ".js":
                break;
            default:
                const dateModify = fs.statSync(path.join(dirname,item))
                const getLetterDay = CheckModify(dateModify.mtime)
                if(!fs.existsSync(path.join(dirPath,getLetterDay))){
                    fs.mkdirSync(path.join(dirPath,getLetterDay))
                }
                fs.copyFileSync(path.join(dirname,item), `${dirPath}\\${getLetterDay}\\${item}`)
                // console.log(`${item} ${dateModify.mtime.getDate()}/${dateModify.mtime.getMonth()+1}/${dateModify.mtime.getFullYear()}`)
                // console.log(CheckModify(dateModify.mtime));
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
                const dateModify = fs.statSync(path.join(dirPath,item))
                const getLetterDay = CheckModify(dateModify.mtime)
                if(!fs.existsSync(path.join(dirPath,getLetterDay))){
                    fs.mkdirSync(path.join(dirPath,getLetterDay))
                }
                fs.copyFileSync(path.join(dirPath,item), `${dirPath}\\${getLetterDay}\\${item}`)
                // console.log(`${item} ${dateModify.mtime.getDate()}/${dateModify.mtime.getMonth()+1}/${dateModify.mtime.getFullYear()}`)
                // console.log(CheckModify(dateModify.mtime));
                break;
        }
    })
}
const CreateWithSize = (dirPath) =>{
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
const CreateAnotherFolderModify = (dirPath)=>{
    fs.readdirSync(dirPath).map((item, index)=>{
        const dateModify = fs.statSync(path.join(dirPath,item))
        const getLetterDay = CheckModify(dateModify.mtime)
        if(!fs.existsSync(path.join(dirPath,getLetterDay))){
            fs.mkdirSync(path.join(dirPath,getLetterDay))
        }
        fs.renameSync(path.join(dirPath,item), `${dirPath}\\${getLetterDay}\\${item}`)
        // console.log(`${item} ${dateModify.mtime.getDate()}/${dateModify.mtime.getMonth()+1}/${dateModify.mtime.getFullYear()}`)
        // console.log(CheckModify(dateModify.mtime));
    })
}
module.exports = {CreateFolderModify,CreateWithSize,CreateAnotherFolderModify}