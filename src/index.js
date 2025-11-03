import { generateReply } from "./src/generateReply.js";

const userMessage = "Wanna enjoy your day with mulaa";

generateReply(userMessage).then((reply) => {
  console.log("💬 MULAA AI says:", reply);
});
