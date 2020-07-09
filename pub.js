'use strict';

const shell = require('shelljs');


shell.exec('git add .');
shell.exec('git cz');
// shell.exec('git push origin master');