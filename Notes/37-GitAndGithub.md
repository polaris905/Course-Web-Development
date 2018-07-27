+ Git
  + [Git](http://git-scm.com)
  + Git and Github are different things.
+ Git Basic(在C9可以直接操作git)
  ```
  // show version
  git --version
  // 把当前文件夹作为git要记录的文件夹，执行后会在当前文件夹产生一个隐藏的.git文件夹，可以用ls -a命令看到
  git init
  // show some detals of status
  git status
  // 从上一次记录点开始，如果有文件发生变化了，哪些文件的变化需要追踪，就用add添加哪些文件
  git add <fileName>
  // 把上一条命令改为一次性添加所有发生变化且未被追踪的文件
  git add .
  // 把需要追踪的文件add后，用commit可以一次性把添加的文件的变化情况保存到最新记录点
  git commit - m "(User Comments)"
  ```
+ Git Checkout
  ```
  // show all the logs before current point
  git log
  // use the commit name listed in the logs to locate to the target point
  git checkout <head reference>
  // back to master
  git checkout master
  // revert to some time point
  git revert --no-commit 5f374d82497141c330923b6f953dfa23fa5b9c2b..HEAD
  git commit -m -"(User Comments)"
+ Github
  + [C9 to Github](http://lepidllama.net/blog/how-to-push-an-existing-cloud9-project-to-github/) 
