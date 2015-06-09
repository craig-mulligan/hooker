cd /app && git init && git remote add origin https://github.com/craig-mulligan/hooker.git 
chmod +x "/app/hook.sh"
cd /app && nodemon watcher.js && nodemon server.js