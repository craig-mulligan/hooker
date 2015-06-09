// Listen on port 9001
var gith = require('gith').create( 8080 );
// Import execFile, to run our bash script
var execFile = require('child_process').execFile;

var execOptions = {
     maxBuffer: 1024 * 1024 // 1mb
}

setTimeout(function() {  console.log("running"); }, 2000);

gith({
    repo: 'craig-mulligan/hooker'
}).on( 'all', function( payload ) {
    if( payload.branch === 'master' )
    {
            // Exec a shell script
            execFile('start.sh', function(error, stdout, stderr) {
                    // Log success in some manner
                    console.log( 'exec complete test' );
            });
    }
});