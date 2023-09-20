import { request, response } from "express";
import { validationResult } from "express-validator";
export const validateFields = (req = request, res = response, next = () => {}) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    next();
}

export const validNumberArray = (field: string) => (value: number[]) => {
    if (!value.every((item) => typeof item === "number" && item > 0)) {
      throw new Error(field + "must contain only numbers");
    }
    return true;
}