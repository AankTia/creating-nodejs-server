# Section 3 - Understanding The Basic

## Core Modules
http -> Launch a server, send requests.
https -> Launch a SSL server
fs -> 
path
os

## Node.js Program Lifecycle
- node app.js
start script -> Parse Code, Register, Variable & Fuctions -> [The Node Application] Event Loop (keep on running as long as there are event listeners registered) -> process ecit

## Controlling the Node.js Process
Want to quit your running Node.js server?

You can always do that by pressing CTRL + C in the terminal/ command prompt window where you started your server (i.e. where you ran node app.js).

## Understanding Requests
req.url
req.method
req.headers

## Sending Response
res.setHeader
res.write
res.end

On both requests and responses, Http headers are added to transport metadata from A to B.

The following article provides a great overview of available headers and their role: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

Whilst this article is a great resource, especially to dive deeper, please don't learn this list by heart though! You'll encounter many of these headers throughout the course and I'll explain them when we need them.

## Routing Requests

## Redirecting Requests

## Parsing Request Bodies
### Stream & Buffers
Stream
Idea: Start working on the Data early

## Event Drivent Code Execution

## Blocking & Non-Blocking Code

## Node.js behind the scene
### Single Thread, Event Loop & Blocking Code
Single JavaScript Thread ?

Event Loop ?
- Handle Event Callbacks

Worker Pool
- Do the Heavy Lifting

The Event Loop
- Timers (Execute setTimeout, setInterval Callbacks)
- Pending Callback (Execute I/O-related callback that were deffered)
- Poll (Retrive new I/O events, execute their callbaks)
- Check (Execute setImmediate() callbacks)
- Close Callbacks (Execute all 'close' event callbacks)

