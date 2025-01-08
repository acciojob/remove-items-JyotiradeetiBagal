//your JS code here. If required.

let color=document.getElementById("colorSelect");
let btn=document.getElementsByTagName("input")[0];

btn.addEventListener("click",()=>{
	const selectedIndex = color.selectedIndex; 
	if (selectedIndex >= 0) {
	    color.remove(selectedIndex); 
	} 
	else {
	    alert("No option selected!");
	}
});