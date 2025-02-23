import { snippets } from "../database/index.js"
import {randomBytes} from "crypto";


export const createSnippet = (req,res) => {
    const id = randomBytes(4).toString('hex');

    const {title, code} = req.body;

    // creating a snippet
    snippets[id] = {
        id,
        title,
        code
    }
    return res.status(201).json({
        success:true,
        snippet:snippets[id],
        message:"Snippet created successfully."
    });

};

export const getSnippet = (_, res) => {
    return res.status(200).json(snippets);
}