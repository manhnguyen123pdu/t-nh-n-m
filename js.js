function chay() {
    let year = + document.querySelector('#year').value;
    let a = year % 10;
    let b = year % 12;
    let can;
    let chi;
    switch (a) {
        case 0:
            can = 'Canh';
            break;
        case 1:
            can = 'Tân';
            break;
        case 2:
            can = 'Nhâm';
            break;
        case 3:
            can = 'Quý';
            break;
        case 4:
            can = 'Giáp';
            break;
        case 5:
            can = 'Át';
            break;
        case 6:
            can = 'Bính';
            break;
        case 7:
            can = 'Đinh';
            break;
        case 8:
            can = 'Mậu';
            break;
        case 9:
            can = 'Kỷ';
            break;
    }
    switch (b) {
        case 0:
            chi = 'Thân';
            break;
        case 1:
            chi = 'Dậu';
            break;
        case 2:
            chi = 'Tuất';
            break;
        case 3:
            chi = 'Hợi';
            break;
        case 4:
            chi = 'Tý';
            break;
        case 5:
            chi = 'Sử';
            break;
        case 6:
            chi = 'Dần';
            break;
        case 7:
            chi = 'Mão';
            break;
        case 8:
            chi = 'Thìn';
            break;
        case 9:
            chi = 'Tị';
            break;
        case 10:
            chi = 'Ngọ';
            break;
        case 11:
            chi = 'Mùi';
            break;
    }

  alert(can+" "+chi)

}