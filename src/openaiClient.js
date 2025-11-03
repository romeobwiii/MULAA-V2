import OpenAI from "openai";
import { OPENAI_API_KEY } from "../config.js";

const client = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export default client;
