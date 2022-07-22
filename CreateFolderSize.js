const path = require("path")
const fs = require("fs")
const CheckSize = require("./CheckSize")
const CreateFolderSize = (dirPath,dirname)=>{
    const getLetterFromMain = fs.readdirSync(dirname)
    getLetterFromMain.map((item,index)=>{
        switch(path.extname(item)){
            case "":
            case ".json":
            case ".js":
                break;
            default:
                const getSize = fs.statSync(path.join(dirname,item)).size
                const getLetterSize = CheckSize(getSize)
                // console.log(getLetterSize);
                if(!fs.existsSync(path.join(dirPath,getLetterSize))){
                    fs.mkdirSync(path.join(dirPath,getLetterSize))
                }
                fs.copyFileSync(path.join(dirname,item), `${dirPath}\\${getLetterSize}\\${item}`)
                break;
        }
    })
    fs.readdirSync(dirPath).map((item,index)=>{
        switch(path.extname(item)){
            case "":
            case ".json":
            case ".js":
                break;
            default:
                const getSize = fs.statSync(path.join(dirPath,item)).size
                const getLetterSize = CheckSize(getSize)
                // console.log(getSize);
                if(!fs.existsSync(path.join(dirPath,getLetterSize))){
                    fs.mkdirSync(path.join(dirPath,getLetterSize))
                }
                fs.copyFileSync(path.join(dirPath,item), `${dirPath}\\${getLetterSize}\\${item}`)
                break;
        }
    })
}

const CreateAnotherFolderSize = (dirPath)=>{
    fs.readdirSync(dirPath).map((item,index)=>{
        const getSize = fs.statSync(path.join(dirPath,item)).size
        const getLetterSize = CheckSize(getSize)
        // console.log(getSize);
        if(!fs.existsSync(path.join(dirPath,getLetterSize))){
            fs.mkdirSync(path.join(dirPath,getLetterSize))
        }
        fs.renameSync(path.join(dirPath,item), `${dirPath}\\${getLetterSize}\\${item}`)
       
    })
}

module.exports = {CreateFolderSize, CreateAnotherFolderSize}