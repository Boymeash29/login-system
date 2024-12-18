<script>
    function checkLogin(form) {
        const username = form.userid.value;
        const password = form.pswrd.value;

        // Define the list of users (replace with server fetch if needed)
        const users = JSON.parse(localStorage.getItem("users")) || [
            { username: "Asher", password: ")bpG!5Ls$w04", role: "Admin", ip: null },
            { username: "Muhammad", password: "&Ji+)1221a47", role: "Admin", ip: null },
            { username: "Theo", password: "xzH46@S@30B", role: "Member", ip: null },
            { username: "Admin", password: "4P3u9$vavq^F", role: "Admin", ip: null }
        ];

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            // Mark user as logged in
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("username", user.username);

            // Update user's IP address
            user.ip = getUserIP(); // Replace with a function to fetch IP
            localStorage.setItem("users", JSON.stringify(users));

            // Redirect based on role
            if (user.role === "Admin") {
                location.replace("admin.html");
            } else {
                location.replace("members/home.html");
            }
        } else {
            alert("Invalid username or password.");
        }
    }

    // Dummy function to fetch IP (replace with actual IP fetching logic)
    function getUserIP() {
        return "192.168.1.1"; // Example IP address
    }
</script>
