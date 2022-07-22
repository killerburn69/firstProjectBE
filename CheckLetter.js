const CheckLetter = (lettter)=>{
    switch(lettter){
        case 'a':
        case 'b':
        case 'c':
        case 'd':
            console.log("tạo file A_D");
            return "A_D"
            
        case 'e':
        case 'f':
        case 'g':
        case 'h':
            console.log("tạo file E_H");
            return "E_H"
        case 'i':
        case 'j':
        case 'k':
        case 'l':
            console.log("tạo file I_L");
            return "I_L"
        case 'm':
        case 'n':
        case 'o':
        case 'p':
            console.log("tạo file M_P");
            return "M_P"
        case 'q':
        case 'r':
        case 's':
        case 't':
            console.log("tạo file Q_T");
            return "Q_T"
        case 'u':
        case 'v':
        case 'w':
        case 'x':
            console.log("tạo file U_X");
            return "U_X"
        case 'y':
        case 'z':
            console.log("tạo file Y_Z");
            return "Y_Z"
        default:
            console.log("còn lại các file khác");
            return "other"
    }
}
module.exports = CheckLetter