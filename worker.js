export default {
  fetch: (req, env) => {
    return fetch('https://api.airtable.com/v0/meta/bases', { headers: { authorization: 'Bearer ' + env.PUBLICREADONLY_TOKEN }})
  }
}
