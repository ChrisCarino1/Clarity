// Import required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Configuration, OpenAIApi } = require("openai");

// Set up OpenAI configuration with API key
const config = new Configuration({
    apiKey: "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"
})

// Initialize OpenAI API with the provided configuration
const openai = new OpenAIApi(config);

// Create an Express application
const app = express();

// Use body-parser middleware to parse JSON data
app.use(bodyParser.json());

// Enable CORS for the Express application
app.use(cors());

// Define an endpoint for ChatGPT interaction
app.post("/chat", async (req, res) => {
    // Extract code from the request body
    const { code } = req.body;

    // Generate completion using OpenAI API
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 512,
        temperature: 0,
        prompt: `Given this piece of code write detailed inline comments of what the code does. Additionally, write a summary that captures the code's purpose which is not included as a comment: ${code}`
    });

    // Send back the generated text as the response
    res.send(completion.data.choices[0].text);
})

// Define the port on which the server will listen
const port = 8080;

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
