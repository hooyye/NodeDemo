## mysql模块操作mysql数据库。

[mysql](https://www.npmjs.com/package/mysql)

mysql是最流行的关系型数据库，Node对它的支持很好。

## 01.js：增删改查

说明：用`mysql`模块实现对mysql数据库的增删改查。

注意：在SQL语句中需要传参数的地方使用了`?`，这是用来指明应该把参数放在哪里的占位符。在添加到语句中之前，`query`方法会自动把参数转义，以防遭受SQL注入攻击。

## 02：用mysql构建一个工作跟踪程序

此处创建一个简单的web程序，用来记录工作日的工作安排，包括记录工作的日期、花在工作上的时间以及工作完成情况的描述。