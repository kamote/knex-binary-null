# knex-binary-null

### Error

```
➜  knex-binary-null node index.js
update error { RequestError: Implicit conversion from data type nvarchar to varbinary(max) is not allowed. Use the CONVERT function to run this query.
    at handleError (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/mssql/lib/tedious.js:566:15)
    at emitOne (events.js:116:13)
    at Connection.emit (events.js:211:7)
    at Parser.tokenStreamParser.on.token (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/connection.js:716:12)
    at emitOne (events.js:116:13)
    at Parser.emit (events.js:211:7)
    at Parser.parser.on.token (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/token-stream-parser.js:27:14)
    at emitOne (events.js:116:13)
    at Parser.emit (events.js:211:7)
    at addChunk (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_readable.js:297:12)
    at readableAddChunk (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_readable.js:279:11)
    at Parser.Readable.push (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_readable.js:240:10)
    at Parser.Transform.push (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_transform.js:139:32)
    at doneParsing (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/stream-parser.js:80:14)
    at token (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/infoerror-token-parser.js:48:5)
    at call.lineNumber (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/infoerror-token-parser.js:13:19)
  code: 'EREQUEST',
  number: 257,
  lineNumber: 1,
  state: 3,
  class: 16,
  serverName: '9332c0854f3d',
  procName: '',
  originalError: 
   { Error: Implicit conversion from data type nvarchar to varbinary(max) is not allowed. Use the CONVERT function to run this query.
    at handleError (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/mssql/lib/tedious.js:564:19)
    at emitOne (events.js:116:13)
    at Connection.emit (events.js:211:7)
    at Parser.tokenStreamParser.on.token (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/connection.js:716:12)
    at emitOne (events.js:116:13)
    at Parser.emit (events.js:211:7)
    at Parser.parser.on.token (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/token-stream-parser.js:27:14)
    at emitOne (events.js:116:13)
    at Parser.emit (events.js:211:7)
    at addChunk (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_readable.js:297:12)
    at readableAddChunk (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_readable.js:279:11)
    at Parser.Readable.push (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_readable.js:240:10)
    at Parser.Transform.push (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/readable-stream/lib/_stream_transform.js:139:32)
    at doneParsing (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/stream-parser.js:80:14)
    at token (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/infoerror-token-parser.js:48:5)
    at call.lineNumber (/Users/kamote/NodeProjects/fpc/knex-binary-null/node_modules/tedious/lib/token/infoerror-token-parser.js:13:19)
     info: 
      { number: 257,
        state: 3,
        class: 16,
        message: 'Implicit conversion from data type nvarchar to varbinary(max) is not allowed. Use the CONVERT function to run this query.',
        serverName: '9332c0854f3d',
        procName: '',
        lineNumber: 1,
        name: 'ERROR',
        event: 'errorMessage' } },
  name: 'RequestError',
  precedingErrors: [] }
```
