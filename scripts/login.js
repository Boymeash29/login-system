function check(form) {
    username = new Array("Asher", "Muhammad", "Theo", "Will", "Kavi", "Haroon", "Arnav", "Sohan");
    password = new Array(")bpG!5Ls$w04", "&Ji+)1221a47", "xzH46@S@30B", "8#dJj1vDft.9", "4z`DN46[x1W8", "a}O,v2N|w%82", "~e98qf4~nK67", "0F7fl9BIs!7r");

	if(form.userid.value == username[0] && form.pswrd.value == password[0]||form.userid.value == username[1] && form.pswrd.value == password[1]) {
		location.replace('memebers/home.html')/* The Administrator homepage */
	}
	else if(form.userid.value == username[2] && form.pswrd.value == password[2]||form.userid.value == username[3] && form.pswrd.value == password[3]||form.userid.value == username[4] && form.pswrd.value == password[4]||form.userid.value == username[5] && form.pswrd.value == password[5]||form.userid.value == username[6] && form.pswrd.value == password[6]||form.userid.value == username[7] && form.pswrd.value == password[7]||form.userid.value == username[8] && form.pswrd.value == password[8]) {
		location.replace('memebers/home.html')/* The members homepage */
	}
	else if(form.userid.value == username[0]||form.userid.value == username[1]||form.userid.value == username[2]) {
		alert("Incorrect Password")
	}
	else {
		alert("Incorrect Username or Password")
	}
}
