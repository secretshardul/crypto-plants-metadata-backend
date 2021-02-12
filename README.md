```sh
curl https://ceramic-clay.3boxlabs.com/api/v0/documents -X POST -d '{
    "doctype": "tile",
    "genesis": {
      "header": {
        "family": "test",
        "controllers": ["did:key:z6MkfZ6S4NVVTEuts8o5xFzRMR8eC6Y1bngoBQNnXiCvhH8H"]
      }
    }
  }' -H "Content-Type: application/json"

curl https://ceramic-clay.3boxlabs.com/api/v0/documents/k2t6wyfsu4pg2qvoorchoj23e8hf3eiis4w7bucllxkmlk91sjgluuag5syphl

curl https://ceramic-clay.3boxlabs.com/api/v0/documents -X POST -d '{
    "foo": "bar"
  }' -H "Content-Type: application/json"
```

# Prepared IDs
```
kjzl6cwe1jw1479uw8qi0dw525djrqe0jd8y3rzs7l4n4c0lc7ph6y1yo045wop
kjzl6cwe1jw146mh4g4t15qu7homv5q7fefhqtm06x5w901afolb5ymccxrtwa8
kjzl6cwe1jw149hwji5v7wzwdykltryt5jziqmtjx5mwt419c6h3mj7nqxjlmd2
kjzl6cwe1jw148qup4nesbe3r5l8g06weukmnl8yukqu2jjzlc5pbujv928g0a1
```