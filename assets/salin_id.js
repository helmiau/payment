
function SalinAku(TextToCopy) {
	var TempText = document.createElement("input");
	TempText.value = TextToCopy;
	
	prompt("Akun atas nama Helmi Amirudin, silahkan salin informasi dibawah ini", TempText.value);
	/* Notifikasi */
	/* alert("Teks disalin: " + TempText.value); */
}