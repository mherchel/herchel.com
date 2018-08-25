webpackJsonp([28210096298019],{408:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Mike Herchel",author:"Mike Herchel"}},markdownRemark:{id:"/Users/mherchel/sites/herchel.com/src/blog/2018-01-10-why-is-gatsby-fast-prpl/index.md absPath of file >>> MarkdownRemark",html:'<p>Gatsby is a ReactJS based static site generator. This means that the <em>build process</em> will automatically generate all files that are sent to the end-user’s computer. You don’t need to do server-side processing. </p>\n<p>There are many static site generators, but what makes Gatsby unique is is <em>raw, unbridled speed</em>. Gatsby follows the <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/">PRPL pattern</a>, which is a technique being pushed by Google for making fast PWAs (Progressive Web Apps). </p>\n<figure>\n    \n  <a class="gatsby-resp-image-link" href="/static/gatsby-load-d934023618d93d08f8ca7b035b7e519e-d541a.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 761px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 73.06176084099869%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsTAAALEwEAmpwYAAACb0lEQVQoz2VSyW4TQRCdLwUkPoQb4sSdE+KKBBgUEydyHCeYKCSE2MZx7Em8zNbjWT1LL9PbDD2OArJ5aqmfSvVKVa9Ky/OkQFGYmFEcYZjkoc8IQRhTxtZJYpimZVmmufksyzAMy7IXi6Vt28uloRnmXf+iMbxqDa4O3PF7b/wZmCMbANuLLS82LEchCAIAgBL7vu+6riqliOd5GkJICFGWJRclJiiJnNQ+i+cH0aIdL9qZ3WPQqaqqTuC83OCRVFq1QU2rSrW9MvpG74W+/+R279m0+XTZfp7OP1WPeEj7S7bECCXG/fndzZE+ag/P3lx3X970XoFpg+UuX4+I1STu0ZbYXplu5GCMaEEhgktrMdZvbmfji8n5yahzOu5c6t2Z3rYnzZV+CO6/FwSRDYqi0MI4LFghpXyYZ4tsqJCc8oILpgKUbaVps4EneW1YVcqZ5bWOj1onJ43W/odm4+P+Xqd3OhgOez9+7XWPu71OMPuN7g7B6PVk8jZdftE4lQ8z1FMIHDrnuT3M51+D23ejn+3BcB6CBY4nMJlG4FvsxaENfOD2L41oDf4ZJjdGzuC17+tlQTmTlkOWNs7yHGGIKM7Qygf6yuz76bpvDsNipe3swHVP01Av6/kQDuysdoQxTgqqCiA7io1gBRM6n7oh+08cuR5M/EodAitwtiYwFbQQgjLlGU5T8z6bXcOUO/MoyZNdMVwDJVJEFhlHASdQcC5LwSVTN59abjpfYChUTznMdsUUrTnFinDKKKZC+SnVktRCqGrF92N19IyILMwxJrtiRpEUtI5wIhkslbI2QKptK0BI1RNUopQSQv8AncI/vF0P9jcAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="Devtools profile of Gatsby loading" title="" src="/static/gatsby-load-d934023618d93d08f8ca7b035b7e519e-d541a.png" srcset="/static/gatsby-load-d934023618d93d08f8ca7b035b7e519e-66d59.png 200w,\n/static/gatsby-load-d934023618d93d08f8ca7b035b7e519e-f01e1.png 400w,\n/static/gatsby-load-d934023618d93d08f8ca7b035b7e519e-d541a.png 761w" sizes="(max-width: 761px) 100vw, 761px">\n    </span>\n  </span>\n  \n  </a>\n    \n    <figcaption>Gatsby&apos;s initial page-load is fast!</figcaption>\n</figure>\n<h2>What is PRPL?</h2>\n<p>PRPL stands for </p>\n<ul>\n<li><strong>Push</strong> critical resources for the initial URL route. Basically this uses <a href="https://www.smashingmagazine.com/2017/04/guide-http2-server-push/">HTTP/2 Server push</a>, which allows you to send site assets to the user before they’ve even asked for them.</li>\n<li><strong>Render</strong> initial route. This is the basic rendering of the web page.</li>\n<li><strong>Pre-cache</strong> remaining routes. This includes analyzing any current hyperlinks, and then downloading the code for each before they’re needed. Gatsby uses a service worker to pre-fetch and cache.</li>\n<li><strong>Lazy-load</strong> and create remaining routes on demand. As the end-user scrolls down the page, each hyperlink that comes into the viewport also gets pre-downloaded.</li>\n</ul>\n<p>Because each page is pre-downloaded, when the end user clicks a link, the next page is rendered instantly. There’s no performance penalty for pre-downloading the pages because this happens in the background after your page is rendered.</p>\n<h2>This sounds complicated.</h2>\n<p>It is complicated. Normally, you’d have to create a custom webpack config with code splitting, tree-shaking and goat-sacrificing to do this properly. </p>\n<p>Gatsby, on the other hand, makes it easy. It just handles it - in fact, it’s pretty hard to make a slow website in Gatsby. Gatsby will automatically follow this pattern. If you open up the network panel in Chrome Developer Tools, you can watch the network requests filter in as you scroll down the page. Cool!</p>\n<figure>\n    <video width="100%" autoplay controls loop muted>\n      <source src="/gatsby-lazy-loading-776d8516d9021e09e3445db7bc3b5b8e.mp4" type="video/mp4">\n    </video>\n    <figcaption>As I scroll, Gatsby prefetches resources</figcaption>\n</figure>\n<h2>Gatsby has a number of out-of-the-box speed optimizations:</h2>\n<h3>Inline critical CSS</h3>\n<p>Styles (CSS) are normally stored in a separate monolithic “stylesheet” that gets downloaded after the initial webpage is downloaded. The benefit of this is that the stylesheet gets stored in the browser’s cache, and doesn’t have to re-download on subsequent page-loads. </p>\n<p>The downside of this approach is that the browser has to wait until the large monolithic stylesheet is downloaded and parsed before it can start rendering the webpage. This adds vital milliseconds to the page-load time.</p>\n<p>Gatsby’s approach is to identify the CSS that is actually being used on the page, and only adding this CSS to the page. It adds this inline to the webpage, so there’s no additional download. It does not have a penalty of having to re-download the stylesheet on page reload, because there are no page reloads!</p>\n<h3>No page reloads</h3>\n<p>Gatsby makes use of React’s virtual DOM diffing, aka <a href="https://reactjs.org/docs/reconciliation.html">Reconciliation</a>. </p>\n<blockquote>\n<p>When you use React, at a single point in time you can think of the render() function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.</p>\n</blockquote>\n<p>So, when you navigate to a link, Gatsby will automatically 1) remove the old HTML that isn’t needed 2) Insert the new HTML (that’s been cached!), and 3) Jump you to the top of the page. </p>\n<h3>Static rendering of pages</h3>\n<p>This is pretty obvious because Gatsby is a static site generator. But it still merits mention that Gatsby does not rely on server processing (other than serving static files).</p>\n<h3>HTTP/2 push of critical resources</h3>\n<p>Gatsby will push critical resources via HTTP/2 if necessary. This saves vital milliseconds from the browser parsing the HTML and then making requests to the server for additional resources. Note that although the documentation states that Gatsby uses this, I don’t see this in Developer Tools.</p>\n<h3>Per-route code/data splitting</h3>\n<p>Gatsby will only send the JavaScript needed to each page. This saves both bandwidth and CPU time. </p>\n<h3>Prefetch resources</h3>\n<p>The “P” and the “L” of the PRPL pattern specify that you pre-download content from linked pages, so that the next page load is instantaneous.</p>\n<h2>How does development work, if you’re not using webpack?</h2>\n<p>When developing, you’ll run the <code>gatsby develop</code> command. This will open up a lightweight http server on your localhost. This also enables hot-reloading, where changes to code (JavaScript, CSS, etc) are visible instantaneously. </p>\n<p>When you’re ready to deploy, you’ll run <code>gatsby build</code>. This will run a webpack build process that does code-splitting, tree-shaking, and wood-knocking to enable your website to be as fast as possible. </p>\n<h2>But it doesn’t work without JavaScript, right?</h2>\n<p>It works without JavaScript! Seriously, disable JS and try it out. It obviously will not do many of the optimizations like pre-fetching routes, but it works. </p>\n<h2>So what else?</h2>\n<p>That’s not enough? There’s lots more to Gatsby, including the developer experience, ease of setup, and plugins. But that’s a topic for another blog post.</p>',excerpt:"Gatsby is a ReactJS based static site generator. This means that the  build process  will automatically generate all files that are sent to…",frontmatter:{title:"Why is Gatsby so Fast? The PRPL Pattern.",date:"January 10, 2018",author:null}}},pathContext:{slug:"/2018-01-10-why-is-gatsby-fast-prpl/"}}}});
//# sourceMappingURL=path---2018-01-10-why-is-gatsby-fast-prpl-29db110eae96a9b688fa.js.map