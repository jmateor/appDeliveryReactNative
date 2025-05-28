const User = require('../models/user');

module.exports = {

    register(req, res) {

        const user = req.body; // Captura ;os datos que me envie el cliente
        User.create(user, (err, data) => {
            
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Usuario registrado correctamente',
                data: data // Aquí puedes enviar el ID del nuevo usuario o cualquier otro dato relevante

        
            });
        });
    }
}