function clickexample(){
	document.getElementById("mouseclick").style.backgroundColor="blanchedalmond";
	document.getElementById("mouseclick").innerHTML="You have clicked on me!";
}

function mouseon(){
	document.getElementById("mouseover").style.backgroundColor="blanchedalmond";
	document.getElementById("mouseover").innerHTML="Cursor is hovering over me!";
}

function mouseout(){
	document.getElementById("mouseover").style.backgroundColor="ivory";
	document.getElementById("mouseover").innerHTML="Cursor is not hovering over me!";
}

function mouseup(){
	document.getElementById("mousehold").style.backgroundColor="blanchedalmond";
	document.getElementById("mousehold").innerHTML="Mouse has been clicked, but not being held!";
}

function mousedown(){
	document.getElementById("mousehold").style.backgroundColor="blanchedalmond";
	document.getElementById("mousehold").innerHTML="Mouse is being clicked and held!";
}

function dbclickexample(){
	document.getElementById("dbclickex").innerHTML="You spawned a sentence by double clicking on the button above!";
}

function reg_expr(){
    let text="Mistborn: The Final Empire was written by Brandon Sanderson!";
    let n=text.search(/i/i);
    document.getElementById("p1").innerHTML="Brandon Sanderson is the number "+n+" author in the world!";
    }

function reg_expr1(){
    let text=document.getElementById("demo1").innerHTML;
    document.getElementById("demo1").innerHTML=text.replace(/Brandon Sanderson/i,"Sarah J Mass");
    }