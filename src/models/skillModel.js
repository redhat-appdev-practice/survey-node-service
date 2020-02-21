/*  FIELDS
    id: String
    skill: String
    description: String
    category: String
*/

class Skill {
    constructor(id, skill, description, category) {
        this.id = id;
        this.skill = skill;
        this.description = description;
        this.category = category;
    }
}

module.exports = Skill;