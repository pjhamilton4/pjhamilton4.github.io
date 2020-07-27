module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Hello! I'm Philip!","short_name":"Hello! I'm Philip!","start_url":"/pjhamilton4.github.io","background_color":"#ffffff","theme_color":"#25303B","display":"minimal-ui","icon":"src/assets/favicon-32x32.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"307135c6f4707db1926679d9046bd46a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":" UA-39163674-2"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
