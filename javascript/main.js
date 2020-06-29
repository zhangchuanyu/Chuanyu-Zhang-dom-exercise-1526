let title = document.getElementById('tag-line');

let p = document.querySelectorAll(".bg-main-content h2");
let collect = title.textContent+"\n -------------------------------------------"+"\n";
for (var i =0,num =p.length;i<num;i++){
	// console.log("hi");
	// console.log(p[i].textContent);
	collect+="\n"+p[i].textContent;
}
alert(collect);
//task 2

let t2 = document.querySelectorAll(".box");

collect=t2[13].querySelector("h2").textContent+"\n ------------------"+"\n" ;
collect+=t2[13].querySelector("p").textContent;
alert(collect)
