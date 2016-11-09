**Filter**

List number of items.
Make dropdown of filters, that each will call backend on change and update list

Run json generator for additional data
```
node_modules/.bin/json-server --watch web/c/db.json
http://localhost:3000/items?tag_like=apple
```
