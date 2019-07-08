const settings = {
  "name": "pantheon-frontity-poc",
  "state": {
    "frontity": {
      "url": "https://scalewp.io/",
      "title": "WordPress at Scale",
      "description": "WordPress is moving upmarket, powering high-traffic, mission-critical websites. Find out what it takes to run WordPress at scale."
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Resources",
              "/resources/"
            ],
            [
              "About",
              "/about/"
            ],
            [
              "Contribute",
              "/contribute/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://scalewp.io/wp-json",
          "homepage": "/scale"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
