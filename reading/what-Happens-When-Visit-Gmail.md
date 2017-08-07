## What interviewers are looking for

1. Do you have a clear, systemic understanding of how web apps work?
2. Do you care about how things work under the hood, generally?
3. Are you able to coherently marshal your thoughts about a system?
4. Can you deal effectively with a very open-ended question, clarifying the questioner's intent and managing your time so as to give a "good" answer?

Good programmers operate fluidly at multiple levels of abstraction and across many components, tying them all together in a coherent story of how processes unfold.

In particular, when you are doing (a) system design and (b) troubleshooting, having those mental models in your head is a key asset.

Think of this as a weeder question to separate out people who can only code via copy/paste/tweak (and don't really understand what's going on) versus people who code based on clear mental models.


## Layman-level outline

* Browser accepts the input "gmail.com".
* Computer sends a request for that page to Google's computers.
* Google's computers process the request and sends the page contents back.
* Browser displays the page.


## High-level outline for interviews

* DNS lookup on the URL, now you have an IP address.
* Use the IP address + the port number (which is explicitly or implicitly described in the URL) to connect to the server via TCP/IP.
* Google is obviously a huge site with many servers, so some kind of load-balancing is involved to route the request to a specific available server.
* Use the TCP stream thus opened up to start sending text to the server.
* Send an HTTP request (which is just text) to tell the server which path, host, and "verb" (GET, POST, etc) you are requesting.
* The HTTP request also contains a variety of other important headers which tell the server who you are and more about what you want.
* The server process the text of the HTTP request into a request object in memory.
* The server probably has some kind of an MVC framework; it processes the request through that.
* The resulting bundle of HTML, inline JavaScript, inline CSS, and possibly inlined binary data, is packaged up into an HTTP response.
* The HTTP response is shipped back through the TCP stream.
* The browser begins parsing the big wad of text in the HTTP response.
* As HTML, JavaScript, CSS are parsed, more HTTP requests are sent out to fetch more assets for the page.
* The browser executes script and renders the results of all its parsing to the viewport.

Note: outlining up to this level is probably good enough for most interviews. 

The next sections are presented in descending order of likely applicability to interviews. 

## More detail on server processing

## More detail on optimizations

* Side note: before really serving the request as such, HTTP redirects will come back in HTTP responses from Google servers, to get the client to a canonical URL
  * http://gmail.com/ -> 
  * https://gmail.com/ -> 
  * https://www.google.com/gmail/ -> 
  * https://mail.google.com/mail/

* lots of different types of caching
* 

## More detail on security

* auto-converting HTTP to HTTPS
* many sites use HTTPS by default everywhere
* how HTTPS basically works
* SSL vs TLS (TLS is basically the new SSL)
* 

## More detail on how a browser renders content

## More detail on Google-specific extensions

## More detail on the networking layer

https://www.igvita.com/2011/10/04/optimizing-http-keep-alive-and-pipelining/
https://www.quora.com/How-do-you-configure-http-persistent-connections-aka-keep-alive-for-a-website
http://security.stackexchange.com/questions/5126/whats-the-difference-between-ssl-tls-and-https
https://f5.com/resources/white-papers/load-balancing-101-nuts-and-bolts
https://www.jmarshall.com/easy/http/#http1.1c3
http://odetocode.com/Articles/743.aspx
https://www.safaribooksonline.com/library/view/http-the-definitive/1565925092/ch04s05.html
http://blog.catchpoint.com/2010/09/17/anatomyhttp/


## More detail on hardware / OS stuff

Note: it's very unlikely you need to know the following either for an interview or for practical development purposes. This sub-outline is included simply to sketch out the vast depth of this question. It's possible to write a multi-volume book series about all the details!




