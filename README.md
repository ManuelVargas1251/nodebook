# nodebook
repo to create node server for general testing and deploying to heroku 


## using 
https://www.npmjs.com/package/http-server

## steps to start server locally
1. install node 
2. create nodejs repo in github.com or github desktop
3. if created repo on github.com, clone the repo locally
4. open repo with vscode
5. create index.html & index.js
6. open vscode terminal, create node project: 
``` npm init```
7. install server package as a dependency to the repo
```npm install http-server```
8. now turn on the server
9. ```npx http-server```
10. go to http://localhost:8080 to view ```index.html```

## steps to deploy server to heroku
1. create account in heroku
2. add heroku files to repo
3. link heroku repo to github repo
4. deploy

## notes
```
npm init

npm install --global http-server
npm install http-server

npx http-server

```

## refs

https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

https://nodejs.org/api/

https://nodejs.org/en/docs/guides/

https://nodejs.org/en/docs/

## other

https://sfconservancy.org/news/2020/jun/23/gitbranchname/
