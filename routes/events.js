/*
    Rutas de Eventos / events
    host + /api/events
*/

const { Router } = require('express');
const router = Router();
const {
	getEventos,
	crearEvento,
	actualizarEvento,
	eliminarEvento,
} = require('../controllers/events');
const { validarJWT } = require('../middlewars/validar-jwt');

// Todas tienen que pasar por la validación dek JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear eventos
router.post('/', crearEvento);

// Actualizar eventos
router.put('/:id', actualizarEvento);

// Borrar eventos
router.delete('/:id', eliminarEvento);

module.exports = router;
