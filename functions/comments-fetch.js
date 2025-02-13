const axios = require("axios"); // Using axios for HTTP requests

export const handler = async (event, context) => {
    const discussionId = event.queryStringParameters.id;
    const url = `https://toxicplay.freeflarum.com/api/discussions/${discussionId}`;

    try {
        console.log(`Fetching data from: ${url}`);

        const response = await axios.get(url); // Axios GET request
        console.log(`Response Status: ${response.status}`);

        return {
            statusCode: 200,
            body: JSON.stringify(response.data) // Axios response data
        };
    } catch (error) {
        console.error("Error occurred:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
