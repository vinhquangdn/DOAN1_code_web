const firebaseConfig = {
  apiKey: "AIzaSyBAXXjs6KlcqrQp9ZC937i7uIqRlUowlIk",
  authDomain: "do-an-1-a1cfd.firebaseapp.com",
  projectId: "do-an-1-a1cfd",
  storageBucket: "do-an-1-a1cfd.appspot.com",
  messagingSenderId: "940604666616",
  appId: "1:940604666616:web:c9908ea9b5cefb8900810d",
  measurementId: "G-QQQ41KH7LR"
};
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

//---------------------------------------------btn cam bien 1------------------------------------------------
//lệnh xét xem có giá trị firebase không
firebase.database().ref("/He_thong_chong_trom/Phong_1/Btn_cb1").get().then((snapshot) => {
//lệnh if nay dung de reset lai mach khi reload lại page
  if(snapshot.exists())
  {
      console.log("Receive data");
      firebase.database().ref("/He_thong_chong_trom/Phong_1").update({
      "Btn_cb1": "0"});
  }
else
  {
      console.log("No data available!");
      firebase.database().ref("/He_thong_chong_trom/Phong_1").update({
      "Btn_cb1": "0"});
  }
})

var count_btn1 = 0;
function func_sen1(){
  count_btn1 +=1;
  //alert(count_btn1);
  if(count_btn1 %2 == 1)
      {
        //lệnh update dữ liệu lên firebase thông qua web
        firebase.database().ref("/He_thong_chong_trom/Phong_1").update({
        "Btn_cb1": "1" })
        document.getElementById("ledsensor1_img").src = "./image/led1_on.png"
      }
  else
      {
  
        firebase.database().ref("/He_thong_chong_trom/Phong_1").update({
        "Btn_cb1": "0" })
        document.getElementById("ledsensor1_img").src = "./image/led_off.png"
      }
}
  document.getElementById("btnsen1_js").addEventListener("click",func_sen1); //khi click nút nhân sẽ kích hoạt hàm func_sen1

//lệnh dùng để lấy dữ liệu từ firebase về để web hoạt động
firebase.database().ref("/He_thong_chong_trom/Phong_1/Btn_cb1").on("value",function(snapshot){
var btnsen1_status = snapshot.val()
if (btnsen1_status == "1") 
  {
      if(count_btn1 %2 == 0)
      {
        count_btn1 +=1;
      }
      document.getElementById("ledsensor1_img").src = "./image/led1_on.png";
  }  
else if(btnsen1_status == "0")
  {
      if(count_btn1 %2 == 1)
      {
        count_btn1 -=1;
      }
      document.getElementById("ledsensor1_img").src = "./image/led_off.png";
  }
});

//---------------------------------------------btn cam bien 2------------------------------------------------
firebase.database().ref("/He_thong_chong_trom/Phong_2/Btn_cb2").get().then((snapshot) => {
if(snapshot.exists())
  {
      console.log("Receive data");
      firebase.database().ref("/He_thong_chong_trom/Phong_2").update({
      "Btn_cb2": "0"});
  }
else
  {
      console.log("No data available!");
      firebase.database().ref("/He_thong_chong_trom/Phong_2").update({
      "Btn_cb2": "0"});
  }
})

var count_btn2 = 0;
function func_sen2(){
  count_btn2 +=1;
  //alert(count_btn2);
  if(count_btn2 %2 == 1)
      {
        
        firebase.database().ref("/He_thong_chong_trom/Phong_2").update({
        "Btn_cb2": "1" })
        document.getElementById("ledsensor2_img").src = "./image/led2_on.png"
      }
  else
      {
        
        firebase.database().ref("/He_thong_chong_trom/Phong_2").update({
        "Btn_cb2": "0" })
        document.getElementById("ledsensor2_img").src = "./image/led_off.png"
      }
}
  document.getElementById("btnsen2_js").addEventListener("click",func_sen2);


firebase.database().ref("/He_thong_chong_trom/Phong_2/Btn_cb2").on("value",function(snapshot){
var btnsen2_status = snapshot.val()
if (btnsen2_status == "1") 
  {
      if(count_btn2 %2 == 0)
      {
        count_btn2 +=1;
      }
      document.getElementById("ledsensor2_img").src = "./image/led2_on.png";
  }  
else
  {
      if(count_btn2 %2 == 1)
      {
        count_btn2 -=1;
      }
      document.getElementById("ledsensor2_img").src = "./image/led_off.png";
  }
});
//---------------------------------------------btn chuong------------------------------------------------
firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom/Btn_tbbt").get().then((snapshot) => {
if(snapshot.exists())
  {
      console.log("Receive data");
      firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
      "Btn_tbbt": "0"});
  }
else
  {
      console.log("No data available!");
      firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
      "Btn_tbbt": "0"});
  }
})

var count_btnchuong = 0;
function func_chuong(){
  count_btnchuong +=1;
  //alert(count_btnchuong);
  if(count_btnchuong %2 == 1)
      {
  
        firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
        "Btn_tbbt": "1" })
        document.getElementById("ledchuong_img").src = "./image/ledchuong_on.png"
      }
  else
      {
  
        firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
        "Btn_tbbt": "0" })
        document.getElementById("ledchuong_img").src = "./image/led_off.png"
      }
}
  document.getElementById("btnchuong_js").addEventListener("click",func_chuong);


firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom/Btn_tbbt").on("value",function(snapshot){
var btnchuong_status = snapshot.val()
if (btnchuong_status == "1") 
  {
      if(count_btnchuong %2 == 0)
      {
          count_btnchuong +=1;
      }
      document.getElementById("ledchuong_img").src = "./image/ledchuong_on.png";
  }  
else
  {
      if(count_btnchuong %2 == 1)
      {
          count_btnchuong -=1;
      }
      document.getElementById("ledchuong_img").src = "./image/led_off.png";
  }
});
//---------------------chuong, led canh bao------------------------------------------------
//lenh reset chuong khi reload page
firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom/Chuong_canh_bao").get().then((snapshot) => {
if(snapshot.exists())
  {
      console.log("Receive data");
      firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
      "Chuong_canh_bao": "0"});
  }
else
  {
      console.log("No data available!");
      firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
      "Chuong_canh_bao": "0"});
  }
})
//lenh lay du lieu tu firebase
firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom/Chuong_canh_bao").on("value",function(snapshot){
var chuong_status = snapshot.val()
if (chuong_status == "1") 
  {
      document.getElementById("alarm_img").src = "./image/gifmaker_me alarm.gif";
  }  
else
  {
      document.getElementById("alarm_img").src = "./image/alarm_off.png";
  }
});
//lenh reset led warn khi reload page
firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom/Led_canh_bao").get().then((snapshot) => {
if(snapshot.exists())
  {
      console.log("Receive data");
      firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
      "Led_canh_bao": "0"});
  }
else
  {
      console.log("No data available!");
      firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom").update({
      "Led_canh_bao": "0"});
  }
})
//lenh lay du lieu tu firebase
firebase.database().ref("/He_thong_chong_trom/Thiet_bi_bao_trom/Led_canh_bao").on("value",function(snapshot){
var ledwarn_status = snapshot.val()
if (ledwarn_status == "1") 
  {
      document.getElementById("ledwarn_img").src = "./image/gifmaker_me.gif";
  }  
else
  {
      document.getElementById("ledwarn_img").src = "./image/led_off.png";
  }
});
    
