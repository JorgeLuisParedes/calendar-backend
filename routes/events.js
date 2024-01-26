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
const { check } = require('express-validator');
const { validarCampos } = require('../middlewars/validar-campos');
const { isDate } = require('../helpers/isDate');

// Todas tienen que pasar por la validación dek JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear eventos
router.post(
	'/',
	[
		check('title', 'El titulo es obligatorio').not().isEmpty(),
		check('start', 'Fecha de inicio es obligatoria').custom(isDate),
		check('end', 'Fecha de finalización es obligatoria').custom(isDate),
		validarCampos,
	],
	crearEvento,
);

// Actualizar eventos
router.put(
	'/:id',
	[
		check('title', 'El titulo es obligatorio').not().isEmpty(),
		check('start', 'Fecha de inicio es obligatoria').custom(isDate),
		check('end', 'Fecha de finalización es obligatoria').custom(isDate),
		validarCampos,
	],
	actualizarEvento,
);

// Borrar eventos
router.delete('/:id', eliminarEvento);

module.exports = router;
