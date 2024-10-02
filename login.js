//// login
let apiUser = "http://localhost:3000/user"; // tạo phương thức host lên sever
function login() {
  getUser(hanldeLogin);   
}
// lấy dữ liệu từ database về
function getUser(callback) {// tạo phương thức host lên sever
  fetch(apiUser).then(function (res) {    // hàm truy xuất giá trị của một biểu mẫu
    return res.json().then(callback); 
  });
}
// function xử lí login
function hanldeLogin(data) {  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  data.forEach((data) => {
    if (data.email == email && data.password == password) {// đăng nhập thấy
      alert("Đăng Nhập Thành Công");
      window.location.href = "./index.html";// chuyển trang
    }
  });
}
function signup() {
  handleCreateForm();
}
function createUser(data) {
  // tạo phương thức host lên sever
  fetch(apiUser, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // chuyển đổi đối tượng thành chuỗi
  }).then(function (res) { // hàm truy xuất giá trị của một biểu mẫu
    return res.json();
  });

  if (data) {
    alert("Đăng ký thành công");  
  }
}
function handleCreateForm() {
  let email = document.getElementById("email");//hàm truy xuất giá trị của một biểu mẫu
  let password = document.getElementById("password");
  let user = {
    email: email.value,
    password: password.value,
  };
  // Khi lấy được dữ liệu  trong handleCreateForm thì createUser sẽ POST dữ liệu
  // vào database
  createUser(user);
}
