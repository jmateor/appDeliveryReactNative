const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

module.exports = {

    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        User.findByEmail(email, async (err, myUser) => {
            
            console.log('Error ', err);
            console.log('USUARIO ', myUser);

            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }

            if(!myUser) {
                return res.status(401).json({ // El cliente no está autorizado
                    success: false,
                    message: 'Email no encontrado',
                    error: err
                });
            }

            const isPasswordValid = await bcrypt.compare(password, myUser.password);
            if (isPasswordValid) {
                const token = jwt.sign({id: myUser.id, email: myUser.email}, keys.secretOrKey, {});

                const data = {
                    id: myUser.id,
                    nombre: myUser.nombre,
                    apellido: myUser.apellido,
                    email: myUser.email,
                    telefono: myUser.telefono,
                    imge: myUser.imge,
                    session_token: `JWT ${token}`
                }

                return res.status(201).json({
                    success: true,
                    message: 'Usuario autenticado correctamente',
                    data: data // Aquí puedes enviar el ID del nuevo usuario o cualquier otro dato relevante

                 });
            }
            else {
                return res.status(401).json({ // El cliente no está autorizado
                    success: false,
                    message: 'Contraseña incorrecta'
                });
            }


            
        });
    },

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