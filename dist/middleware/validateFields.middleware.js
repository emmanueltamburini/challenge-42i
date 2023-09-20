"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validNumberArray = exports.validateFields = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validateFields = (req = express_1.request, res = express_1.response, next = () => { }) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
};
exports.validateFields = validateFields;
const validNumberArray = (field) => (value) => {
    if (!value.every((item) => typeof item === "number" && item > 0)) {
        throw new Error(field + "must contain only numbers");
    }
    return true;
};
exports.validNumberArray = validNumberArray;
//# sourceMappingURL=validateFields.middleware.js.map