const fs = require("fs")
const path = require("path")
const CopyFile = (fileDirec,type, dirname) => {
    const file = fs.readdirSync(dirname)
    file.map((item,index)=>{
        switch(path.extname(item)){
            case '.jpg':
            case '.png':
            case '.jpeg':
            case '.gif':
            case '.ai':
            case '.psd':
                if(type === "images"){
                    fs.copyFileSync(path.join(dirname,item),path.join(`${fileDirec}`,`${item}`))
                }
                break;
            case ".txt":
            case ".pdf":
            case ".docx":
                if(type === "texts"){
                    fs.copyFileSync(path.join(dirname,item),path.join(`${fileDirec}`,`${item}`))
                }
                break;
            case ".sh":
                if(type === "bash"){
                    fs.copyFileSync(path.join(dirname,item),path.join(`${fileDirec}`,`${item}`))
                }
                break;
            default:
                break;
        }
    })
}
module.exports = CopyFile