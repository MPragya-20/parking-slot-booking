
$(document).ready(function(){
    $(".animate1").animate({
        left: '45%',
        transition:'3s',
    });
});

$(document).ready(function(){
    $(".animate2").animate({
        left: '45%',
        transition:'3s',
    });
});


function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

function display(){
  var fname = document.getElementById("fname").value;
  var v_name = document.getElementById("v_name").value;
  if (document.getElementById("slot").value === ""){
    document.write("No slot selected!!<br>Booking failed!!");
  }
  else{
    document.writeln("<h3 style=\"margin:60px;\"> Hello <strong><i>"+fname+"</i></strong>, you have successfully booked your slot !!<br><br>Your vehicle information is as below: <br><br> Vehicle name : "+v_name+"<br>Vehicle number : "+document.getElementById("v_no").value+"<br><br> Slot booked : "+document.getElementById("slot").value+"<br><br><br> Thank you for choosing us!!</h2>");
  }
}
function check_back(){
  if (window.back() == true){
    window.location.reload();
  }
}