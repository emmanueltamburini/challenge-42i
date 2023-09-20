import { Request, Response } from "express";
import { nonConstructibleChange, smallestDifference } from "../challengeAnswer";

interface SmallestDifferenceBody {
    firstArray: number[],
    secondArray: number[],
}

interface NonConstructibleChange {
    coins: number[],
}

export const getSmallestDifference = (req: Request, res: Response) => {
    const body: SmallestDifferenceBody = req.body;
    return res.json({ response: smallestDifference(body.firstArray, body.secondArray) });
}

export const getNonConstructibleChange = (req: Request, res: Response) => {
    const body: NonConstructibleChange = req.body;
    return res.json({ response: nonConstructibleChange(body.coins) });
}
