const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.generateToken = async (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) return res.status(400).json({ message: 'userName and password required' });

    // Check if the user and password are valid (karena ga ada database user, kita anggap userName = "admin" dan password = "password" sebagai valid)
    if (userName !== 'admin' || password !== 'password') {
        return res.status(401).json({ message: 'Invalid userName or password' });
    }
    const payload = { userName };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ token });
};
