var t = 0;

function NameFunction() {
t = document.getElementById("category").value;
console.log(t);
}
	
function searchFunction() {
// Declare variables
	var input, filter, table, tr, td, i, txtValue, t;
	input = document.getElementById("search");
	filter = input.value.toUpperCase();
	table = document.getElementById("CodeDB");
	cat = document.getElementById("cat");
	tr = table.getElementsByTagName("tr");
	t = document.getElementById("category").value;
// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[t];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} 
			else {
				tr[i].style.display = "none";
			}
		}
	}
}