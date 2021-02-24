const data = require('./data.json');
const skills = require('./skills.json');
const education = require('./education.json');
const idiomas = require('./idiomas.json');
const experiences = require('./experiences.json');

module.exports = function (site) {
    site.get('/', function (req, res) {
        res.render('index', { data, skills, education, idiomas, experiences });
    })
};