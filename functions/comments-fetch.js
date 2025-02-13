// functions/comments-fetch.js
import fetch from "node-fetch"; // Using ES module import for node-fetch

export const handler = async (event, context) => {
    const discussionId = event.queryStringParameters.id;
    const url = `https://toxicplay.freeflarum.com/api/discussions/${discussionId}`;

    try {
        console.log(`Fetching data from: ${url}`); // Log the URL being fetched

        const response = await fetch(url);

        // Log the status code
        console.log(`Response Status: ${response.status}`);

        // If the response is not successful, throw an error
        if (!response.ok) {
            throw new Error(`API returned an error: ${response.statusText}`);
        }

        const data = await response.json(); // Parse the JSON response
        console.log("Fetched Data:", data); // Log the fetched data

        return {
            statusCode: 200,
            body: JSON.stringify(data) // Return the response data as JSON
        };
    } catch (error) {
        console.error("Error occurred:", error); // Log the error to function logs
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }) // Return the error message
        };
    }
};
