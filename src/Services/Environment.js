// eslint-disable-next-line no-unused-vars
const herokuUrl = process.env.REACT_APP_HEROKU_URL;
// eslint-disable-next-line no-unused-vars
const localHosturl = process.env.REACT_APP_LOCALHOST_URL;
// eslint-disable-next-line no-unused-vars
const urlToUser = (process.env.NODE_ENV === "development") ? localHosturl : herokuUrl;

export default {
    url: urlToUser
}