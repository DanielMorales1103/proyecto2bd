const express = require('express');
const neo4jDriver = require('../config/neo4jConfig');
const router = express.Router();

router.post('/login', async (req, res) => {serv
  const { email, password } = req.body;
  const session = neo4jDriver.session();

  try {
    const result = await session.run(
      'MATCH (u:Usuario {Correo_Electronico: $email, Password: $password}) RETURN u',
      { email, password }
    );

    const user = result.records[0]?.get('u').properties;
    
    if (!user) {
      return res.status(404).send('Usuario o Contraseña incorrectos');
    }

    res.status(200).send({ message: 'Login Exitoso', user });
  } catch (error) {
    res.status(500).send(error.message);
  } finally {
    await session.close();
  }
});

module.exports = router;
