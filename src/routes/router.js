var router = require('express').Router();

// Route all requests with /surveygroups in the URL to the surveygroups router
router.use('/surveygroups', require('./surveygroups/surveygroupsController'));
// Route all requests with /surveyskills in the URL to the surveyskills router
router.use('/skills', require('./surveyskills/surveyskillsController'));

module.exports = router;