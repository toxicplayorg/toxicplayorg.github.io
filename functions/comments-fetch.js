// functions/comments-fetch.js
export const handler = async (event, context) => {
    const discussionId = event.queryStringParameters.id;
    const url = `https://toxicplay.freeflarum.com/api/discussions/${discussionId}`;

    try {
        const fetch = await import('node-fetch').then(module => module.default);
        const response = await fetch(url);
        const data = await response.json(); // Parse the JSON response

        return {
            statusCode: 200,
            body: JSON.stringify(data), // Ensure data is stringified properly
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};