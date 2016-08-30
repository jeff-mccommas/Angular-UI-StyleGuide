<button><a href="http://angular2styleguide.com/" target="_blank" style="font-weight: bold; font-size: 24px; color: #0a4d85">View Demo </a> </button>

<h1>Liaison Style Guide App built using Angular 2 and Bootstrap 4 </h1>
<h3>Installation Guidelines</h3>
<p>Despite BlurAdmin can be run without any development experience, it would be much easier if you already have some. In general following instructions allow you to run a local copy on your&nbsp;machine.</p>
<h3 >Install&nbsp;tools</h3>
<p>If you don’t have any of these tools installed already, you will need&nbsp;to:</p>
<ul>
<li>Download and install <a href="https://git-scm.com/">git</a></li>
<li>Download and install nodejs <a href="https://nodejs.org">https://nodejs.org</a></li>
</ul>
<p><strong>Note</strong>: Make sure you have Node version &gt;= 4.0 and <span class="caps">NPM</span> &gt;=&nbsp;3</p>
<p>Once you have those, you should install these globals with <code>npm install --global</code>:</p>
<ul>
<li>
<pre><code class="lang-bash">npm install -g bower webpack webpack-dev-server typescript@beta
</code></pre>
</li>
</ul>
<h2 id="clone-repository-and-install-dependencies">Clone repository and install&nbsp;dependencies</h2>
<p>You will need to clone the source code of ng2-admin GitHub&nbsp;repository:</p>
git clone https://github.com/Liaison-Intl/Liaison-Angular-StyleGuide.git

<p>After repository is cloned, go inside of the repository directory and install&nbsp;dependencies:</p>
cd Liaison-Admin-Style-Guide
<pre> npm install</pre>
<pre> npm start</pre>
Open new terminal window and run: 
<p>This will setup a working copy of Liaison-Admin-Style-Guide on your local&nbsp;machine.</p>
<h2 id="running-local-copy">Running local&nbsp;copy</h2>
<p>To run a local copy in development mode,&nbsp;execute:</p>
<p>Go to <a href="http://0.0.0.0:3000">http://0.0.0.0:3000</a> or <a href="http://localhost:3000">http://localhost:3000</a> in your&nbsp;browser.</p>
<p>To run the local copy in production mode and build the sources,&nbsp;execute:</p>
npm run prebuild:prod &amp;&amp; npm run build:prod &amp;&amp; npm run server:prod
