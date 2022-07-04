//Bài 5: Tìm ngày tháng năm
/*
input: ngày, tháng, năm, tạo biến ngày tháng năm hôm trước và hôm sau để lấy giá trị ++
output: ngày, tháng , năm tiếp theo; ngày tháng năm trước đó
process: 
    Ngày hôm qua
    1. 1/3 => log 28/2 + năm
    2. 1/1 => log 1/12 + năm -1
    3. đầu tháng 31 ngày (1,3,5,7,10,12), ko tính tháng 8 => log: 30 + tháng-1 + năm
    4. đầu tháng 8 => log: 31 + 7 + năm
    5. đầu tháng 30 ngày, kể cả tháng 2 => log: 31 + tháng -1 + năm
    6. Ngày bình thường => log: ngày -1 + tháng + năm


    Ngày mai
    1. 31/12 => log: 1/1 + năm+1
    2. 28/2 => log: 1/3 +  năm
    3. Cuối tháng 31 ngày => log: 1 + tháng+1 + năm
    4. Cuối tháng 30 ngày => log: 1 + tháng+1 + năm 
    5. Ngày bình thường => log: ngày+1 + tháng + năm
*/

var date = 30;
var month = 4;
var year = 2022;
var dateBefore = 0;
var monthBefore = 0;
var yearBefore = 0;
var dateAfter = 0;
var monthAfter = 0;
var yearAfter = 0;

//Ngày hôm qua:
//Tháng 3
if(date == 1 && month == 3){
    console.log("Ngày hôm qua:", 28 + "/" + 2 + "/" + year);
//Tháng 1 (ngày 1/1)
} else if (date === 1 && month === 1){
    yearBefore = year;
    yearBefore--;
    console.log("Ngày hôm qua:", 31 + "/" + 12 + "/" + yearBefore);
//Tháng 31 ngày
} else if (date === 1 && month === 5 || date === 1 && month === 7 || date === 1 && month === 10 || date === 1 && month === 12) {
    monthBefore = month;
    monthBefore--;
    console.log("Ngày hôm qua:", 30 + "/" + monthBefore + "/" + year);
//Tháng ko đủ 31 ngày và tháng 8
} else if (date === 1 && month === 2 || date === 1 && month === 4 || date === 1 && month === 6 || date === 1 && month === 9 || date === 1 && month === 11 || date === 1 && month === 8){
    monthBefore = month;
    monthBefore--;
    console.log("Ngày hôm qua:", 31 + "/" + monthBefore + "/" + year);
//Ngày bình thường ko phải đầu tháng
}else{
    dateBefore = date;
    dateBefore--;
    console.log("Ngày hôm qua:", dateBefore + "/" + month + "/" + year);
}


//Ngày mai
//Tháng 12
if (date === 31 && month === 12){
    yearAfter = year++;
    yearAfter++;
    console.log('Ngày mai:', 1 + "/" + 1 + "/" + yearAfter);
//Tháng 2
}else if(date === 28 && month == 2){
    console.log('Ngày mai:', 1 + "/" + 3 + "/" + year);
//Tháng 31 ngày   
}else if(date === 31 && month === 1 || date === 31 && month === 3 || date === 31 && month === 5 || date === 31 && month === 7 || date === 31 && month === 8 || date === 31 && month === 10){
    monthAfter = month;
    monthAfter++;
    console.log('Ngày mai:', 1 + "/" + monthAfter + "/" + year);
//Tháng 30 ngày
}else if(date === 30 && month === 4 || date === 30 && month === 6 || date === 30 && month === 9 || date === 30 && month === 11 ){
    monthAfter = month;
    monthAfter++;
    console.log('Ngày mai:', 1 + "/" + monthAfter + "/" + year);
//Ngày bình thường ko phải cuối tháng
}else{
    dateAfter = date;
    dateAfter++;
    console.log('Ngày mai:', dateAfter + "/" + month + "/" + year);
}


