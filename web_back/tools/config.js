// 这个js文件用来保存网站中的一些配置信息
// 例如，所有的接口地址，都可以统一保存在这个文件中
// 下面的这些保存配置新东西的变量最好避免被其他代码不小心修改了
// 可以将变量命名书写为全大写的形式
// 命名额多个部分使用_连接（下划线命名法）
var BASE_URL = "http://localhost:8000";

var LOGIN = BASE_URL + "/admin/login";
var LOGOUT = BASE_URL + "/admin/logout";