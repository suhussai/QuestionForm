"use strict";
var Question = (function () {
    function Question(id, title, options) {
        this.id = id;
        this.title = title;
        this.options = options;
        this.selectedOption = 0;
    }
    return Question;
}());
exports.Question = Question;
//# sourceMappingURL=question.js.map