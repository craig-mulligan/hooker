// Listen on port 9001
var gith = require('gith').create(8080);
// Import execFile, to run our bash script
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }


var execOptions = {
     maxBuffer: 1024 * 1024 // 1mb
}

setInterval(function() {  console.log("shid!"); }, 2000);

gith({
    repo: 'craig-mulligan/hooker'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
        console.log("master action triggered")
    {
            // Exec a shell script
           exec("bash /app/hook.sh", puts);
    }
});