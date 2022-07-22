const fs = require("fs")
const path = require("path")
const process = require("process")
const CheckCommand = require("./CheckCommand")
const FolderType = require("./CreateFolderType")
const FolderName = require("./CreateFolderName")
const FolderSize = require("./CreateFolderSize")
const FolderModify = require("./CreateFolderModify")

const resultArray = process.argv.slice(2)
console.log(resultArray);
if(!CheckCommand(resultArray)){
    return
}
if(resultArray.length >= 6){
    console.log("Quá option chỉ dc 3/4 option");
    return;
}


const typeArray = ["images","texts","bash"]
const typeArrayOption = []
for(let i = 0;i<typeArray.length;i++){
    if(resultArray[2]!== undefined){
        if(resultArray[2].includes(typeArray[i])){
            typeArrayOption.push(typeArray[i])
        }
    }
}
console.log(typeArrayOption)

const dirPath = path.join(__dirname,resultArray[0].slice(2))
// // tạo folder xong
for(let i = 1;i<resultArray.length;i++){
    if(resultArray[i].includes("--type"))
    {
        if(fs.existsSync(dirPath)){
            console.log(dirPath + "Co folder");
            if(path.extname(dirPath)){
                FolderType.CreateFolderType(path.dirname(dirPath),typeArrayOption)
                FolderType.MoveFileToType(typeArrayOption,path.dirname(dirPath),__dirname)
                if(resultArray[resultArray.length-2].includes("--modify") && resultArray[resultArray.length-1].includes("--size")){
                    FolderType.CreateWithModify(path.dirname(dirPath))
                    FolderType.CreateWithModifyAndSize(path.dirname(dirPath))
                }
                else if(resultArray[resultArray.length-2].includes("--name") && resultArray[resultArray.length-1].includes("--size")){
                    FolderType.CreateWithName(path.dirname(dirPath))
                    FolderType.CreateWithNameAndSize(path.dirname(dirPath))
                }
                else  if(resultArray[resultArray.length-2].includes("--name") && resultArray[resultArray.length-1].includes("--modify")){
                    FolderType.CreateWithName(path.dirname(dirPath))
                    FolderType.CreateWithNameAndModify(path.dirname(dirPath))
                }
                else if(resultArray[resultArray.length-1] === '--name'){
                    FolderType.CreateWithName(path.dirname(dirPath))
                }
                else if(resultArray[resultArray.length-1] === '--modify'){
                    FolderType.CreateWithModify(path.dirname(dirPath))
                }
                else{
                    if(resultArray[resultArray.length-1] === '--size'){
                        FolderType.CreateWithSize(path.dirname(dirPath))
                    }
                }
            }
            else{
                FolderType.CreateFolderType(dirPath,typeArrayOption)
                FolderType.MoveFileToType(typeArrayOption,dirPath,__dirname)
                if(resultArray[resultArray.length-2].includes("--modify") && resultArray[resultArray.length-1].includes("--size")){
                    FolderType.CreateWithModify(dirPath)
                    FolderType.CreateWithModifyAndSize(dirPath)
                }
                else if(resultArray[resultArray.length-2].includes("--name") && resultArray[resultArray.length-1].includes("--size")){
                    FolderType.CreateWithName(dirPath)
                    FolderType.CreateWithNameAndSize(dirPath)
                }
                else  if(resultArray[resultArray.length-2].includes("--name") && resultArray[resultArray.length-1].includes("--modify")){
                    FolderType.CreateWithName(dirPath)
                    FolderType.CreateWithNameAndModify(dirPath)
                }
                else if(resultArray[resultArray.length-1] === '--name'){
                    FolderType.CreateWithName(dirPath)
                }
                else if(resultArray[resultArray.length-1] === '--modify'){
                    FolderType.CreateWithModify(dirPath)
                }
                else{
                    if(resultArray[resultArray.length-1] === '--size'){
                        FolderType.CreateWithSize(dirPath)
                    }
                }
            }
        }
        break;
    }
    else if(resultArray[i].includes("--name")){
        if(fs.existsSync(dirPath)){
            console.log(dirPath + "Co folder");
            if(path.extname(dirPath)){
                FolderName.CreateFolderName(path.dirname(dirPath),__dirname)
                if(resultArray[resultArray.length-2].includes("--modify") && resultArray[resultArray.length-1].includes("--size")){
                    FolderName.CreateWithModify(path.dirname(dirPath))
                    FolderName.CreateTwoOption(path.dirname(dirPath))
                }
                else if(resultArray[resultArray.length-1].includes("--modify")){
                    FolderName.CreateWithModify(path.dirname(dirPath))
                }
                else{
                    if(resultArray[resultArray.length-1].includes("--size")){
                        FolderName.CreateWithSize2(path.dirname(dirPath))
                    }
                }
            }
            else{
                FolderName.CreateFolderName(dirPath,__dirname)
                if(resultArray[resultArray.length-2].includes("--modify") && resultArray[resultArray.length-1].includes("--size")){
                    FolderName.CreateWithModify(dirPath)
                    FolderName.CreateTwoOption(dirPath)
                }
                else if(resultArray[resultArray.length-1].includes("--modify")){
                    FolderName.CreateWithModify(dirPath)
                }
                else{
                    if(resultArray[resultArray.length-1].includes("--size")){
                        FolderName.CreateWithSize2(dirPath)
                    }
                }
            }
        }
        break;
    }
    else if(resultArray[i].includes("--modify")){
        if(fs.existsSync(dirPath)){
            console.log(dirPath + "Co folder");
            if(path.extname(dirPath)){
                FolderModify.CreateFolderModify(path.dirname(dirPath),__dirname)
                if(resultArray[resultArray.length-1].includes("--size")){
                    FolderModify.CreateWithSize(path.dirname(dirPath))
                }
            }
            else{
                FolderModify.CreateFolderModify(dirPath,__dirname)
                if(resultArray[resultArray.length-1].includes("--size")){
                    
                    FolderModify.CreateWithSize(dirPath)
                }
            }
        }
        break;
    }
    else{
        if(fs.existsSync(dirPath)){
            console.log(dirPath + "Co folder");
            if(path.extname(dirPath)){
                FolderSize.CreateFolderSize(path.dirname(dirPath),__dirname)
            }
            else{
                FolderSize.CreateFolderSize(dirPath,__dirname)
            }
        }
        break;
    }
}
