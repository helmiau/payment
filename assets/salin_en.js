function SalinAku(TextToCopy) {
	var TempText = document.createElement("input");
	TempText.value = TextToCopy;
	
	prompt("Account name: Helmi Amirudin, Please copy information below manually", TempText.value);
	/* Notifikasi */
	/* alert("Teks disalin: " + TempText.value); */
}