var router = require('express').Router();

router.get('/', (req, res) => {
    // TODO return all available skills from DB
    
    let dummySkills = [
        {
            'id': 'd567521f-13a6-4237-936c-40bbbf388bc5',
            'skill': 'Crucial Conversations',
            'description': 'The ability to have cruical conversations with clients.',
            'category': 'leadership'
        }
    ];

    return res.status(200).json(dummySkills);
});

module.exports = router;