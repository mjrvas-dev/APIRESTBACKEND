export const register = (req, res) => {
    console.log(req.body);
    res.json({ok: 'register'});
}

export const login = (req, res) => {
    res.json({ok: 'login'});
}
