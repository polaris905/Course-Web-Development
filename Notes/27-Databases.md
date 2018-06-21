+ Installing MangoDB
  + [Note about installing MangoDB](https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/5437302?start=0)
  + [MangoDB](https://www.mongodb.com/)
  + [Note about the mongoose promise library](https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/7282872?start=0)
  + [Mongoose](https://www.mongoosejs.com)
  + What is ManoDB? It is the most popular Non-SQL DB with Node.js and Express.
+ Mongo Shell Basics
  + mongod 在运行环境中启动MongoDB，保持运行状态
  + mongo 在另外一个终端窗口连接进入MongoDB命令行终端，就像console的功能
  + help 
  + show dbs 显示数据容量
  + use
  ```
  // 切换到demo数据库
  use demo
  ```
  + insert
  ```
  // db指代的是上面切换到的demo，dogs是collections即将创建，insert后面是要加入的一个实例
  db.dogs.insert({name: "Rusty", breed: "Mutt"})
  // 显示目前的collections
  show collections
  ```
  + find
  ```
  // 列出dogs下面所有的实例
  db.dogs.find()
  // 列出dogs下面name为Rusty的实例
  db.dogs.find({name: "Rusty"})
  ```
  + update
  ```
  // 把名字为Rusty的实例变更为名字为Tater，然后加上一个isCute的值，注意，如果不用$set指令，则会将原来名字为Rusty的实例覆盖成为后面参数的内容
  db.dogs.update({name: Rusty}, {$set: {name: "Tater", isCute: true}})
  ```
  + remove
  ```
  // 删除名字为Rusty的所有实例
  db.dogs.remove({name: Rusty})
  ```
