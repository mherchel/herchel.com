module.exports = {
  siteMetadata: {
    title: "Mike Herchel",
    description: "Mike Herchel is an 8th Grade Geography Bee champion that specializes in Drupal and JavaScript front-end development.",
    author: "Mike Herchel",
    events: [{
      title: "Florida Drupalcamp 2010",
      date: "2010-02-20",
      status: "attending",
      location: "Orlando"
    }, {
      title: "DrupalCon San Francisco",
      date: "2010-04-19",
      status: "attending"
    }, {
      title: "Florida Drupalcamp 2012",
      date: "2011-02-11",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "Florida Drupalcamp 2011",
      date: "2011-02-12",
      status: "attending",
      location: "Orlando"
    }, {
      title: "DrupalCon Chicago 2011",
      date: "2011-03-07",
      status: "attending",
      location: "Chicago"
    }, {
      title: "FL Drupal Camp",
      date: "2012-02-11",
      status: "speaking"
    }, {
      title: "DrupalCon Denver 2012",
      date: "2012-03-19",
      status: "attending",
      location: "Denver"
    }, {
      title: "Drupalcamp Atlanta",
      date: "2012-10-27",
      status: "speaking",
      location: "Atlanta"
    }, {
      title: "Florida Drupalcamp 2013",
      date: "2013-04-20",
      location: "Orlando"
    }, {
      title: "DrupalCon Portland 2013",
      date: "2013-05-20",
      status: "speaking",
      location: "Portland"
    }, {
      title: "Frontend Design Conference 2013",
      date: "2013-06-02",
      status: "attending"
    }, {
      title: "Florida Drupalcamp 2014",
      date: "2014-03-08",
      location: "Orlando"
    }, {
      title: "DrupalCon Austin 2014",
      date: "2014-06-02",
      status: "speaking",
      location: "Austin"
    }, {
      title: "Frontend Design Conference 2014",
      date: "2014-07-10",
      status: "attending"
    }, {
      title: "Drupalcamp Asheville",
      date: "2014-08-23",
      status: "speaking",
      location: "Asheville"
    }, {
      title: "Drupalcamp Chattanooga",
      date: "2014-09-13",
      status: "speaking",
      location: "Chattanooga"
    }, {
      title: "Gainesville BarCamp 2014",
      date: "2014-11-08",
      status: "attending"
    }, {
      title: "DrupalCon Latin America",
      date: "2015-02-10",
      status: "attending",
      location: "Colombia"
    }, {
      title: "Florida Drupalcamp 2015",
      date: "2015-04-11",
      location: "Orlando"
    }, {
      title: "Orlando Barcamp 2015",
      date: "2015-04-18",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "DrupalCon 2015",
      date: "2015-05-11",
      status: "speaking"
    }, {
      title: "Frontend Design Conference 2015",
      date: "2015-05-21",
      status: "attending"
    }, {
      title: "DrupalCamp Colorado 2015",
      date: "2015-06-19",
      status: "speaking",
      location: "Denver"
    }, {
      title: "DrupalCamp Costa Rica 2015",
      date: "2015-07-29",
      status: "speaking",
      location: "San Jose, Costa Rica"
    }, {
      title: "DrupalCamp Atlanta 2015",
      date: "2015-10-16",
      status: "speaking",
      location: "Atlanta"
    }, {
      title: "Fossetcon 2015",
      date: "2015-11-19",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "Florida Drupalcamp 2016",
      date: "2016-03-05",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "Gainesville Barcamp 2016",
      date: "2016-03-12"
    }, {
      title: "Wordcamp Jacksonville 2016",
      date: "2016-04-16",
      status: "speaking"
    }, {
      title: "DrupalCon New Orleans 2016",
      date: "2016-05-09",
      status: "speaking"
    }, {
      title: "Front End Design Conf",
      date: "2016-06-15",
      status: "attending"
    }, {
      title: "Web Design Day 2016",
      date: "2016-06-23",
      status: "attending",
      location: "Pittsburgh"
    }, {
      title: "NYCcamp 2016",
      date: "2016-07-08",
      status: "speaking"
    }, {
      title: "Drupalcon Dublin 2016",
      date: "2016-09-26",
      status: "attending",
      location: "Dublin, Ireland"
    }, {
      title: "Drupalcamp Chattanooga 2016",
      date: "2016-11-05",
      status: "speaking",
      location: "Chattanooga"
    }, {
      title: "Florida Drupalcamp 2016",
      date: "2017-02-17",
      location: "Orlando"
    }, {
      title: "WordCamp Miami 2017",
      date: "2017-03-24",
      status: "speaking",
      location: "Miami"
    }, {
      title: "DrupalCon Baltimore",
      date: "2017-04-24",
      status: "attending",
      location: "Baltimore"
    }, {
      title: "Drupalcamp Spain 2017",
      date: "2017-05-05",
      status: "speaking",
      location: "Madrid, Spain"
    }, {
      title: "Design 4 Drupal 2017",
      date: "2017-06-23",
      status: "speaking",
      location: "Boston"
    }]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
  ],
 
}
