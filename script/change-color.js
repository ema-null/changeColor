function toHex(num){
	switch(num%16){
		case 10: return "A";
		case 11: return "B";
		case 12: return "C";
		case 13: return "D";
		case 14: return "E";
		case 15: return "F";

		default: return (num%16).toString();
	}
}

function changeColor() {
	var red = document.getElementById("RED").value;
	var green = document.getElementById("GREE").value;
	var blue = document.getElementById("BLUE").value;
    var hexColor;
    var r="";
    var g="";
    var b="";
    
    do{
    	r = r+toHex(red);
    	red/=16;
    	red = parseInt(red);
    }while(red>16)
    r = r+toHex(red);
    r = r.split('').reverse().join('');
    
    do{
    	g = g+toHex(green);
    	green/=16;
    	green = parseInt(green);
    }while(green>16);
    g = g+toHex(green);
    g = g.split('').reverse().join('');

    do{
    	b = b+toHex(blue);
    	blue/=16;
    	blue = parseInt(blue);
    }while(blue>16);
    b = b+toHex(blue);
    b = b.split('').reverse().join('');

    hexColor = "#"+r+g+b;

	document.getElementById("bckgrd").style.backgroundColor = hexColor;
}

