const User = require("../modals/UserModal");


module.exports.logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed.' });
        }
        res.status(200).json({ message: 'Logged out successfully.' });
    });
}
module.exports.login =  async (req, res) => {
    try {
        reqUser = req.user;
        res.status(200).json({ message: "Login successful", redirectUrl: "/", user: reqUser });
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ message: "Login failed", redirectUrl: "/login", error: e.message });
    }
}
module.exports.signup = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        const newUser = new User({ name, username, email });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                console.log('Login error after signup:', err);
                return res.status(500).json({ message: "Login after signup failed", redirectUrl: "/login" });
            }
            res.status(200).json({ message: "Signup successful", redirectUrl: "/" });
            console.log('Signup successful');
        });

    } catch (e) {
        console.log(e.message);
        res.status(400).json({ message: "Signup failed", redirectUrl: "/signup", error: e.message });
    }
}

module.exports.success =(req, res) => {
    res.status(200).json({ user: req.user });
}