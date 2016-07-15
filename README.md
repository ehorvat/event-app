<h1>Setup</h1>

<ul>
<li>cd into event-app</li>
<li><code>npm install</code></li>
<li><code>npm start</code></li>
</ul>

<h2>Debugging on mobile device with <a href="https://ngrok.com/" target="_blank">ngrok</a></h2>
<ul>
<li><code>npm install ngrok -g</code></li>
<li><code>ngrok http 8081</code></li>
<li>Open event-app/ios/eventapp.xcodeproj in Xcode</li>
<li>Open event-app/ios/eventapp/AppDelegate.m</li>
<li>Update <code>jsCodeLocation = [NSURL URLWithString:@"http://[YOUR NGROK FORWARDING URL]/index.ios.bundle?platform=ios&dev=true"];</code> <br>
with your ngrok Forwarding address </li>
<li>Clean & Run app in Xcode</li>
</ul>
