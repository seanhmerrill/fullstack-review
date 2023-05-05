const users = [
    {
        username: "Sean",
        password: "Merrill"
    },
];

module.exports = {
    login: (req,res) => {
        console.log(req.body);
        const user = users.filter(user => user.username === req.body.username)
        if (user[0].password === req.body.password){
            res.status(200).send("Login success!")
        }
        else {
            res.sendStatus(401)
        }
    }
}