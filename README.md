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