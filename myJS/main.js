var danhSachNV = new DanhSachNV();
var tBody = getEleID("tableDanhSach");

function getEleID(id) {
    return document.getElementById(id);
}

// INIT--------------------------------------
getLocalStorage();

// TÀI KHOẢNG VALIDATION----------------------------
function isTKValid(tk, tkID, dsArr,isNewFlag) {
    if (isEmpty(tk, tkID)) {
        return false;
    }
    else if (lengthLitmit(tk, tkID, 4, 6)) {
        return false;
    }
    else if (isNewFlag){
        if(isPresent(tk,dsArr,tkID)){
            return false;
        }
    }
    return true;
}

// TÊN NV VALIDATION----------------------------
function isNVValid(nv, nvID) {
    if (isEmpty(nv, nvID)) {
        return false;
    }
    else if (isAnyNumber(nv, nvID)){
        return false;
    }
    return true;
}

// EMAIL VALIDATION----------------------------
function isEmailValid(mail, mailID) {
    if (isEmpty(mail, mailID)) {
        return false;
    }
    else if(isEmailInValid(mail, mailID)){
        return false;
    }
    return true;
}

// MẬT KHẨU VALIDATION-------------------------
function isPassValid(pass, passID) {
    if (isEmpty(pass, passID)) {
        return false;
    }
    else if (lengthLitmit(pass, passID, 6, 10)) {
        return false;
    }
    else if (isPassInValid(pass, passID)){
        return false
    }
    return true;
}

// NGÀY LÀM VALIDATION-------------------------
function isNLValid(nl, nlID) {
    if (isEmpty(nl, nlID)) {
        return false;
    }
    else if (isDateInValid(nl, nlID)){
        return false;
    }
    return true;
}

// LƯƠNG VALIDATION-------------------------
function isLuongValid(luong, luongID) {
    if (isEmpty(luong, luongID)) {
        return false;
    }
    else if (rangeLitmit(luong, luongID, 1000000, 20000000)) {
        return false;
    }
    return true;
}

// CHỨC VỤ VALIDATION-------------------------
function isRoleValid(role, roleID) {
    if (isOpInvalid(role, roleID, 0)) {
        return false;
    }
    return true;
}

// GIỜ LÀM VALIDATION-------------------------
function isWorkingTimeValid(work, workID) {
    if (isEmpty(work, workID)) {
        return false;
    }
    else if (rangeLitmit(work, workID, 80, 200)) {
        return false;
    }
    return true;
}

//CLEAR INPUT-----------------------------------
function clearInput(eleID) {
    eleID.value = "";
}

// GET INFO FROM INPUT----------------------------
function getInput(isNew) {

    var taiKhoang = getEleID("tknv").value;
    var ten = getEleID("name").value;
    var email = getEleID("email").value;
    var matKhau = getEleID("password").value;
    var ngayLam = getEleID("datepicker").value;
    var luongCoBan = getEleID("luongCB").value;
    var chucVu = getEleID("chucvu").value;
    var gioLam = getEleID("gioLam").value;

    var temp1 = isTKValid(taiKhoang, getEleID("tbTKNV"), danhSachNV.arrNV, isNew);
    var temp2 = isNVValid(ten, getEleID("tbTen"));
    var temp3 = isEmailValid(email, getEleID("tbEmail"));
    var temp4 = isPassValid(matKhau, getEleID("tbMatKhau"));
    var temp5 = isNLValid(ngayLam, getEleID("tbNgay"));
    var temp6 = isLuongValid(luongCoBan, getEleID("tbLuongCB"));
    var temp7 = isRoleValid(getEleID("chucvu"), getEleID("tbChucVu"));
    var temp8 = isWorkingTimeValid(gioLam, getEleID("tbGiolam"));

    if (temp1 && temp2 && temp3 && temp4 && temp5 && temp6 && temp7 && temp8) {
        var nhanVien = new NhanVien(taiKhoang, ten, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam)
        nhanVien.tinhTongLuong();
        nhanVien.xepLoaiNV();
        return nhanVien;
    }
    else {
        return false;
    }
}

//CLICK VAO NUT THEM NHAN VIEN----------------------
getEleID("btnThem").onclick = function(){
    clearInput(getEleID("tknv"));
    clearInput(getEleID("name"));
    clearInput(getEleID("email"));
    clearInput(getEleID("password"));
    clearInput(getEleID("datepicker"));
    clearInput(getEleID("luongCB"));
    getEleID("chucvu").selectedIndex = 0;
    clearInput(getEleID("gioLam"));
    getEleID("tknv").disabled = false;
    getEleID("btnCapNhat").style.display = "none"
}


