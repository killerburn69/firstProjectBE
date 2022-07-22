const CheckSize = (size)=>{
    if(size < 10*1024){
        return "Tiny"
    }
    else if(size >= 10*1024 && size < 1024*1024){
        return "Small"
    }
    else if(size >= 1024*1024 && size < 5*1024*1024){
        return "Medium"
    }
    else if(size >= 5*1024*1024 && size < 10*1024*1024){
        return "Big"
    }
    else{
        return "Very big"
    }
}
module.exports = CheckSize