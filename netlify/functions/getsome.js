import fetch from 'node-fetch';

const API_ENDPOINT = 'https://reactnative.dev/movies.json';

exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext;
  const username = user != null ? user.user_metadata.full_name : "%Username%";
  const data = await (await fetch(API_ENDPOINT)).json();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello World, ${username}!`, identity, user, data }),
  };
}
