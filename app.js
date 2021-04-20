const fs = require('fs');

fs.appendFile('file.txt','Hello from NODE JS', function(err)
{
    if(err)
    {
        console.log('inable to open the file')
    }
    else
    {
        console.log('Done Suscessfully')
    }
}
)