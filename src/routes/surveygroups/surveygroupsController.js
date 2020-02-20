var router = require('express').Router();


router.post('/', (req, res) => {
    let body = req.body;
    if (!body.opportunityId || !body.projectId || !body.projectName || !body.projectCreatorId || !body.tsmId) {
        return res.status(400).json({ message: 'Invalid/Insufficient params in request body' });
    }

    // TODO: attempt to save information to database
    // returns 401 if unauthorized
    // returns 409 if survey group already exists
    return res.status(201).header(location, 'http://dummylocation');
});

router.get('/', (req, res) => {
    return res.status(200).json({ surveys: [] });
});

router.get('/:surveyGroupId', (req, res) => {
    let surveyGroupId = req.params.surveyGroupId;
    let returnJson = {
        "id": "f9238beb-9649-4983-9059-4f0ee372d56e",
        "opportunityId": "3456NAS",
        "projectId": "43966",
        "projectName": "NASA App Modernization",
        "projectCreatorId": "janedoe@redhat.com",
        "tsmId": "timmytsm@redhat.com",
        "description": "A project for migrating several JEE applications to OpenShift.",
        "createdDate": "2020-01-29T20:03:26Z",
        "modifiedDate": "2020-02-29T20:03:26Z",
        "employees": 
        [
            {
                "id": "string",
                "startProjectDate": "2020-01-29T20:03:26Z",
                "endProjectDate": "2020-02-29T20:03:26Z",
                "email": "hgranger@redhat.com",
                "role": "Consultant"
            }
        ],
        "skillsUsed": 
        [
        [
                {
                    "id": "d567521f-13a6-4237-936c-40bbbf388bc5",
                    "skill": "Crucial Conversations",
                    "description": "The ability to have cruical conversations with clients.",
                    "category": "leadership"
                }
            ]
        ]
    };

    // TODO: validate if given ID in param is valid and
    // send back DB query result instead of dummy data
    return res.status(200).json(returnJson);
});


module.exports = router;