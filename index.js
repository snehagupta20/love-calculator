document.getElementById("submitbtn").onclick=function(){
    alertfunc()
};

function alertfunc(){
    var num=Math.floor(Math.random()*100)+1;
    alert("your Love percentage is: "+num+"%");
}

