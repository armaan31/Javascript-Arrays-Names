var x = [];
function submit(){
  var n1 = document.getElementById("student1").value;
  var n2 = document.getElementById("student2").value;
  var n3 = document.getElementById("student3").value;
  var n4 = document.getElementById("student4").value;
  x.push(n1, n2, n3, n4);
  document.getElementById("display").innerHTML=x;
  document.getElementById("submitbutton").style.display="none";
  document.getElementById("sortbutton").style.display="inline-block";
}
function sorting(){
    x.sort();
    document.getElementById("display").innerHTML=x;
    document.getElementById("sortbutton").style.display="none";
}
function reset(){
    x=[];
    document.getElementById("display").innerHTML=x;
    document.getElementById("submitbutton").style.display="inline-block";
    document.getElementById("student1").value=null;
    document.getElementById("student2").value=null;
    document.getElementById("student3").value=null;
    document.getElementById("student4").value=null;
}