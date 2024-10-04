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

## Node Modules System

## Summary
### How the Web Works
Client ==> Requests ==> Server ==> Response ==> Client

### Program 
- Node.js runs non-blocking JS code and uses an event-driven code ("Event Loop) for running your logic.
- A Node program exits as soon as there is no more work to do.
- Note: The createServer() event never finished by default

### Asynchronous Code
- JS code is non-blocking
- Use callbacks and events ==> Order changes!

### Requests & Responses
- Parse request data in chunks (Stream & Buffers)
- Avoid "double responses"

### Node.js & Core Modules
- Node.js ships with multiple core modules (http, fs, path, ...)
- Core modules can be imported into any file to be used there
- Import via require('module')

### The Node Module System
- Import via require('./path-to-file') for costume file or require('module') for core & third-part modules
- Export via module.exports or just exports (for multiple exports)