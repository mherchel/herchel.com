module.exports = {
  siteMetadata: {
    title: "Mike Herchel",
    description: "Mike Herchel is an 8th Grade Geography Bee champion that specializes in Drupal and JavaScript front-end development.",
    author: "Mike Herchel",
    events: [{
      title: "Florida Drupalcamp",
      date: "2010-02-20",
      status: "attending",
      location: "Orlando"
    }, {
      title: "DrupalCon San Francisco",
      date: "2010-04-19",
      status: "attending",
      location: "San Franscisco"
    }, {
      title: "Florida Drupalcamp",
      date: "2012-02-11",
      status: "attending",
      location: "Orlando"
    }, {
      title: "Florida Drupalcamp",
      date: "2011-02-12",
      status: "attending",
      location: "Orlando"
    }, {
      title: "DrupalCon Chicago",
      date: "2011-03-07",
      status: "attending",
      location: "Chicago"
    }, {
      title: "DrupalCon Denver",
      date: "2012-03-19",
      status: "attending",
      location: "Denver"
    }, {
      title: "Drupalcamp Atlanta",
      date: "2012-10-27",
      status: "speaking",
      location: "Atlanta"
    }, {
      title: "Florida Drupalcamp",
      date: "2013-04-20",
      location: "Orlando"
    }, {
      title: "DrupalCon Portland",
      date: "2013-05-20",
      status: "speaking",
      location: "Portland"
    }, {
      title: "Frontend Design Conference",
      date: "2013-06-02",
      status: "attending"
    }, {
      title: "Florida Drupalcamp",
      date: "2014-03-08",
      location: "Orlando"
    }, {
      title: "DrupalCon Austin",
      date: "2014-06-02",
      status: "speaking",
      location: "Austin"
    }, {
      title: "Frontend Design Conference",
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
      title: "Gainesville BarCamp",
      date: "2014-11-08",
      status: "attending"
    }, {
      title: "DrupalCon Latin America",
      date: "2015-02-10",
      status: "attending",
      location: "Bogota, Colombia"
    }, {
      title: "Florida Drupalcamp",
      date: "2015-04-11",
      location: "Orlando"
    }, {
      title: "Orlando Barcamp",
      date: "2015-04-18",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "DrupalCon Los Angelas",
      date: "2015-05-11",
      status: "speaking",
      location: "Los Angelas"
    }, {
      title: "Frontend Design Conference",
      date: "2015-05-21",
      status: "attending",
      location: "St Petersburg"
    }, {
      title: "DrupalCamp Colorado",
      date: "2015-06-19",
      status: "speaking",
      location: "Denver"
    }, {
      title: "DrupalCamp Costa Rica",
      date: "2015-07-29",
      status: "speaking",
      location: "San Jose, Costa Rica"
    }, {
      title: "DrupalCamp Atlanta",
      date: "2015-10-16",
      status: "speaking",
      location: "Atlanta"
    }, {
      title: "Fossetcon",
      date: "2015-11-19",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "Florida Drupalcamp",
      date: "2016-03-05",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "Gainesville Barcamp",
      date: "2016-03-12"
    }, {
      title: "Wordcamp Jacksonville",
      date: "2016-04-16",
      status: "speaking",
      location: "Jacksonville"
    }, {
      title: "DrupalCon New Orleans",
      date: "2016-05-09",
      status: "speaking",
      location: "New Orleans"
    }, {
      title: "Front End Design Conf",
      date: "2016-06-15",
      status: "attending",
      location: "St Petersburg"
    }, {
      title: "Web Design Day",
      date: "2016-06-23",
      status: "attending",
      location: "Pittsburgh"
    }, {
      title: "NYCcamp",
      date: "2016-07-08",
      status: "speaking",
      location: "New York City"
    }, {
      title: "Drupalcon Dublin",
      date: "2016-09-26",
      status: "attending",
      location: "Dublin, Ireland"
    }, {
      title: "Drupalcamp Chattanooga",
      date: "2016-11-05",
      status: "speaking",
      location: "Chattanooga"
    }, {
      title: "Florida Drupalcamp",
      date: "2017-02-17",
      status: "speaking",
      location: "Orlando"
    }, {
      title: "WordCamp Miami",
      date: "2017-03-24",
      status: "speaking",
      location: "Miami"
    }, {
      title: "Frontend Design Conference",
      date: "2017-04-20",
      status: "attending",
      location: "St Petersburg"
    }, {
      title: "DrupalCon Baltimore",
      date: "2017-04-24",
      status: "attending",
      location: "Baltimore"
    }, {
      title: "Drupalcamp Spain",
      date: "2017-05-05",
      status: "speaking",
      location: "Madrid, Spain"
    }, {
      title: "Design 4 Drupal",
      date: "2017-06-23",
      status: "speaking",
      location: "Boston"
    }, {
      title: "Drupalcamp Asheville",
      date: "2017-07-15",
      status: "attending",
      location: "Asheville"
    }, {
      title: "Drupalcamp Colorado",
      date: "2017-07-28",
      status: "speaking",
      location: "Denver"
    }, {
      title: "BADCamp",
      date: "2017-10-18",
      status: "speaking",
      location: "San Francisco"
    }, {
      title: "Drupalcamp Atlanta",
      date: "2017-11-03",
      status: "attending",
      location: "Atlanta"
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
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: "data",
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
    `gatsby-transformer-json`,
  ],
 
}
