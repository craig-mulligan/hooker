#!/bin/bash  
echo "testicle"
cd /app && git fetch && git reset --hard origin/master && /usr/local/bin/node server.js