
// comment 1 dong
/*
comment nhieu dong
*/
/**
 * 
 */












// dfghjk
// fd
// f
// d
// fdsf
// dispatchEventfds
// fdsfds
// fdf
// dispatchEventfdsfds
// f
// dispatchEventfdsfd

// FileSystemds
// fdfd
// screenfd





/*
// Phim tat comment : Ctrl + /

// Khai bao bien
var fullName = 'Tran Van Hung';
var age = 23;

// Goi ham thong bao
alert(fullName);
alert(age);
*/

/*
MOT SO HAM built-in
    1. alert
    2. console              
    3. confirm        
    4. prompt    
    5. set timeout      chay ham sau 1 khoang thoi gian
    6. set interval     chay ham lien tuc sau thoi gian s
 */


/*






TOAN TU TRONG JAVASCRIPT
1.Toán tử số học - Arithmetic
    - Cộng +
    - Trừ -
    - Nhân *
    - Lũy thừa **
    - Chia /
    - Chia lấy số dư %
    - Tăng 1 giá trị số ++
    - Giảm 1 giá trị số --
2.Toán tử gán    - Assignment

Toán tử     Ví dụ       Tương đương
=           x = y       x = y
+=          x += y      x = x + y
-=          x -= y      x = x - y
*=          x *= y      x = x * y
/=          x /= y      x = x / y
**=         x **= y     x = x^y

3.Toán tử so sánh- Comparison

Toán tử
=       Bằng
!=      Không bằng
>       Lớn hơn
<       Nhỏ hơn
>=      Lớn hơn hoặc bằng
<=      Nhỏ hơn hoặc bằng

4.Toán tử logic  - logical
*/

/**
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 * Ngoài 6 giá trị trên thì tất cả để là true
 */

// var hung = 18;

// if (hung <= 20) {
//     console.log('dieu kien dung')
// } else {
//     console.log('dieu kien sai')
// }







/**
 * Toán tử
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

// var a = 1;
// var b = 2;
// var c = 3;

// if ( a > 0 && b > 0 && c > 0 ) {
//     console.log('Dieu kien dung!')
// };

// if ( a > 0 || b < 0 || c < 0) {
//     console.log('Dieu kien dung!')
// };

// if (!( a < 0 )) {
//     console.log("Dieu kien dung!")
// };

/*






Kiểu dữ liệu nguyên trong javascript

1.Kiểu dữ liệu nguyên thủy - Primitive Data
    -Number
    -String
    -Boolean
    -Underfined
    -Null 
    -Symbol

2.Kiểu dữ liệu phức tạp - Complex Data
    - Function
    - Object
 */

// //Number type
// var a = 1;

// //String type
// var fullName = 'Tran Hung';

// //Boolean type
// var isSuccess = true;

// //Underfined type - khai báo mà không gán giá trị
// var age;

// //Null type
// var isNull = null; // nothing-không có gì

// //Symbol type
// var id = Symbol('id'); // unique - tính duy nhất

// //Function
// var myFunction = function() {
//     alert('Tran Van Hung')
// };


// //Object
// var myObject = {
//     name: 'Tran Hung',
//     age: '23',
//     adress: 'Ha Noi',
//     myFunction: function() {

//     }
// };

// var myArray = [
//     'Javascript',
//     'PhP',
//     'Ruby'
// ];   

// //Kiểm tra kiểu dữ liệu
// console.log(typeof a);
// console.log(typeof fullName);

/*






Hàm (Function) trong javascript

1. Hàm?
    - Một khối mã
    - Làm 1 vệc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa

3.Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - có thể trả về 1 giá trị

4. Tạo hàm đầu tiên
*/

// tên hàm có thể có
// a-z A-Z 0-9 _ $  -- không được đưa số lên đầu tiên

// function showDialog() {
//     alert('Trần Văn Hùng')
// };
// showDialog();

/*
Tham số trong hàm

1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private? (Tính riêng tư)
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments? 
    - Đối tượng arguments 
    - Giới thiệu vòng lặp for
*/

// function writeLog(message, message2) {
//     console.log(message)
//     console.log(message2)
// }

// writeLog('Test message' ,'fdagshdj');

// function lietKe() {
//     console.log(arguments)
// }

// lietKe(1,1,1,1,1,1,1,1,1);

// function demSo() {
//     for (var demtu1 of arguments)
//     console.log(demtu1)
// }

