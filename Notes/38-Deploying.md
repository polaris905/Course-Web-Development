+ 网站资源
  + [Heroku](https://www.heroku.com)
+ 基本操作
  + C9 has already installed Heroku
  + 注意需要在package文件的script里面加上"start": "node app.js"
  ```
  // login
  heroku login
  // git command
  git add .
  git commit -m "(some comments)"
  // create
  heroku create
  git remote -v
  git push heroku master
  // logs
  heroku logs
  // use some basic command under heroku: "heroku run XX"
  heroku run ls
+ MongoLab
  + [mlab](https://www.mlab.com)
  + 在mlab上把创建的数据库的链接加入app.js
