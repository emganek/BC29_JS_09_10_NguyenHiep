function DanhSachNV() {
    this.arrNV = []
}

// THEM NHAN VIEN-------------------------------
DanhSachNV.prototype.themNV = function (nhanVienMoi) {
    this.arrNV.push(nhanVienMoi);
}

//XOA NHAN VIEN---------------------------------
DanhSachNV.prototype.xoaNV = function (stk) {
    if (this.timNV(stk) != -1) {
        index = this.timNV(stk);
        this.arrNV.splice(index, 1);
    }
    else {
        alert("Không tim thấy nhân viên!")
    }
}

//CAP NHAT MOI THONG TIN NHAN VIEN--------------
DanhSachNV.prototype.capNhatNV = function (nv) {
    index = this.timNV(nv.taiKhoang);
    if (index != -1){
        this.arrNV[index] = nv;
    }
    else {
        alert("Không tim thấy nhân viên!")
    }
}

//TIM NHAN VIEN THEO LOAI------------------------
DanhSachNV.prototype.timLoaiNV = function (keyWord) {
    var searchArr =[]
    this.arrNV.forEach(function(item){
        if (item.xepLoai.toLowerCase().indexOf(keyWord) > -1){
            searchArr.push(item);
        }
    });
    return searchArr;
}

//TIM NV THEO STK TRA VE INDEX TRONG MANG-----------
DanhSachNV.prototype.timNV = function (stk) {
    var result = -1
    for (let i = 0; i < this.arrNV.length; i++) {
        if (stk == this.arrNV[i].taiKhoang) {
            return result = i;
        }
    }
    return result;
}