/*  FIELDS
    id: String
    surveyAuthorId: String
    targetOfSurveyId: String
    projectId: String
    submissionDate: DateString
    ratings: Array, see ratingModel.js for model
    feedback: String
*/
let Rating = require('./ratingModel');

class Submission {
    constructor(id, surveyAuthorId, targetOfSurveyId, projectId, 
        submissionDate, ratings, feedback) {
            this.id = id;
            this.surveyAuthorId = surveyAuthorId;
            this.targetOfSurveyId = targetOfSurveyId;
            this.projectId = projectId;
            this.submissionDate = submissionDate;
            this.ratings = ratings;
            this.feedback = feedback;
    }
}

module.exports = Submission;