//Bài 6: Cho biết tháng có bao nhiêu ngày, có phải năm nhuận ko?
/*
input:tháng, năm
output: số ngày trong tháng
process: 

    1. Kiểm tra năm nhuận 
    năm chia hết cho 4 và ko chia hết cho 100 => năm nhuận
    năm chia hết cho 100 và chia hết cho 400 => năm nhuận
    năm ko chia hết cho 4 => năm thường
    năm chia hết cho 4 và chia hết cho 100 => năm thường
    2. if (month = 1,3,5,7,8,10,12) => log: tháng có 31 ngày
    3. if (month = 4,6,9,11) => log: tháng có 30 ngày 
    4. if (month = 2 && leapYear = true) => log: tháng có 29 ngày
    else: tháng có 28 ngày

*/

var month2 = 2;
var year2 = 2016;
var isLeapYear = false;
//Kiểm tra năm nhuận

if (year2 % 4 === 0){
  if (year2 % 100 === 0){
    if (year2 % 400 === 0){
      isLeapYear = true; //4: năm chia hết cho 100 và chia hết cho 400 => năm nhuận
    }else{
      isLeapYear = false;//3: năm chia hết cho 100 nhưng ko chia hết cho 400 => năm thường
    }
  }else{
    isLeapYear = true; // 2: năm chia hết cho 4 và ko chia hết cho 100 => năm nhuận
  }
}else{
  isLeapYear = false; //1: năm không chia hết cho 4 => năm thường
}

if (month2 === 1 || month2 === 3 || month2 === 5 || month2 === 7 || month2 === 8 || month2 === 10  || month2 === 12){
  console.log('Tháng',month2 + ' năm '+ year2 + ' có 31 ngày');
} else if (month2 === 4 || month2 === 6 || month2 === 9 || month2 === 11){
  console.log('Tháng',month2 + ' năm ' + year2 + ' có 30 ngày')
} else if (month2 === 2 && isLeapYear == true){
  console.log('Tháng 2 năm', year2+ ' có 29 ngày')
}else{
  console.log('Tháng 2 năm',year2 + ' có 28 ngày')
}


//Bài 7: Đọc số có 3 chữ số
/*
input: số có 3 chữ số, số hàng trăm, số hàng chục, số hàng đơn vị
output: log: số hàng trăm + số hàng chục + số hàng đơn vị
process:
vd:421
  1: Lấy số hàng trăm: number / 100 421 / 100 => 4
  2: Lấy số hàng chục: number % 10  421 % 100 => làm tròn 21/10 => 2
  3: Lấy số hàng đơn vị: number % 100 => 21 % 10 => 1
  4: hundredNumber = số hàng trăm +  trăm
  5: tensNumber = số hàng chục + 'mươi'
  6: unitNumber = số hàng đơn vị
  7: trường hợp chẵn => if number = 400 => log: ('Bốn trăm')
  8: trường hợp hàng chục bằng 1 Vd:411 log=> ('Bốn trăm mười một')
*/

var number = 231;
var hundredNumber = Math.floor(number/ 100);
var tensNumber = Math.floor((number % 100)/10);
var unitNumber = (number%100)%10;
//hàng trăm
if (hundredNumber === 1){
  hundredNumber = 'Một trăm';
} else if (hundredNumber === 2){
  hundredNumber = 'Hai trăm';
} else if (hundredNumber === 3){
  hundredNumber = 'Ba trăm';
}else if (hundredNumber === 4){
  hundredNumber = 'Bốn trăm';
}else if (hundredNumber === 5){
  hundredNumber = 'Năm trăm';
}else if (hundredNumber === 6){
  hundredNumber = 'Sáu trăm';
}else if (hundredNumber === 7){
  hundredNumber = 'Bảy trăm';
}else if (hundredNumber === 8){
  hundredNumber = 'Tám trăm';
}else{
  hundredNumber = 'Chín trăm';
}


