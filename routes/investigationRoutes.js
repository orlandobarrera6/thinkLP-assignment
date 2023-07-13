const express = require('express');
const router = express.Router();

const investigationController = require('../controllers/investigationController');

router.get('/', investigationController.getAllInvestigations);
router.get('/:investigation_id/timeline', investigationController.getInvestigationTimeline);

module.exports = router;
