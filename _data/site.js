module.exports = {
  lang: 'en',
  locale: 'en_US',
  timeZone: 'America/New_York',
  site_name: 'Eric Carlisle : UI Developer, UX Designer',
  author: {
    name: 'Eric Carlisle',
    twitter_username: 'eric_carlisle',
    github_username: 'ecarlisle',
    linkedin_username: 'ericcarlisle'
  },
  // TODO : First step. Need more sophisticated means of environment-specific configuration values.
  hostname: process.env.ELEVENTY_ENV.toLocaleLowerCase() === 'development' ? 'http://localhost:8080' : 'https://www.ericccarlisle.com',
  environment: process.env.ELEVENTY_ENV.toLowerCase()
}