//CLICK VAO NUT THEM--------------------------------
getEleID("btnThemNV").onclick = function () {
    if (getInput(true) != false) {
        themHandler(danhSachNV);
        taoBang(danhSachNV.arrNV);
        setLocalStorage();
        clearInput(getEleID("tknv"));
        clearInput(getEleID("name"));
        clearInput(getEleID("email"));
        clearInput(getEleID("password"));
        clearInput(getEleID("datepicker"));
        clearInput(getEleID("luongCB"));
        getEleID("chucvu").selectedIndex = 0;
        clearInput(getEleID("gioLam"));
    }
}

//CLICK VAO CAP NHAT-------------------------------
getEleID("btnCapNhat").onclick = function () {
    if (getInput(false) != false) {
        danhSachNV.capNhatNV(getInput(false));
        taoBang(danhSachNV.arrNV);
        setLocalStorage();
        clearInput(getEleID("tknv"));
        clearInput(getEleID("name"));
        clearInput(getEleID("email"));
        clearInput(getEleID("password"));
        clearInput(getEleID("datepicker"));
        clearInput(getEleID("luongCB"));
        getEleID("chucvu").selectedIndex = 0;
        clearInput(getEleID("gioLam"));
        getEleID("tknv").disabled = false;
        getEleID("btnCapNhat").style.display = "none"
    }
}

// TẠO BẢNG------------------------------------------
function taoBang(arrNV) {
    tBody.innerHTML = ""
    for (let i = 0; i < arrNV.length; i++) {
        tBody.innerHTML += `
                <tr>
                    <td>${arrNV[i].taiKhoang}</td>
                    <td>${arrNV[i].ten}</td>
                    <td>${arrNV[i].email}</td>
                    <td>${arrNV[i].ngayLam}</td>
                    <td>${arrNV[i].chucVu}</td>
                    <td>${arrNV[i].tongLuong}</td>
                    <td>${arrNV[i].xepLoai}</td>
                    <td>
                        <button id="editBtn_${arrNV[i].taiKhoang}" class="btn btn-primary" onclick='editHandler(${arrNV[i].taiKhoang},danhSachNV)' data-toggle="modal" data-target="#myModal">Edit</button>
                        <br>
                        <button id="deleteBtn_${arrNV[i].taiKhoang}" class="btn btn-danger mt-2" onclick='xoaHandler(${arrNV[i].taiKhoang},danhSachNV)'>Delete</button>
                    </td>
                </tr>
             `
    }
}


// TAI XUONG LOCAL STORAGE---------------------------
function setLocalStorage() {
    localStorage.setItem("mangNV", JSON.stringify(danhSachNV.arrNV));
}

//GET DATA TU LOCAL STORAGE---------------------------
function getLocalStorage() {
    if (localStorage.getItem("mangNV") != "" && localStorage.getItem("mangNV") != null) {
        danhSachNV.arrNV = JSON.parse(localStorage.getItem("mangNV"));
        taoBang(danhSachNV.arrNV);
    }
}

//THEM HANDLER--------------------------------
function themHandler(danhSach) {
    danhSach.themNV(getInput(true));
}
//XOA HANDLER----------------------------------
function xoaHandler(stk, dsNV) {
    dsNV.xoaNV(stk);
    taoBang(dsNV.arrNV);
    setLocalStorage();
}
//EDIT HANDLER---------------------------------
function editHandler(stk, dsNV) {
    index = dsNV.timNV(stk)
    getEleID("tknv").value = dsNV.arrNV[index].taiKhoang;
    getEleID("name").value = dsNV.arrNV[index].ten;
    getEleID("email").value = dsNV.arrNV[index].email;
    getEleID("password").value = dsNV.arrNV[index].matKhau;
    getEleID("datepicker").value = dsNV.arrNV[index].ngayLam;
    getEleID("luongCB").value = dsNV.arrNV[index].luongCoBan;
    getEleID("chucvu").value = dsNV.arrNV[index].chucVu;
    getEleID("gioLam").value = dsNV.arrNV[index].gioLam;
    getEleID("tknv").disabled = true;
    getEleID("btnCapNhat").style.display = "block"
};

// TIM KIEM NHHAN VIEN THEO LOAI----------------
getEleID("searchName").addEventListener("keyup", function(){
    taoBang(danhSachNV.timLoaiNV(getEleID("searchName").value));
});