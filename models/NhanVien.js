function NhanVien(taiKhoang, ten, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam){
    this.taiKhoang = taiKhoang;
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "Chưa xếp loại"
}

// TINH TONG LUONG----------------------
NhanVien.prototype.tinhTongLuong = function(){
    currencyFormat = Intl.NumberFormat("vn-VN");
    if(this.chucVu =="Sếp"){
        this.tongLuong = currencyFormat.format(parseInt(this.luongCoBan) * 3);
    }
    else if (this.chucVu == "Trưởng phòng"){
        this.tongLuong = currencyFormat.format(parseInt(this.luongCoBan) * 2);
    }
    else{
        this.tongLuong = currencyFormat.format(parseInt(this.luongCoBan) * 1);
    }
}

// XEP LOAI NV---------------------------
NhanVien.prototype.xepLoaiNV = function(){
    if (parseFloat(this.gioLam) >= 192){
        this.xepLoai = "Xuất sắc"
    }
    else if(parseFloat(this.gioLam) >= 176){
        this.xepLoai = "Giỏi"
    }
    else if(parseFloat(this.gioLam) >= 160){
        this.xepLoai = "Khá"
    }
    else{
        this.xepLoai = "Trung Bình"
    }
}