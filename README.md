# Very Simple Module Example

This code was composed to reply to a question posed on the node.JS mailing list:
   http://groups.google.com/group/nodejs/browse_thread/thread/8f07c5112689f8c3

## What it does

* app.js is a small app that requires module b
* a.js is a small module with a method sayHello()
* b.js is a module that has a method getA()

b's method getA() returns a reference to the exports of module a. The app can invoke b.getA() to get that reference, and can then call methods of module a without requiring module a directly.

## For more info

See the node.JS docs here: 
   http://nodejs.org/docs/v0.5.0/api/modules.html

# Licence
MIT