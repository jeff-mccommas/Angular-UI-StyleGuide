### **View Demo here** [Liaison Style Guide](http://angular2styleguide.com/).


###Liaison Style Guide App built using Angular 2 and Bootstrap 4 ###
<h3>Installation Guidelines</h3>

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
<p>You will need to clone the source code of Liaison-Angular-StyleGuide GitHub&nbsp;repository:</p>
git clone https://github.com/Liaison-Intl/Liaison-Angular-StyleGuide.git

<p>After repository is cloned, go inside of the repository directory and install&nbsp;dependencies:</p>
cd Liaison-Admin-Style-Guide
<pre> npm install</pre>
<pre> npm start</pre>
<p>This will setup a working copy of Liaison-Admin-Style-Guide on your local&nbsp;machine.</p>
<h2 id="running-local-copy">Running local&nbsp;copy</h2>
<p>To run a local copy in development mode,&nbsp;execute:</p>
<p>Go to <a href="http://0.0.0.0:3000">http://0.0.0.0:3000</a> or <a href="http://localhost:3000">http://localhost:3000</a> in your&nbsp;browser.</p>
<p>To run the local copy in production mode and build the sources,&nbsp;execute:</p>
npm run prebuild:prod &amp;&amp; npm run build:prod &amp;&amp; npm run server:prod



## EC2 connect:
puttygen styleguideaws.ppk -O private-openssh -o styleguideaws.pem

sudo ssh -i styleguideaws.pem bitnami@ec2-34-229-215-247.compute-1.amazonaws.com
