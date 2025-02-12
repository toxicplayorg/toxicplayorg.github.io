exports.handler = async function(event, context) {
    const discussionId = event.queryStringParameters.id;
    const url = `https://toxicplay.freeflarum.com/api/discussions/${discussionId}`;

    try {
        const fetch = await import('node-fetch').then(module => module.default);
        const response = await fetch(url);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
};
