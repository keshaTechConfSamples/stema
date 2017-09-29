/*
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 *
 *
 * @author Kesha Williams
 *
 * Source code for Google Assistant Stema Action
 */
exports.stemaHttp = function stemaHttp (req, res) {

    // Get the field and date from the request
    var field = '';
    var defaultOn = false;
    var woman = "Keysha Williams, is a software engineer and a Java instructor with the University of California. As a young girl, she believed that computers would soon control the world, so she wanted to be the one to control the computers.";

    var science = ["Dr. Kimberly Holloway, is a Translational Breast Cancer Researcher at the Matthew Ellis laboratory at Baylor College of Medicine. She focuses on generating new and optimizing current treatment strategies for patients across the breast cancer spectrum.",
                   "Alexa Siega is a data scientist. A data scientist is proficient at statistics, coding, and analysis and uses those skills to uncover relationships in data.",
                   "Dr. Michelle Tong, is a Systems Neuroscientist. She is a professor at Earlham College. A systems Neuroscientist examines the nervous system at many levels, trying to figure out how genes and proteins affect perception and behavior."];
    var tech = ["Keysha Williams, is a software engineer and a Java instructor. As a young girl, she believed that computers would soon control the world, so she wanted to be the one to control the computers.",
                "Edaena Salinas, is a software engineer. She has been coding since she was in high school. She finds being a programmer rewarding because she is able to design systems and see them come to life.",
                "Ieesha Dotson, is an Information Systems Manager and leads a team of computer programmers. She was inspired by her mother to enroll in her first programming course, C++."];
    var engineer = ["Amelia Gould, is the Head of Engineering at BAE Systems. Her advice to young women is to keep an open mind, there are far more options out there than you could believe and don’t be afraid to stretch yourself – you are more able than you think.",
                    "Abbi Fisher, is a Digital Engineer. On a day to day basis, she generates 3D design solutions for all matter of problems. Her advice to young women is to absorb as many opportunities as you can, because you never know what you'll discover you're passionate about.",
                    "Tokiwa Smith, is a Chemical Engineer and stem educator. She chose to get a degree in chemical engineering because her favorite stem discipline is chemistry and she's very good at math."];
    var math = ["Maria Chudnovsky, is a graph theory mathematician. Her work is somewhere between solving a crossword puzzle and making a painting. It's about pure logic and pure aesthetics.",
                "Jeanne Gang, is an architect. Jeanne designed the Aqua Tower in downtown Chicago.  Architecture is, at its core, an artistic representation of math.",
                "Trachette Jackson, is a cancer modeling mathematician. She learned that math had the power and potential to address the world's most pressing problems."];

    if (req.body.result.parameters['field']) {
        field = req.body.result.parameters['field'];
        console.log("Field: ", field);

        // generate a random number between 0 -> 2
        var randomNum = Math.floor(Math.random() * 3);

        switch (field) {
            case 'science':
                woman = science[randomNum];
                break;
            case 'technology':
                woman = tech[randomNum];
                break;
            case 'engineering':
                woman = engineer[randomNum];
                break;
            case 'math':
                woman = math[randomNum];
                break;
            default:
                woman = "Keysha Williams, is a software engineer and a Java instructor with the University of California. As a young girl, she believed that computers would soon control the world, so she wanted to be the one to control the computers.";
        }

    } else {
        defaultOn = true;
    }

    if (!defaultOn) {
        response = woman;
    } else {
        response = "I couldn't locate a woman in that field, so let me tell you about a woman in technology. Keysha Williams is a software engineer and a Java instructor with the University of California. As a young girl, she believed that computers would soon control the world, so she wanted to be the one to control the computers.";
    }

    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    res.send(JSON.stringify({ "speech": response, "displayText": response
        //"speech" is the spoken version of the response
        // "displayText" is the visual version
    }));
};
