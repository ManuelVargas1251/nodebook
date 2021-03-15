# nodebook
repo to create node server for general testing and deploying to heroku 


## using 
https://www.npmjs.com/package/http-server
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

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
10. go to http://localhost:8080 to view your ```index.html``` file

## steps to deploy server to heroku
1. create account in heroku/ create new app in heroku
2. add heroku procfile and additional code in index.js file
3. link heroku repo to github repo
4. heroku will auto-deploy your main branch

## notes
```
npm init

npm install --global http-server // install globally for all programs; won't save as dependency to your node app
npm install http-server // installs in node app's modules folder and updates ```package.json```

npx http-server

```

## refs

https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

https://nodejs.org/api/

https://nodejs.org/en/docs/guides/

https://nodejs.org/en/docs/

## other

https://sfconservancy.org/news/2020/jun/23/gitbranchname/
