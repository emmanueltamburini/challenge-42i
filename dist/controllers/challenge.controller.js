"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNonConstructibleChange = exports.getSmallestDifference = void 0;
const challengeAnswer_1 = require("../challengeAnswer");
const getSmallestDifference = (req, res) => {
    const body = req.body;
    return res.json({ response: (0, challengeAnswer_1.smallestDifference)(body.firstArray, body.secondArray) });
};
exports.getSmallestDifference = getSmallestDifference;
const getNonConstructibleChange = (req, res) => {
    const body = req.body;
    return res.json({ response: (0, challengeAnswer_1.nonConstructibleChange)(body.coins) });
};
exports.getNonConstructibleChange = getNonConstructibleChange;
//# sourceMappingURL=challenge.controller.js.map