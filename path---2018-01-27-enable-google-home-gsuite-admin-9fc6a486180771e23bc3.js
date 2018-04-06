webpackJsonp([0xcd1cdc71415a],{405:function(A,e){A.exports={data:{site:{siteMetadata:{title:"Mike Herchel",author:"Mike Herchel"}},markdownRemark:{id:"/Users/mherchel/sites/herchel-new/src/blog/2018-01-27-enable-google-home-gsuite-admin/index.md absPath of file >>> MarkdownRemark",html:'<p><em>I’m blogging about this with the hope that someone will find this helpful</em>.</p>\n<p>Google sent me a free Google Home Mini because I purchased a new Pixel 2. While setting it up, I received this error message:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/error-5eed9417cc5599b28e2220a8f89e3d69-fc000.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 73.53535353535354%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGOiVi4AH//xAAZEAADAQEBAAAAAAAAAAAAAAABAgMEABP/2gAIAQEAAQUCzRLyfOQnZ7ecW0l59//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABoQAQACAwEAAAAAAAAAAAAAAAEAEQIQEjH/2gAIAQEABj8Cu5k2eaDm4jgF6//EABoQAQACAwEAAAAAAAAAAAAAAAERIQAQMUH/2gAIAQEAAT8hFkFpec20o0oI9W5BMEd1/9oADAMBAAIAAwAAABC/L//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABoQAQEBAQADAAAAAAAAAAAAAAERADEhYfH/2gAIAQEAAT8QBT+B6fcnGsgN1zY+oVO6+DVKhu7/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Google Error message"\n        title=""\n        src="/static/error-5eed9417cc5599b28e2220a8f89e3d69-893a4.jpg"\n        srcset="/static/error-5eed9417cc5599b28e2220a8f89e3d69-bbf57.jpg 200w,\n/static/error-5eed9417cc5599b28e2220a8f89e3d69-260b8.jpg 400w,\n/static/error-5eed9417cc5599b28e2220a8f89e3d69-893a4.jpg 800w,\n/static/error-5eed9417cc5599b28e2220a8f89e3d69-25965.jpg 1200w,\n/static/error-5eed9417cc5599b28e2220a8f89e3d69-e54c8.jpg 1600w,\n/static/error-5eed9417cc5599b28e2220a8f89e3d69-fc000.jpg 1980w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p><strong>Account not supported</strong></p>\n<p>The functionality of the account you are attempting to sign in with is limited by your administrator, and will not work with the Google Home app. Please sign in with a different account.</p>\n</blockquote>\n<p>So, I called Google technical support, and they told me that Google Home Mini does <em>not</em> support custom domains on G-suite! What??? This absolutely makes no sense, but they confirmed it. </p>\n<p>Luckily, I tweeted it and received a response that it is supported in some sense. </p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">That&#39;s really weird as mine is on my personal domain. Maybe it&#39;s that mine is a legacy GApps account (I still get 100 users free on it)</p>&mdash; Chris Wiegman (@ChrisWiegman) <a href="https://twitter.com/ChrisWiegman/status/957281303862407168?ref_src=twsrc%5Etfw">January 27, 2018</a></blockquote>\n<p>Doing some additional “Googling” I found <a href="https://support.google.com/googlehome/answer/7571892?co=GENIE.Platform%3DAndroid&#x26;hl=en-GB">this knowledge base article</a>, which led me to the solution below:</p>\n<ol>\n<li>Log into your Google Apps Admin. Note you’ll have to hit the “More” button at the bottom of the menu to see this option.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/1-admin-ece44d57e7309ec8cecc53cbff4f1548-9c92d.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 539px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 138.40445269016698%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAIBAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7sJjLYqSyVD/xAAbEAACAgMBAAAAAAAAAAAAAAAAAQIREBIxIf/aAAgBAQABBQITs02xGVkeCsXELxH/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/AR//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAcEAAABgMAAAAAAAAAAAAAAAAAARARITECIOH/2gAIAQEABj8CBXId8kKei0KNf//EAB0QAAICAgMBAAAAAAAAAAAAAAABESExUUFhgcH/2gAIAQEAAT8hcJCEp4DTBewRPMDoHbfwNK5diRVNFV9GxQJYkC0M/9oADAMBAAIAAwAAABDvDzz/xAAYEQACAwAAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxDKE5//xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAgEBPxAh/8QAHRABAQADAQEAAwAAAAAAAAAAAREAITFRYUGRof/aAAgBAQABPxAodsLDbi4GBSsk98yEApwf8YKkSBi/jCDpHQJ9LDVHyO/rNzp49cAtlQK14ZUbHncJidHDFqCFa4N5/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="\'\'"\n        title=""\n        src="/static/1-admin-ece44d57e7309ec8cecc53cbff4f1548-9c92d.jpg"\n        srcset="/static/1-admin-ece44d57e7309ec8cecc53cbff4f1548-07d71.jpg 200w,\n/static/1-admin-ece44d57e7309ec8cecc53cbff4f1548-d6b5a.jpg 400w,\n/static/1-admin-ece44d57e7309ec8cecc53cbff4f1548-9c92d.jpg 539w"\n        sizes="(max-width: 539px) 100vw, 539px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n<li>From the Google Admin, click the top left menu button, and go to Apps, and then Additional Google Services.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/2-admin-console-ee69a313e1bfa88caa72e8263270232d-48a5e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 665px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.18796992481202%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAABjUlEQVQoz4VSy0rDQBTNr/pW8AfcuS1tBbduRXDpSvADXAmCoAFt2kkyiWkeTZ2kk5nYtPX0YXupjx4ugczcc8+9546RqbEMXe5FSZLEcTz5xuVduFVje3V7t24fNO39xjQOGvZh0zk6c7ZrDOdGpie/xuNbfvcg/g8jTVMIBkGAryIolJpsghEJhUjlsDf4xHcZWaHHm2DkMyRx4rpcEbUhUA2lKqjUaDTSZQnaQllrLaWEW57vL5OqqgL36oXf3x9TsuXwy5vbXC4qGsj7nAHZyyTURtF3Uaqc4Yoql2W5mhk/6FYI0e/3qbIQH61Wq9Nue563HBLbNE0zN5+qKJiS527HcaS0pmQIhmEoRDYhp/nJTnZ+mr8+L5SRNBgM4FmWZbS9oigYY5bVtizLZh3bcZTTkdcX43KlMTUM02qlkU1nRlHuuqzDuMulLHCCNDr/lIxRYXUURZx7WA5tm3Pu+z4lrJPhFlbVDbronF7AwvQHqNWLVQHzOekF3dyfz3OunPZ63TBceyQbyV/GSFFOKAth/QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="\'\'"\n        title=""\n        src="/static/2-admin-console-ee69a313e1bfa88caa72e8263270232d-48a5e.png"\n        srcset="/static/2-admin-console-ee69a313e1bfa88caa72e8263270232d-96a51.png 200w,\n/static/2-admin-console-ee69a313e1bfa88caa72e8263270232d-5db44.png 400w,\n/static/2-admin-console-ee69a313e1bfa88caa72e8263270232d-48a5e.png 665w"\n        sizes="(max-width: 665px) 100vw, 665px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n<li>Navigate through the pager at the bottom until you find <em>Web and App Activity</em>\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/3-web-activity-62125ce0d282f3a7d76b1032c8337b68-f9cd1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 59.248554913294804%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsSAAALEgHS3X78AAABMUlEQVQoz42SzVKDMBSF8/4v486Fbpxx5crpoB2rFKttKSUFSUgCJRfxlBQGmOr4rXJPcs/9ASalrKpqu93GcRyGIedcCPH9P5hSqjCm6MgHwBdGWZYJKYoxWhe5MkykuyQVnuf5vk9EuOitjDGyRWs9qakLkpoYem6aJoqiJElwcMWpw4Zr+h0GV9NSteiWmHMox5urku+PHW6W4wAmpM6VQoKLy7KEhYkjTIuno1a1niiMpzk/HND2rsW1YBZzjIrGhk+RieWNklGqr1nX9bnyYo53+BDQ/0rGtZvTxQhhQSJzjm6djtP+rG0GsOE1OJXSOX0s6f2NPgMKFuTP7QrnpX2Z0WYFxUJcBxeSxUWyLH2efd3f1nfXKtz08jQZ39n9FRP93Pnrk3p8wC4wGsIfRiSz2IV+mYIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="\'\'"\n        title=""\n        src="/static/3-web-activity-62125ce0d282f3a7d76b1032c8337b68-42603.png"\n        srcset="/static/3-web-activity-62125ce0d282f3a7d76b1032c8337b68-f931c.png 200w,\n/static/3-web-activity-62125ce0d282f3a7d76b1032c8337b68-e8031.png 400w,\n/static/3-web-activity-62125ce0d282f3a7d76b1032c8337b68-42603.png 800w,\n/static/3-web-activity-62125ce0d282f3a7d76b1032c8337b68-f9cd1.png 1038w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n<li>Hover over the row and click the three little menu dots to bring up a contextual menu.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/4-contextual-menu-8381d20a930b670f9c5c9765e2c88181-878d0.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 62.72617611580217%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVQoz6WSy06FMBCG+/5v5MKVcW3i2uiBeghW6IUCvU3BH4knHHThCd+imQ5z+WcKq6rKWjtN03w7zB6AjeOolDLG9H2PU0pZ1zXk4IQ/xrjrlqdZWRIqdQOxlJJzLuc83Q5Dbe99+i+EVvH9lIhwWWbWWnPOIRjKh2swFGYRQigpYeM+KNk/3o8Pd7CZXGk/S16eioKXZdM06gfURWYBP+dt2178a8wiO6LD85MSH855IsobMBiGWjcKnfkahmjyLry+WCW1MSi1XQnWG0JA/67rELhf2JIcYzhz8v735wt/PgeDl4KPxVsnJbTpb7bPCxt+7BWR+z9sPsCh5C/xt/Q8grDldgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="\'\'"\n        title=""\n        src="/static/4-contextual-menu-8381d20a930b670f9c5c9765e2c88181-42603.png"\n        srcset="/static/4-contextual-menu-8381d20a930b670f9c5c9765e2c88181-f931c.png 200w,\n/static/4-contextual-menu-8381d20a930b670f9c5c9765e2c88181-e8031.png 400w,\n/static/4-contextual-menu-8381d20a930b670f9c5c9765e2c88181-42603.png 800w,\n/static/4-contextual-menu-8381d20a930b670f9c5c9765e2c88181-878d0.png 829w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n<li>Select “Turn ON for everyone”\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/5-turn-on-105b52dc7adbb05017f20319ad7b1fe5-8d452.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 797px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 64.366373902133%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABAklEQVQoz7WRTW7DIBSEuWKu0dNlnwNEbZR1u7PjRaT6D+PHj8F2kgGaCoVNFCnfAhsY5sE8prUWQkgpiUgG+gTn3JwhtRul1cYxa+00TcaY/xEu4zhiVEqt63rJIL0IORu7MnijOMbrE1zqczpl8cK/AbiYDAi6ruOc+3vttukWGwI997RtG3UiAdOmaXwuRNPHhngPu7IsIWbxeTT0QxBhCV4yAQIkV9f1Cfx8F0UBTVVVMP0LTB0/NRHs83gQB9ZxSZjiB0Y4siwLtnxgmKjDHo+LNR9CQm9iccjcHXTBB2YD6muPyvwO6jxUxmLeNl8Zn+tLsCc7/IbDSKJ7CQRxA5ul7uF5s0U6AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="\'\'"\n        title=""\n        src="/static/5-turn-on-105b52dc7adbb05017f20319ad7b1fe5-8d452.png"\n        srcset="/static/5-turn-on-105b52dc7adbb05017f20319ad7b1fe5-bff2c.png 200w,\n/static/5-turn-on-105b52dc7adbb05017f20319ad7b1fe5-03f11.png 400w,\n/static/5-turn-on-105b52dc7adbb05017f20319ad7b1fe5-8d452.png 797w"\n        sizes="(max-width: 797px) 100vw, 797px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </li>\n</ol>\n<p>The change was immediate for me. Hopefully someone can find this useful!</p>',excerpt:"I’m blogging about this with the hope that someone will find this helpful . Google sent me a free Google Home Mini because I purchased a new…",frontmatter:{title:"How to enable support for Google Home Mini on a custom domain using Gsuite",date:"January 27, 2018",author:null}}},pathContext:{slug:"/2018-01-27-enable-google-home-gsuite-admin/"}}}});
//# sourceMappingURL=path---2018-01-27-enable-google-home-gsuite-admin-9fc6a486180771e23bc3.js.map