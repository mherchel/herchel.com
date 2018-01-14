webpackJsonp([39229358024304],{386:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Mike Herchel",author:"Mike Herchel"}},markdownRemark:{id:"/Users/mherchel/sites/herchel-new/src/blog/2015-06-16-importing-css-breakpoints-js/index.md absPath of file >>> MarkdownRemark",html:'<p><em>Note this article was originally published on <a href="https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript">Lullabot.com</a>.</em></p>\n<p>There are a lot of challenges within responsive web design, and one that that has constantly been a pain is triggering JavaScript based on the current CSS media query breakpoint. The problem is that the breakpoints are in CSS, which JavaScript has no native way to access. Many solutions (including <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia">window.matchMedia()</a>, and <a href="http://wicky.nillia.ms/enquire.js/">Enquire.js</a>) involve declaring your breakpoints in both CSS and JS, or require IE10+. The problem with these solutions is that when you change a breakpoint value, you have to change it twice. However, it doesn’t need to be like this.</p>\n<h2>A Simpler Solution</h2>\n<p>A quick and easy solution to this problem is to have your JS import the breakpoints directly from the CSS values in the DOM. This solution brings the current breakpoint variable into your JS in a way that’s</p>\n<ul>\n<li>Simple &#x26; Lightweight</li>\n<li><a href="http://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a></li>\n<li>Compatible with all browsers that support media queries (IE9+)</li>\n</ul>\n<p>To see where we’re going with this, check out this <a href="http://codepen.io/mherchel/pen/gbygBd">fully functioning codepen</a>. Now, let’s get started!</p>\n<h2>Declare your breakpoints</h2>\n<p>For simplicity, this code is straight CSS and can easily be abstracted to Sass or Less.</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/**\n * These values will not show up in content, but can be \n * queried by JavaScript to know which breakpoint is active.\n * Add or remove as many breakpoints as you like.\n */</span>\n<span class="token selector">body:before</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"smartphone"</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* Prevent from displaying. */</span>\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">body:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"tablet"</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1100px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">body:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">"desktop"</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Note that I have to hide the <code>::before</code> pseudo-element so it doesn’t show to the user.</p>\n<h2>Importing the Breakpoints into JavaScript</h2>\n<p>This is the magic that queries the property for the current breakpoint. In this combination of jQuery and javascript, I’m using an object to store the value.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">var</span> breakpoint <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nbreakpoint<span class="token punctuation">.</span><span class="token function-variable function">refreshValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\':before\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\"/g</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>There’s a couple things going on here. I’m querying the content property on the <code>::before</code> pseudo element using this <a href="http://davidwalsh.name/pseudo-element">method popularized by David Walsh</a>. I can’t attach the content property directly to the body tag, because Internet Explorer 9 will return a value of “normal” when querying. IE10 and IE11 work fine. Ugh!</p>\n<p>Firefox and IE return the value with double quotes, while other browsers do not. To get consistent values I’m using replace() with regex to strip those out.</p>\n<h2>Trigger on resize and page load</h2>\n<p>Breakpoints change based on your browser’s viewport width, so I need to update the value when the browser is resized. I also trigger a resize event on the initial page load to get the first value.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  breakpoint<span class="token punctuation">.</span><span class="token function">refreshValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>In use</h2>\n<p>This is a simple if-else statement that queries the current breakpoint, and runs code based on the result.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>breakpoint<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">\'tablet\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Tablet breakpoint\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Some other breakpoint\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2>Sample Use Case</h2>\n<p>While redeveloping the website for <a href="http://www.syfy.com/">Syfy.com</a>, I had an interesting problem where I needed to inject a 728x90 leaderboard advertisement within the second row of tiles. The difficult part of this is that the number of tiles per row changes depending on the current breakpoint.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/breakpoint-tiles-0676e5937a5b921723dc65974d3ed12b-67536.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.69291338582677%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABY0lEQVQoz4WSSW/CMBCF8/9/BYdKVKIiEHpB6o0LSYsaKAlkgZAFWmUBytIT6NUzFSGgQC19mudt/Ma2pKoahkMDhmFyJPr9PnT9Q+gxY5p2rq/7RW1ZLiRVfYPjzDCZBBwJXR9gNHLy/nR6nvvrh6U6CBaQul1NODIwGJgciV7vHeOxgzCc55xc0EG2PRHzLhPHKdbrDbPd7iDRZt+nTQuOBI2RK8L3o1x7XsgHW9Y5YZJk2Gx2zH7/A0nTenBdn61TJGisrFyaMwzrfslld6iqr3mJlIDiavXNDugRZrNIrPeZoo6iL0jV6iNarWc0mwoUpcW6XpeFG4+hhRTjOMNyuf7fYafTQbvdFkmakGUFjYYi+i83S6bHCoI53ydR1PO5cAjR0jTLbV+XUdSU/OmpgUrlAbWajMXiE1m2vCBPePnPgpsOkyTF4XBgjscjrhsnjOOEv8IJx/FKtW1POeG99gtqURSlrkrhIQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Sample use case"\n        title=""\n        src="/static/breakpoint-tiles-0676e5937a5b921723dc65974d3ed12b-42603.png"\n        srcset="/static/breakpoint-tiles-0676e5937a5b921723dc65974d3ed12b-f931c.png 200w,\n/static/breakpoint-tiles-0676e5937a5b921723dc65974d3ed12b-e8031.png 400w,\n/static/breakpoint-tiles-0676e5937a5b921723dc65974d3ed12b-42603.png 800w,\n/static/breakpoint-tiles-0676e5937a5b921723dc65974d3ed12b-67536.png 889w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Below is a simplified example of how I handled this.</p>\n<h3>1. Get the current breakpoint</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">/**\n * Global: Get current CSS breakpoint\n */</span>\n \n<span class="token keyword">var</span> breakpoint <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nbreakpoint<span class="token punctuation">.</span><span class="token function-variable function">refreshValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'body\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\':before\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/\\"/g</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>2. Function to pass the number of columns to leaderboardMoveHelper()</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">/**\n * Pass the number of columns to leaderboardMoveHelper() to do all the work\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">leaderboardMove</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>breakpoint<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">\'tablet_narrow\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">leaderboardMoveHelper</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>breakpoint<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">\'tablet_wide\'</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>breakpoint<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">\'normal\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">leaderboardMoveHelper</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>breakpoint<span class="token punctuation">.</span>value <span class="token operator">==</span> <span class="token string">\'wide\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">leaderboardMoveHelper</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>3. Helper function to move the leaderboard to the appropriate location within the DOM</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">/**\n * Move the leaderboard to the second row\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">leaderboardMoveHelper</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>columns<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> $tileView       <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.tile-container\'</span><span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      $leaderboard    <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.ad-leaderboard.processed\'</span><span class="token punctuation">,</span> $tileView<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token comment">// Move the leaderboard</span>\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">\'.tile:nth-child(\'</span> <span class="token operator">+</span> <span class="token punctuation">(</span>columns<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">\')\'</span><span class="token punctuation">,</span> $tileView<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>$leaderboard<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// Indicate it\'s moved</span>\n  $leaderboard<span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">\'js-leaderboard-processed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  $tileView<span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">\'js-leaderboard-processed\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>4. Run the JS on browser resize and page load</h3>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code><span class="token comment">/**\n* Execute\n*/</span>\n<span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  breakpoint<span class="token punctuation">.</span><span class="token function">refreshValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">leaderboardMove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Conclusion</h2>\n<p>This is a simplification of a very useful technique. The same logic can also be used to pass breakpoint states of elements by modifying pseudo-elements of any element within the DOM. For example, if you have an element that has a CSS change between multiple breakpoints, you can pass and query the pseudo-element, or can even query for the changing CSS property itself. Feel free to <a href="http://codepen.io/mherchel/pen/gbygBd">hack around and fork this over at Codepen</a>.</p>',frontmatter:{title:"Importing CSS Breakpoints Into Javascript",date:"June 16, 2015"}}},pathContext:{slug:"/2015-06-16-importing-css-breakpoints-js/"}}}});
//# sourceMappingURL=path---2015-06-16-importing-css-breakpoints-js-8a0ca42c23a8b570a1cb.js.map