//hàng chục
if(tensNumber === 0){
  tensNumber = 'lẻ';
}else if(tensNumber === 1){
  tensNumber = 'mười';
}else if(tensNumber === 2){
  tensNumber = 'hai mươi';
}else if(tensNumber === 3){
  tensNumber = 'ba mươi';
}else if(tensNumber === 4){
  tensNumber = 'bốn mươi';
}else if(tensNumber === 5){
  tensNumber = 'năm mươi';
}else if(tensNumber === 6){
  tensNumber = 'sáu mươi';
}else if(tensNumber === 7){
  tensNumber = 'bảy mươi';
}else if(tensNumber === 8){
  tensNumber = 'tám mươi';
}else{
  tensNumber = 'chín mươi';
}

//hàng đơn vị
if(unitNumber === 0){
  unitNumber = '';
}else if(unitNumber === 1){
  unitNumber = 'mốt';
}else if(unitNumber === 2){
  unitNumber = 'hai';
}else if(unitNumber === 3){
  unitNumber = 'ba';
}else if(unitNumber === 4){
  unitNumber = 'bốn';
}else if(unitNumber === 5){
  unitNumber = 'năm';
}else if(unitNumber === 6){
  unitNumber = 'sáu';
}else if(unitNumber === 7){
  unitNumber = 'bảy';
}else if(unitNumber === 8){
  unitNumber = 'tám';
}else{
  unitNumber = 'chín';
}


//Cách đọc
if (number === 100){
  console.log('Một trăm');
}else if (number === 200){
  console.log('Hai trăm');
}else if (number === 300){
  console.log('Ba trăm');
}else if (number === 400){
  console.log('Bốn trăm');
}else if (number === 500){
  console.log('Năm trăm');
}else if (number === 600){
  console.log('Sáu trăm');
}else if (number === 700){
  console.log('Bảy trăm');
}else if (number === 800){
  console.log('Tám trăm');
}else if (number === 900){
  console.log('Chín trăm');
}else if (number === 111){
  console.log('Một trăm mười một');
}else if (number === 211){
  console.log('Hai trăm mười một');
}else if (number === 311){
  console.log('Ba trăm mười một');
}else if (number === 411){
  console.log('Bốn trăm mười một');
}else if (number === 511){
  console.log('Năm trăm mười một');
}else if (number === 611){
  console.log('Sáu trăm mười một');
}else if (number === 711){
  console.log('Bảy trăm mười một');
}else if (number === 811){
  console.log('Tám trăm mười một');
}else if (number === 911){
  console.log('Chín trăm mười một');
}else{
  console.log(hundredNumber + ' ' +tensNumber + ' ' + unitNumber);
}



//Bài tập 8: Cho biết toạ độ, tìm khoảng cách và so sánh
/*
input: toạ độ x1 x2 x3, y1 y2 y3, x0 y0
output: khoảng cách d1 d2 d3; if d1 > d2 > d3  => sv 1 xa nhất, tương tự sv 2 3
process: 
  1: tính khoảng cách d bằng công thức Math.sqrt(Math.pow((x1-x0),2)+Math.pow((y1-y0),2))
  2: if d1 > d2 > d3  => sv 1 xa nhất, tương tự sv 2 3
*/

x1 = 292;//toạ độ sv 1
y1 = 101;
x2 = 553;//toạ độ sv 2
y2 = 922;
x3 = 494;//toạ độ sv 3
y3 = 884;
x0 = 50; //toạ độ trường dh
y0 = 100;
d1 = Math.sqrt(Math.pow((x1-x0),2)+Math.pow((y1-y0),2));
d2 = Math.sqrt(Math.pow((x2-x0),2)+Math.pow((y2-y0),2));
d3 = Math.sqrt(Math.pow((x3-x0),2)+Math.pow((y3-y0),2));

// console.log(d1,d2,d3) //Kiểm tra giá trị d1 d2 d3
if (d1 > d2 && d2 > d3 || d1 > d3 && d3 > d2){ //d1 > d2 > d3 || d1 > d3 > d2
  console.log('Sinh viên 1 xa trường nhất');
} else if (d2 > d1 && d1 > d3 || d2 > d3 && d3 > d1){ //d2 > d1 > d3 || d2 > d3 > d1
  console.log('Sinh viên 2 xa trường nhất');
} else{
  console.log('Sinh viên 3 xa trường nhất');
}