#!/bin/bash

# echo "sleeping for 10 seconds"
# sleep 10

echo mongo_setup.sh time now: `date +"%T" `
mongosh --host mongo:27017 <<EOF
  var cfg = {
    "_id": "rs0",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "mongo:27017",
      },
      {
        "_id": 1,
        "host": "host.docker.internal:27017",
      }    
    ]
  };
  rs.initiate(cfg);
EOF

sleep 100000
