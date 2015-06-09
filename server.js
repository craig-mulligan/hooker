// Listen on port 9001
var gith = require('gith').create(8080);
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

var execOptions = {
     maxBuffer: 1024 * 1024 // 1mb
}

setInterval(function() {  console.log("tintings"); }, 2000);

gith({
    repo: 'craig-mulligan/hooker'
}).on( 'all', function( payload ) {
    console.log("master action triggered")
    if( payload.branch === 'master' )
        console.log("master action triggered")
    {
            // Exec a shell script
            execFile('start.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete test' );
            });
    }
});