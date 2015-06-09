cd /app && git init && git remote add origin https://github.com/craig-mulligan/hooker.git 
chmod 777 "/app/hook.sh"
cd /app && forever start watcher.js