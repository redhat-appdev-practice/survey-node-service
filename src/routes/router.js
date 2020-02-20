var router = require('express').Router();

router.use('/surveygroups', require('./surveygroups/surveygroupsController'));
router.use('/skills', require('./surveyskills/surveyskillsController'));

module.exports = router;