yarn global add live-server
export PATH="$PATH:$(yarn global bin)"
live-server public
yarn global add babel-cli@6.24.1
yarn init
yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2
babel src/app.js --out-file=public/scripts/app.js --presets=env,react
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch #automatic change

if node_modules deleted, yarn install will look at dependencaies and install it for U.

babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public/

google react dom elements -> <button \className=""\ >
google react dom events -> on submit in form 

not good idea to use globals. 
remove em!
yarn global remove babel-cli live-server

//install em locally 
yarn add live-server babel-cli@6.24.1

//manually add script to package.json
//scripts is an object,
//`key`, `value` -> name, script itself 
//yarn run `key` -> it executes value of key 

yarn add webpack@3.1.0

node webpack.config.js

node `path` is a module of node 

//how to use third party? 
yarn add lib
import it, use it 

//yarn add react@16.0.0 react-dom@16.0.0

webpack-dev-server actually dowb not create a bundle.js file, it generates a file in RAM and uses it.

//yarn add webpack-dev-server@2.5.1 to support cool es6 class properties features
//remember class properties outside constructor should not have let,const,var
//this (s6e12) feature binds methods autoatically, actually you do not need to override constructor for each component
//Your current version of Yarn is out of date. The latest version is "1.22.4", while you're on "1.21.1".
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript guide to JS 
// sass-lang.com to scss

saas -> // partial file is a file that is part of style, it should start with underscore (_)
React components must start with Capital letter

//s0803 07:26 -> 981220:21:12:23

//Normalize.css to reset css, i.e all browsers start from same begining
//s0806 08:20 981221:21:59:16


Google React Router 

hash in url is used to mve to that section 
a.com/dd#contact-us

redux.js.org //for redux , a good example 

to use spread in objects, we should install a babel plugin:

babel object spread 
yarn add babel-plugin-transform-object-rest-spread@6.23.0

https://redux.js.org/basics/usage-with-react/

//s10e12 
05:22 981228 

s11e2
08:37 

regex site:
regex101.com

momentjs //library for time
airbnb react-dates 

//s11e9 1:49 980101:00:57:15

//for navigation you can use both props.history.push('');
//and <Link>

//how to add redux developer tools
google redux developer tools extension and extension is important 
visit https://github.com/zalmoxisus/redux-devtools-extension it has instructions
then you should add a line to createStore
 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

 //jest is a js test framework, jasmin (mocha) ->node  , karma -> angular
 yarn run test == yarn test

 jest looks for *.test.js file

//to pass arguments to test command, add two hyphens 
 yarn test -- --watch 

 //installing enzyme: 
 raf : request animation frame 
 yarn add enzyme@3.0.0 enzyme-adapter-react-16@1.0.0 raf@3.3.2
                       enzyme-adapter-react-16

//enzyme-to-json 

//Git
untracked Files | Unstaged Changes | Staged Changes | Commits 

untracked Files are just files . 
git add : moves a file from 'untracked Files' to 'Staged Changes'. 'Staged Changes' are not tracked by git either.
after 'Staged Changes' it is commit. 'commit' is tracked . 

Unstaged Changes is changed files which git is tracking, that is, changing an already committed file
that is not being added to staged changes yet. 

goto root of project 
1)
git init

git add . //add all files 

git commit -m "YOUR MESSAGE "

git status
git log

google connecting to git via ssh 

communicating to github via ssh: 
ls -a ~/.ssh this is where ssh keys exist
ssh-keygen -t rsa -b 4096 -C "ashkaninia@gmail.com" //add new one, just hit enter
eval "$(ssh-agent -s)"

ssh-add ~/.ssh/id_rsa
sudo apt-get install xclip
xclip -sel clip < ~/.ssh/id_rsa.pub //this copies ssh key 

go to github->profile-> ssh and gpg keys  press ctrl+v to paste and add a new ssh key 

goto github repo and from clone menu select ssh 

git remote add origin git@github.com:shahazat/expensifyApp.git
git remote -v 

//-u is used one time 
template is:
git push    remote branch 
git push -u origin master 

if encountered errors, use
 git pull --rebase git@github.com:shahazat/expensifyApp.git

express is web framework for Node.js
expressjs.com
yarn add express@4.15.4
node server/server.js to run it!

Heroku is application deployment platform like AWS Elastic Beanstalk or DigitalOcean 
we use it via heroku cli 

sudo snap install --classic heroku

heroku --version
heroku login 
heruku create YOUR_APP_NAME


git remote : shows heroku 

git commit 

add start and heroku-postbuild to package.json 

git push heroku master  //this should build and deploy your app.

heroku open 
heroku logs 

//yarn install --production : creates node_modules, not devDependencies
yarn add X --dev  