// demSo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// function demSo2() {
//     var myString = ''
//     for (var demtu1 of arguments) {
//         myString += `${demtu1} -`
//     }
//     console.log(myString);
    
// }
// demSo2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// return là trả về kết quả

/*
Các loại function
1. Declaration 
function demSo1() {

};

2. Expresstion
var demSo2 = function soTu1() {

}

setTimeout(function soTu1(){

});

var myObject = {
    myFunction: function soTu1(){

    }

};

3.  Arrow
*/






/*
CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
    - backslash in javascript
3. Xem độ dài của chuỗi
4. Chú ý độ dài khi viết Code
    - 1 dòng nên có khoảng 80 ký tự
5. Template string ES6

*/

// var fullName = 'Tran Hung';
// var age = new String('23');

// console.log(typeof fullName);
// console.log(typeof age);

// var job = 'Tran Hung la \'Sieu Nhan\''
// console.log(job);

// console.log(fullName.length);

// var firstName = 'Tran';
// var lastName = 'Hung';
// console.log('Toi la: ' + firstName + ' ' + lastName);
// console.log(`Toi la: ${firstName} ${lastName}`); //Template string ES6






// // LÀM VIỆC VỚI CHUỖI

// var myString = '   Hoc JS tai JS JS F8!   ';

// // 1. Length - kiểm tra độ dài
// console.log(myString.length);

// // 2. Find index - Vị trí của kí tự
// console.log(myString.indexOf('JS')); // tìm kí tự đầu tiên
// console.log(myString.indexOf('JS', 6)); // tìm từ vị trí thứ 6
// console.log(myString.lastIndexOf('JS'));// tìm từ ký từ cuối trở về đầu

// // 3. Cut String
// console.log(myString.slice(4, 6));
// console.log(myString.slice(4));
// console.log(myString.slice(-3, -1));

// // 4. Replace - Thay thế
// console.log(myString.replace('JS', 'Javascript'))
// console.log(myString.replace(/JS/g, 'Javascript'))

// // 5. Convert to upper case - Viết hoa
// console.log(myString.toLocaleUpperCase());

// // 6. Convert to lower case - Viết thường
// console.log(myString.toLocaleLowerCase());

// // 7. Trim - Loại bỏ ký tự khoảng trắng thừa ở 2 đầu
// console.log(myString.trim());

// // 8. Split - cắt 1 chuỗi thành 1 Array
// var languages = 'Javascript, PHP, Ruby';

// console.log(languages.split(', '));
// console.log(languages.split(''));

// // 9. Get a character by index - lấy ký tự bởi index cho trước
// const myString2 = 'Tran Hung';

// console.log(myString2.charAt(7));
// console.log(myString2[7]);



// LAM VIEC VOI SO
// Number.isFinite()	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger()	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat()	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt()	Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed()	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString()	Chuyển đổi và trả về số đã cho dưới dạng chuỗi


/*
Kiểu số (number) trong javascript

1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao
    - Kiểm tra data type

2. Làm việc với Number
    - To string
    - To fixed


    Javascript Number menthor
*/

// var age = 18;
// var PI = 3.14;

// var otherNuber = new Number(9);

// var result = 20 / 'asad';
// console.log(isNaN(age));

// console.log(age.toString());
// console.log(PI.toFixed());
// console.log(PI.toFixed(1));







/*
Mảng trong Javascript - Array

1. Tạo mảng
    - Cách tạo mạng
    - Sử dụng cách nào? Tạo sao?
    - Kiểm tra data type?

2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index

*/

// var languages = [
//     'javascript',
//     'PHP',
//     'Ruby',
//     null,
//     undefined,
//     function () {

//     },
//     1,
//     2,
//     3,
// ];

// console.log(languages);
// console.log(languages.length);
// console.log(Array.isArray(languages));
// console.log(typeof languages);
// console.log(languages[5]);

// var languages2 = new Array(
//     'javascript',
//     'PHP',
//     'Ruby',
//     null,
//     undefined,
//     function () {

//     },
//     1,
//     2,
//     3,
// );
// console.log(languages2)



// LAM VIEC VOI ARRAY

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];

// 1. To String
// console.log(languages.toString());

// 2. Join - đổi thành string rồi thêm ksy tự vào giữa các phần tử
// console.log(languages.join(', '))

// 3. pop - xóa phần tử cuối mảng rồi trả lại phần tủ đã xóa
// console.log(languages.pop());
// console.log(languages);

