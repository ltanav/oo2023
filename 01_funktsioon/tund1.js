let eesnimi = "Mari";
console.log("Tere, "+eesnimi);

for(let i=0; i<5; i++){
	console.log ("Tere");
}
if (eesnimi=="Mari"){
	console.log("tule minu juurde!");
}
for(let rida=1; rida<=5; rida++){
	let puhver="";
	for(let veerg=1; veerg<=5; veerg++){
		let number=rida*veerg;
		if korrutis<10){
			puhver+=" ";
		}
		puhver+=number+" ";
	}
	console.log(puhver)
}
