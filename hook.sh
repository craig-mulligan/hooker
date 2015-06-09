#!/bin/bash  
echo "testicle"
cd /app && pkill -f node && git fetch && git reset --hard origin/master && /usr/local/bin/node watcher.js