function check(form) {
    let username = ["Asher", "Muhammad", "Theo"];
    let password = [")bpG!5Ls$w04", "&Ji+)1221a47", "xzH46@S@30B"];

    for (let i = 0; i < username.length; i++) {
        if (form.userid.value === username[i] && form.pswrd.value === password[i]) {
            // Store login status
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", username[i]); // Store the logged-in username

            // Redirect based on user role
            if (username[i] === "Asher" || username[i] === "Muhammad") {
                location.replace("admin.html"); // Redirect admins to admin panel
            } else {
                location.replace("memebers/home.html"); // Redirect regular users to home
            }
            return;
        }
    }

    alert("Incorrect Username or Password");
}
