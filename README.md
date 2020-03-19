# Node-mini-server without frameworks

The motivation for choosing an approach without framework was to develop an understanding for JavaScript and Node as they are.
I was especially determined to avoid https://www.npmjs.com/package/express.

What does this server offer?
- Semantic HTML, CSS.
- Frontend JavaScript.
- Favicon.
- Asynchronous/non-blocking.
- No frameworks.
- Standalone server. (No Nginx or Apache needed)

What does this server not offer?
- No testing. Such as with: https://www.npmjs.com/package/jest
- No database. Such as with https://www.npmjs.com/package/sqlite3 (SQL)
- No API for frontend-backend communication.
- No SSL, TLS, HTTPS support.

What improvements could be made?
- Use of Promises and Async/Await. For example, see:
  https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c
- Implement SSL, TLS, HTTPS support. For example, see:
  https://nodejs.org/api/tls.html#tls_tls_ssl
- Using TypeScript instead of JavaScript. TypeScript is a superset of JavaScript which transpiles to plain JavaScript.
  TypeScript is statically typed and is better debugged than JavaScript. For example, see:
  https://www.typescriptlang.org/
  
What else to consider?
- Although standalone Node is fully functional, Nginx or Apache in combination with Node bring some advantages.
  1. Nginx is faster than Node and Apache at serving static HTML.
  2. When Node crashes, having Nginx set up as remote proxy allows serving a custom error page.
  3. Nginx and Apache are better tested than Node as they are more frequently exposed to the internet.
- Bundling frontend JavaScript you may want to use JavaScript modules in the browser (.mjs file ending, <script type="module">, import and export).
  For example see: https://developers.google.com/web/fundamentals/primers/modules

What about coding style?
- I didn't use semicolons. JavaScript uses Automatic Semicolon Insertion (ASI). Semicolons are therefore not necessary, at all.
  However, it is a personal preference not to use semicolons.
  Google publishes a JavaScript Style Guide which requires the use of semicolons. See:
  https://google.github.io/styleguide/jsguide.html#formatting-semicolons-are-required
- Use const over let over var. See:
  https://google.github.io/styleguide/jsguide.html#features-use-const-and-let
- Enforcement of accessibility (ARIA conformity, keyboard navigation) is easily ensured using Semantic HTML. See for example:
  https://codeburst.io/seven-ways-to-make-your-web-app-more-accessible-411a8c716fcb




