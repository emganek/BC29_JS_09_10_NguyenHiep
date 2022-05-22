//KIỂM TRA ĐỘ DÀI HỢP LỆ CỦA INPUT
function lengthLitmit(input, output, min, max){
    if (input.trim().length < min || input.trim().length > max) {
        output.innerHTML =  `(*) Vui lòng nhập từ ${min} đến ${max} ký tự`;
        output.style.display =  "block";
        return true;
    }
    output.style.display =  "none";
    return false;
}

//KIỂM TRA CÓ NẰM TRONG KHOẢNG HỢP LỆ CỦA INPUT
function rangeLitmit(input, output, min, max){
    if (parseFloat(input) < min || parseFloat(input) > max) {
        output.innerHTML =  `(*) Vui lòng nhập trong khoảng từ ${min} đến ${max}`;
        output.style.display =  "block";
        return true;
    }
    output.style.display =  "none";
    return false;
}
//KIỂM TRA INPUT EMPTY
function isEmpty(input,output){
    if (input.trim() ===""){
        output.innerHTML =  `(*) Vui lòng nhập thông tin`;
        output.style.display =  "block";
        return true;
    }
    output.style.display =  "none";
    return false;
}

//KIỂM TRA OPTION CHỌN VALID
function isOpInvalid(input, output, value){
    if (input.selectedIndex == value){
        output.innerHTML =  `(*) Vui lòng thay đổi lựa chọn`;
        output.style.display =  "block";
        return true;
    }
    output.style.display =  "none";
    return false;
}

//KIỂM TRA TRONG TÊN CÓ SỐ HAY KHÔNG?
function isAnyNumber (input, output){
    pattern = /\d|[-+={},_`~<>./<>?:";[\]|\\'!@#$%^&*()]/g;
    if (pattern.test(input)){
        output.innerHTML =  `(*) Vui lòng không chứa số hoặc ký tự đặc biệt`;
        output.style.display =  "block";
        return true;
    }
    else{
        output.style.display =  "none";
        return false;
    }
}

//KIỂM TRA ĐỊNH DẠNG EMAIL INVALID
function isEmailInValid(input, output){
    pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!pattern.test(input)){
        output.innerHTML =  `(*) Email không đúng vui lòng nhập lại`;
        output.style.display =  "block";
        return true;
    }
    else{
        output.style.display =  "none";
        return false;
    }
}

//KIỂM TRA ĐỊNH DẠNG DATE INVALID
function isDateInValid(input, output){
    pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    if (!pattern.test(input)){
        output.innerHTML =  `(*) Định dạng ngày tháng phải là mm/dd/yyyy`;
        output.style.display =  "block";
        return true;
    }
    else{
        output.style.display =  "none";
        return false;
    }
}

//KIỂM TRA MẬT KHẨU INVALID
function isPassInValid(input, output){
    pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (!pattern.test(input)){
        output.innerHTML =  `(*) Mật khẩu phải chứa ít nhất 1 số, 1 ký tự đặt biệt,1 chữ in hoa`;
        output.style.display =  "block";
        return true;
    }
    else{
        output.style.display =  "none";
        return false;
    }
}

//KIỂM TRA STK IS PRESENT
function isPresent(input, inputArr ,output){
    for (let i = 0; i < inputArr.length; i++){
        if (input == inputArr[i].taiKhoang){
            output.innerHTML =  `(*) Tài khoảng đã tồn tại`;
            output.style.display =  "block";
            return true;
        }
    }
    output.style.display =  "none";
    return false;
}