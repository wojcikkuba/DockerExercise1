<h4>Budowanie obrazu kontenera:</h4>
<pre><code>docker build -t wojcikkuba/zadanie1:v2 .</code></pre>


<h4>Uruchomienie:</h4>
<pre><code>docker run -d -p 8080:8080 wojcikkuba/zadanie1:v2</code></pre>

<h4>Logi:</h4>
pobranie CONTAINER ID z polecenia <pre><code>docker ps</code></pre> <br>
Następnie <pre><code>docker logs <CONTAINER ID></code></pre><br>
<a data-flickr-embed="true" href="https://www.flickr.com/photos/198045764@N02/52890604515/in/dateposted-public/" title="logs"><img src="https://live.staticflickr.com/65535/52890604515_e66124fe4f_w.jpg" width="400" height="127" alt="logs"/></a>
<br><br>

<h4>Warstwy:</h4>
<pre><code>docker history wojcikkuba/zadanie1:v2</code></pre>

<h4>Działanie w przeglądarce:</h4><br>
<a data-flickr-embed="true" href="https://www.flickr.com/photos/198045764@N02/52890671803/in/dateposted-public/" title="przegladarka"><img src="https://live.staticflickr.com/65535/52890671803_a8f4d272c6_w.jpg" width="380" height="182" alt="przegladarka"/></a>
<br><br>

<h4>Raport Docker Scout:</h4>
<a data-flickr-embed="true" href="https://www.flickr.com/photos/198045764@N02/52891687530/in/dateposted-public/" title="vulner"><img src="https://live.staticflickr.com/65535/52891687530_4388b99c84_w.jpg" width="400" height="84" alt="vulner"/></a>
