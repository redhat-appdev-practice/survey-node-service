/*  FIELDS
    id: String
    opportunityId: String
    projectId: String
    projectName: String
    projectCreatorId: String
    tsmId: String
    description: String
    createdDate: DateString
    modifiedDate: DateString
    employees: Array, see employeeModel.js for model
    skillsUsed: Array, see skillModel.js for model
*/
let Employee = require('./employeeModel');
let Skill = require('./skillModel');

class SurveyGroup {
    constructor(id, opportunityId, projectId, projectName, projectCreatorId,
        tsmId, description, createdDate, modifiedDate, employees, skillsUsed) {
            this.id = id;
            this.opportunityId = opportunityId;
            this.projectId = projectId;
            this.projectName = projectName;
            this.projectCreatorId = projectCreatorId; 
            this.tsmId = tsmId;
            this.description = description;
            this.createdDate = createdDate;
            this.modifiedDate = modifiedDate;
            this.employees = employees;
            this.skillsUsed = skillsUsed;
        }
}

module.exports = SurveyGroup;