/*  FIELDS
    id: String
    startProjectDate: DateString
    endProjectDate: DateString
    email: String
    role: String
*/
class Employee {
    constructor(id, startProjectDate, endProjectDate, email, role) {
        this.id = id;
        this.startProjectDate = startProjectDate;
        this.endProjectDate = endProjectDate;
        this.email = email;
        this.role = role;
    }
}

module.exports = Employee;