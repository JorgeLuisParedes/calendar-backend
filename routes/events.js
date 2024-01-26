/*
    Rutas de Eventos / events
    host + /api/events
*/

const { Router } = require('express');
const {
	getEventos,
	crearEventos,
	actualizarEvento,
	eliminarEvento,
} = require('../controllers/events');
const router = Router();

// Todas tienen que pasar por la validación del JWT
// Obtener eventos
router.get('/', getEventos);

// Crear eventos
router.post('/', crearEventos);

// Actualizar eventos
router.put('/:id', actualizarEvento);

// Borrar eventos
router.delete('/:id', eliminarEvento);

module.exports = router;
