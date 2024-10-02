// function : từ khóa khai báo biên
// sum : tên hàm
// a,b : tham số của hàm
// return : trả về , thoát khỏi hàm, những lệnh sai return sẽ không được chạy
// {} code block : khối lệnh
// camel : let numer0fStudent = 49;
//pascal : let munber_of_student =40;

function sum(a,b){
    let result = 0
    result = a + b
    return result
}
//từ khóa dùng để khai báo biến 
//sum (1,5): gọi hàm sum truyền hàm số a=1, b=5
let result = sum(1,5)
//document
//.
// writeln 
//'' : string template
document.writeln(`<h1 style="color:red">ket qua cua ham sum là : ${result}</h1>`)

let j =10 //j =10
let i =1 ; // i =1 
//j = i++ ; //gán trước , tăng gán
j = ++i ; // gán sau, gán trước 

document.writeln(`<h1 stuyle="color:red">i=:${i}<h1>`) //11 1 2
document.writeln(`<h1 stuyle="color:red">j=:${j}<h1>`) //1 11 1

//=: lệnh gán
//==: lệnh so sánh bằng : tự động đưa về cùng LDK rồi so sánh
// ===: lệnh so sánh bằng : khác LDK thì cho sai
let a ='101'
let b = 101
ì(a===b){
    //alert('EQUAL')
}else{
    //alert(NOT EQUA')
}

let number = Number.rarseInt("11",2)
document.writeln(`<h1 stuyle="color:red">number=:${number}<h1>`)

    