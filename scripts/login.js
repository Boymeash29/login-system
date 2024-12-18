function check(form) {
    let username = ["Asher", "Muhammad", "Theo"];
    let password = [")bpG!5Ls$w04", "&Ji+)1221a47", "xzH46@S@30B"];

    // Check if username and password match
    for (let i = 0; i < username.length; i++) {
        if (form.userid.value === username[i] && form.pswrd.value === password[i]) {
            // Store login status in localStorage
            localStorage.setItem("isLoggedIn", "true");
            // Redirect to home.html
            location.replace("memebers/home.html");
            return;
        }
    }

    // If no match, show an error message
    alert("Incorrect Username or Password");
}
