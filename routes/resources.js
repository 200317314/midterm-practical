// Our router module
const router = require('express').Router();

// Our controller
const metaHumansController = require('../controllers/metaHumansController');

// Your routes
router.get(`/new`, metaHumansController.new);
router.get(`/`, metaHumansController.index);
router.get(`/:id`, metaHumansController.show);
router.post(`/`, metaHumansController.create);
router.get(`/:id/edit`, metaHumansController.edit);
router.post(`/update`, metaHumansController.update);
router.post(`/destroy`, metaHumansController.destroy);

// We have to export our changes
module.exports = router;