// 4. Push - thêm phần tử vào cuối mảng
// console.log(languages.push('Dart'));

// console.log(languages);

// console.log(languages.push('Dart', 'Java'));
// console.log(languages);


// 5. Shift - Ngược lại với pop,xóa ở đầu
// console.log(languages.shift());
// console.log(languages);

// 6. UnShift - ngược lại với push,thêm ở đầu
// console.log(languages.unshift('hung'));
// console.log(languages);


// 7. Splicing
// languages.splice(1, 1); //xoa 
// languages.splice(1, 0); // khong xoa
// languages.splice(1, 0, 'Dart'); // (vi tri con tro, soluong muon xoa, muon them vao)
// languages.splice(1, 1, 'Dart'); // 

// 8. Concat -  noi array
// var languages2 = [
//     'hung',
//     'tran'
// ];

// console.log(languages.concat(languages2));


// 9. Slicing - cat phan tu
// console.log(languages.slice(1, 2));
// console.log(languages.slice(0));




// OBJECT TRONG JAVASCRIPT

// var emailKey = 'email';

// var myInfo = {
//   name: 'Tran Hung',
//   age: 18,
//   address: 'Ha Noi, Viet Nam',
//   [emailKey]: 'hung@gmail.com', // them email tu ben ngoai
//   getName: function() {
//       return myInfo.name;
//   }

// };

// // Function --> phuong thuc / method
// // Others --> thuoc tinh / proprety


// var myKey = 'age'

// // myInfo.email = 'tranhung26081999@gmail.com'

// myInfo['ha-ha'] = 'haha'

// // delete myInfo.name; // xoa

// console.log(myInfo);

// console.log(myInfo.getName()); // goi function

// console.log(myInfo[myKey]); // goi myKey tu trong object





// OBJECT constructor

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// };

// var author = new User('Hung', 'Tran', 'Avatar');
// var user = new User('Ngoc', 'Nghia', 'Avatar');

// author.title = 'Hoc lop A4'
// user.comment = 'Hoc lop A1' 

// console.log(author.getName());
// console.log(user);


/* 
    Object prototype - Basic

    1. Prototype la gi?
    2. Su dung khi nao?

*/

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    };
};

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

console.log(User('taan', 'hung'))

// var user1 = new User('Hung', 'Tran', 'Avatar');
// var user2 = new User('Ngoc', 'Nghia', 'Avatar');


// console.log(user1.className);
// console.log(user2.getClassName());



// // Doi tuong Date

// var date = new Date();

// console.log(typeof date); // object

// // var date =Date();

// // console.log(typeof date); // string

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);


/* 
    Math Object

    - Math.PI           --> so pi
    - Math.round()      --> lam tron so
    - Math.abs()        --> Gia tri tuyet doi
    - Math.ceil()       --> Chi lam tron Tren
    - Math.floor()      --> Chi lam tron duoi
    - Math.random()     --> So thap phan no hon 1
    - Math.min()        --> so nho nhat
    - Math.max()        --> so lon nhat
*/

// var random = Math.floor(Math.random() * 5);//random so

// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ];

// console.log(bonus[random]);

// var random2 = Math.floor(Math.random() * 100);

// if (random2 < 10) {
//     console.log("Cuong hoa thanh cong")
// }



// so sánh thì dùng if else
// cho trước giá trị thì dùng switch case ( nếu có từ 3 case trở xuống thì dùng if else)


// Toan tu 3 ngoi

// var course = {
//     name: 'javescript',
//     coin: 250
// }

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coins`);
// // } else {
// //     console.log('Mien phi')
// // }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Mien phi';
// console.log(result);






/*
    VÒNG LẶP - LOOP


1. for - lặp với điều kiện đúng
2. for/in - lặp qua key của đối tượng
3. for/off - lặp qua value của đối tựơng
4. while - Lặp khi điều kiện đúng
. do/While - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

 */

// For loop

// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }




// function a(x) {
//     x++;
//     return function () {
//         console.log(++x);
//     };
// };

// a(1)();
// a(1)();
// a(1)();

// let x = a(1);
// x();
// x();
// x();


// console.log(x)


// function i(f) {
//     h = 10;
//     if (f) {
//         return ++h;
//     }
//     return --h;
// }

// var h = 12;
// i(h > 11 ? false : true);
// console.log(h);