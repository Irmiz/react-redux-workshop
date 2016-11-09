**Lazy pager**

List number of items on page. Add more from ajax response once reached  bottom.

Initial data:
```
[
  {
    "id": "582317acc7d29feda448cb47",
    "picture": "http://placehold.it/32x32",
    "title": "EXOSIS",
    "price": 455
  },
  {
    "id": "582317ac84a819e756ca1e33",
    "picture": "http://placehold.it/32x32",
    "title": "COMFIRM",
    "price": 90
  },
  {
    "id": "582317ac64e73bd7445469fa",
    "picture": "http://placehold.it/32x32",
    "title": "IMPERIUM",
    "price": 238
  },
  {
    "id": "582317ac65b71e9bee36bee5",
    "picture": "http://placehold.it/32x32",
    "title": "TUBALUM",
    "price": 484
  },
  {
    "id": "582317ac8f606710b3d39849",
    "picture": "http://placehold.it/32x32",
    "title": "OHMNET",
    "price": 481
  }
]
```
Run json generator for additional data
```
node_modules/.bin/json-server --watch web/a/db.json
```
