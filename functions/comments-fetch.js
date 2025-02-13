const nodeFetch = require("node-fetch"); // Rename to avoid conflict

exports.handler = async function (event, context) {
    const discussionId = event.queryStringParameters.id;
    const url = `https://toxicplay.freeflarum.com/api/discussions/${discussionId}`;

    try {
        const response = await nodeFetch(url); // Use the renamed variable
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
