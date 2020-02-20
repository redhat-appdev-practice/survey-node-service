var router = require('express').Router();

router.get('/', (req, res) => {
    return res.status(200).json({ surveys: [] });
});

router.post('/', (req, res) => {
    let body = req.body;
    if (!body.opportunityId || !body.projectId || !body.projectName || !body.projectCreatorId || !body.tsmId) {
        return res.status(400).json({ message: 'Invalid/Insufficient params in request body' });
    }

    // TODO: attempt to save information to database
    // returns 401 if unauthorized
    // returns 409 if survey group already exists
    return res.status(201).header(location, 'http://dummylocation/');
});

router.get('/:surveyGroupId/employees', (req, res) => {
    let surveyGroupId = req.params.surveyGroupId;
    // TODO: Fetch employees from survey represented by surveyGroupId
    // from DB and return
    // return 400 if no survey with ID surveyGroupId was found in DB
    res.status(200).json({ employees: [] });
});

router.post('/:surveyGroupId/employees', (req, res) => {
    let surveyGroupId = req.params.surveyGroupId;
    let employeeArray = req.body;
    if (!Array.isArray(employeeArray)) {
        return res.status(400).json({ message: 'Invalid request body' });
    }

    for (var employee in employeeArray) {
        if (!employee.email || !employee.role) {
            return res.status(400).json({ message: 'Employee does not exist. Check params' });
        }
    }

    // TODO: lookup survey group from DB by surveyGroupId
    // and update employees list
    // return 404 if employee was not found or if survey 
    // doesn't exist
    return res.status(200).json({ message: 'Employees successfully updated' }); 
});

router.get('/:surveyGroupId/submissions', (req, res) => {
    let surveyGroupId = req.params.surveyGroupId;
    
    // TODO: Return submissions (using models/submissionModel.js) associated
    // with survey represented by surveyGroupId
    // return 404 if no survey with ID surveyGroupId was found
    let dummySurveySubmissions = [
        {
            "id": "f1ad7649-eb70-4499-9c82-a63fe2c6dc71",
            "surveyAuthorId": "9169105a-92eb-4a40-b07c-ac58ead69ea3",
            "targetOfSurveyId": "e3357750-1329-430b-95c1-8d773ad6ac16",
            "projectId": "f9238beb-9649-4983-9059-4f0ee372d56e",
            "submissionDate": "2020-02-29T20:03:26Z",
            "ratings": 
            [
                    {
                        "skill": "Openshift",
                        "rating": 0
                    }
            ],
            "feedback": "John was a pleasure to work with and extremely knowledgeable in REST."
        }
    ];

    return res.status(200).json(dummySurveySubmissions);
});

router.post('/:surveyGroupId/submissions', (req, res) => {
    let surveyGroupId = req.params.surveyGroupId;
    let body = req.body;

    if (!body.surveyAuthorId || !body.targetOfSurveyId || !body.projectId || !body.ratings) {
        return res.status(400).json({ message: 'Request was invalid. Check request params' });
    }

    // TODO: Save supplied request body parameters as a new submission for survey
    // identified by surveyGroupId. Follow models/submissionModel.js for submission
    // schema
    // returns 403 if author of submission is not allowed to submit to this survey group
    // returns 404 if employee or survey group does not exist

    return res.status(200).json({ message: 'Submission successfully saved' });
});

router.get('/:surveyGroupId', (req, res) => {
    let surveyGroupId = req.params.surveyGroupId;
    let dummySurveyGroup = {
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
    // following model in models/surveyGroupModel.js
    return res.status(200).json(dummySurveyGroup);
});

router.put('/:surveyGroupId', (req, res) => {
    let body = req.body;
    let surveyGroupId = req.params.surveyGroupId;
    if (!body.opportunityId || !body.projectId || !body.projectName || !body.projectCreatorId || !body.tsmId) {
        return res.status(400).json({ 'message': 'Missing required fields' });
    }

    // TODO: Update the database entry identified by surveyGroupId
    // with information provided in request body following model in
    // models/surveyGroupModel.js
    return res.status(200).json({ message: 'Success' });
});

module.exports = router;