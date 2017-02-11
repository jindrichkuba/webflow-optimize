# Webflow.com optimize DevStack
<p><img width="50" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" style="max-width:100%;">
</p>
Gulp <br />
Gulp-concat <br />
Gulp-clean-css <br />
Gulp-imagemin <br />
Gulp-replace <br />
Gulp-htmlmin <br />
Gulp-minfy<br />
<br />
Browser-sync

# installation 
You need to install <a href="http://nodejs.org" target="_blank">Node.js</a>

# Downloads
<pre><code>$ git clone git@github.com:jindrichkuba/webflow-optimize.git</code></pre>

# Launch
<pre><code>$ npm i
$ gulp</code></pre>

# Usage
1) Export your website from <a href="http://webflow.com" target="_blank">webflow.com</a> and save files to main path<br />
2) Change line in #16 gulpfile.js ".webflow.css" to your style <br />
3) Run gulp <br />
4) Minify Javascript (webflow.min.js, modernizr-min.js), Clean CSS (1 css style.min.css), Optimazed Images and Minify Html now are in your build
