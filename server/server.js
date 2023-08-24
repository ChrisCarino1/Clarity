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
    const { prompt } = req.body;
    console.log(prompt)
    // Generate completion using OpenAI API
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 2000,
        temperature: 0,
        prompt: `On a new line next to the piece of code its referencing write a detailed and meaningful comment on the piece of code. Return the code with these comments inside: ${prompt}`
    });
    // Send back the generated text as the response
    console.log(completion.data.choices[0].text)
    res.send(completion.data.choices[0].text);
})

// Define the port on which the server will listen
const port = 8080;

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})