## node

* [1. cheerio](#1)
	* [1.1 cheerio 概念](#1.1)
	* [1.2 cheerio API](#1.2)
	* [1.3 cheerio demo](#1.3)
* [2. superAgent](#2)
	* [2.1 superAgent 概念](#2.2)
	* [2.2 superAgent API](#2.2)
	* [2.3 superAgent demo](#2.3) 
* [3. eventproxy](#3)
	* [3.1 eventproxy 概念](#3.1)
	* [3.2 eventproxy API](#3.2)
	* [3.3 eventproxy demo](#3.3)
* [4. 通过cheerio ,superAgent,eventproxy实现爬虫](#4)


---

<h3 id="1">cheerio</h3>

<h4 id="1.1">cheerio 概念</h4>

[github 地址 ](https://github.com/cheeriojs/cheerio)

cheerio是快速、灵活和精益核心jQuery专门为服务器的实现。实现了jquery的核心子集，完全删除了DOM的操作，cheerio能够解析任何HTML，XML页面。从而真正的实现华丽的API。

<details>
	<summary>特色</summary>
	
> 语法简介
> 高效快捷
> 非常灵活

</details>




<h4 id="1.2">cheerio API</h4>

<details>
  <summary>Selectors</summary>

  - [$( selector, [context], [root] )](#-selector-context-root-)
</details>
<details>
  <summary>Attributes</summary>

  - [.attr( name, value )](#attr-name-value-)
  - [.prop( name, value )](#prop-name-value-)
  - [.data( name, value )](#data-name-value-)
  - [.val( [value] )](#val-value-)
  - [.removeAttr( name )](#removeattr-name-)
  - [.hasClass( className )](#hasclass-classname-)
  - [.addClass( className )](#addclass-classname-)
  - [.removeClass( [className] )](#removeclass-classname-)
  - [.toggleClass( className, [switch] )](#toggleclass-classname-switch-)
  - [.is( selector )](#is-selector-)
  - [.is( element )](#is-element-)
  - [.is( selection )](#is-selection-)
  - [.is( function(index) )](#is-functionindex-)
</details>
<details>
  <summary>Forms</summary>

  - [.serialize()](#serialize)
  - [.serializeArray()](#serializearray)
</details>
<details>
  <summary>Traversing</summary>

  - [.find(selector)](#findselector)
  - [.find(selection)](#findselection)
  - [.find(node)](#findnode)
  - [.parent([selector])](#parentselector)
  - [.parents([selector])](#parentsselector)
  - [.parentsUntil([selector][,filter])](#parentsuntilselectorfilter)
  - [.closest(selector)](#closestselector)
  - [.next([selector])](#nextselector)
  - [.nextAll([selector])](#nextallselector)
  - [.nextUntil([selector], [filter])](#nextuntilselector-filter)
  - [.prev([selector])](#prevselector)
  - [.prevAll([selector])](#prevallselector)
  - [.prevUntil([selector], [filter])](#prevuntilselector-filter)
  - [.slice( start, [end] )](#slice-start-end-)
  - [.siblings([selector])](#siblingsselector)
  - [.children([selector])](#childrenselector)
  - [.contents()](#contents)
  - [.each( function(index, element) )](#each-functionindex-element-)
  - [.map( function(index, element) )](#map-functionindex-element-)
  - [.filter( selector )<br>
     .filter( selection )<br>
     .filter( element )<br>
     .filter( function(index, element) )](#filter-selector---filter-selection---filter-element---filter-functionindex-element-)
  - [.not( selector )<br>
     .not( selection )<br>
     .not( element )<br>
     .not( function(index, elem) )](#not-selector---not-selection---not-element---not-functionindex-elem-)
  - [.has( selector )<br>
     .has( element )](#has-selector---has-element-)
  - [.first()](#first)
  - [.last()](#last)
  - [.eq( i )](#eq-i-)
  - [.get( [i] )](#get-i-)
  - [.index()](#index)
  - [.index( selector )](#index-selector-)
  - [.index( nodeOrSelection )](#index-nodeorselection-)
  - [.end()](#end)
  - [.add( selector [, context] )](#add-selector--context-)
  - [.add( element )](#add-element-)
  - [.add( elements )](#add-elements-)
  - [.add( html )](#add-html-)
  - [.add( selection )](#add-selection-)
  - [.addBack( [filter] )](#addback-filter-)
</details>
<details>
  <summary>Manipulation</summary>

  - [.append( content, [content, ...] )](#append-content-content--)
  - [.appendTo( target )](#appendto-target-)
  - [.prepend( content, [content, ...] )](#prepend-content-content--)
  - [.prependTo( target )](#prependto-target-)
  - [.after( content, [content, ...] )](#after-content-content--)
  - [.insertAfter( target )](#insertafter-target-)
  - [.before( content, [content, ...] )](#before-content-content--)
  - [.insertBefore( target )](#insertbefore-target-)
  - [.remove( [selector] )](#remove-selector-)
  - [.replaceWith( content )](#replacewith-content-)
  - [.empty()](#empty)
  - [.html( [htmlString] )](#html-htmlstring-)
  - [.text( [textString] )](#text-textstring-)
  - [.wrap( content )](#wrap-content-)
  - [.css( [propertName] )<br>
     .css( [ propertyNames] )<br>
     .css( [propertyName], [value] )<br>
     .css( [propertName], [function] )<br>
     .css( [properties] )](#css-propertname---css--propertynames---css-propertyname-value---css-propertname-function---css-properties-)
</details>


<h4 id="1.3">cheerio demo</h4>

```js
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
//=><h2 class="title welcome">Hello there!</h2>

```
**方法获取和修改属性 .attr**
.attr( name, value )

```js
$('ul').attr('id')

$('.apple').attr('id', 'favorite').html()
//=> <li class="apple" id="favorite">Apple</li>

```

**.prop(name,value)**

获取和设置属性的方法。就只有第一个元素的属性值匹配集。

**.serialize() ,返回是一个string类型**

```js
$('<form><input name="foo" value="bar" checked /><input name="foo" value="qux" checked /></form>').serialize()

//=> foo=bar&foo=qux
```

**.serializeArray(),返回是一个数组**

```js
$('<form><input name="foo" value="bar" /></form>').serializeArray()
//=> [ { name: 'foo', value: 'bar' } ]
```

**Traversing 遍历**

**.find(selector)**

**.find(selection)**

**.find(node)**

```js
$('#fruits').find('li').length
//=> 3
$('#fruits').find($('.apple')).length
//=> 1
```

```js
$('.pear').parent().attr('id')
//=> fruits
```

**修改DOM结构的方法**

**.append( content, [content, ...] )**

```js
//old
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
```

```js
//now we can use 'append'
$('ul').append('<li class='plum'>plum</li>');
$.html();
//new
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//      <li class="plum">Plum</li>
//    </ul>
```

**.appendTo( target )**

```js
$('<li class="plum">Plum</li>').appendTo('#fruits')
$.html()
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//      <li class="plum">Plum</li>
//    </ul>
```

**.prepend( content, [content, ...] )**

```js
$('ul').prepend('<li class="plum">Plum</li>')
$.html()
//=>  <ul id="fruits">
//      <li class="plum">Plum</li>
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
```

**.prependTo( target )**

Insert every element in the set of matched elements to the beginning of the target.

```js
$('<li class="plum">Plum</li>').prependTo('#fruits')
$.html()
//=>  <ul id="fruits">
//      <li class="plum">Plum</li>
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
```

**.after( content, [content, ...] )**

```js
$('.apple').after('<li class="plum">Plum</li>')
$.html()
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="plum">Plum</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
```

**.insertAfter( target )**

```js
$('<li class="plum">Plum</li>').insertAfter('.apple')
$.html()
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="plum">Plum</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
```

**.before( content, [content, ...] )**

```js
$('.apple').before('<li class="plum">Plum</li>')
$.html()
//=>  <ul id="fruits">
//      <li class="plum">Plum</li>
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>
```

**.insertBefore( target )**

```js
$('<li class="plum">Plum</li>').insertBefore('.apple')
$.html()
//=>  <ul id="fruits">
//      <li class="plum">Plum</li>
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//      <li class="pear">Pear</li>
//    </ul>

```

**.remove( [selector] )**

```js
$('.pear').remove()
$.html()
//=>  <ul id="fruits">
//      <li class="apple">Apple</li>
//      <li class="orange">Orange</li>
//    </ul>
```

**.html( [htmlString] )**

Gets an html content string from the first selected element. If htmlString is specified, each selected element's content is replaced by the new content.

```js
$('.orange').html()
//=> Orange

$('#fruits').html('<li class="mango">Mango</li>').html()
//=> <li class="mango">Mango</li>
```

**.text( [textString] )**

```js
$('.orange').text()
//=> Orange

$('ul').text()
//=>  Apple
//    Orange
//    Pear

```


如果操作**The "DOM Node" object**还有很多API需要慢慢去学习体会

- tagName
- parentNode
- previousSibling
- nextSibling
- nodeValue
- firstChild
- childNodes
- lastChild


---

<h3 id="2"> superAgent </h3>

superagent是nodejs里一个非常方便的客户端请求代理模块，当你想处理get,post,put,delete,head请求时,你就应该想起该用它了

<h4 id="2.1"> superAgent 概念</h4>
superagent 是一个轻量的,渐进式的ajax api,可读性好,学习曲线低,内部依赖nodejs原生的请求api,适用于nodejs环境下.

<h4 id="2.2"> superAgent API</h4>

这是[链接](http://visionmedia.github.io/superagent/docs/test.html)，是用Mocha‘s文档自动输出的。下面提供了这个测试文档对应的源文件。


<h4 id="2.3"> superAgent demo</h4>

一个简单的post请求，并设置请求头信息的例子

```js
 request
   .post('/api/pet')
   .send({ name: 'Manny', species: 'cat' })
   .set('X-API-Key', 'foobar')
   .set('Accept', 'application/json')
   .end(function(res){
     if (res.ok) {
       alert('yay got ' + JSON.stringify(res.body));
     } else {
       alert('Oh no! error ' + res.text);
     }
   });
```
一个请求的初始化可以用请求对象里合适的方法来执行，然后调用end()来发送请求,下面是一个简单的get请求

```js
 request
   .get('/search')
   .end(function(res){

   });
```

请求方式也可以通过参数传递:

```js
request('GET', '/search').end(callback);
```

node客户端也允许提供绝对路径:

```js
 request
   .get('http://example.com/search')
   .end(function(res){

   });
```

delete,head,post,put和别的http动作都可以使用,来换个方法看看:

```js
request
  .head('/favicon.ico')
  .end(function(res){

  });
```
delete是一个特列,因为它是系统保留的关键字,所以应该用.del()这个名字:

```js
request
  .del('/user/1')
  .end(function(res){

  });
```

http请求默认的方法为get,所以就像你看到的,下面的这个例子也是可用的:

```js
request('/search', function(res){

 });
```

**设置头字段**
设置头字段非常简单，只需调用.set()方法，传递一个名称和值就行:

```js
	request
	   .get('/search')
	   .set('API-Key', 'foobar')
	   .set('Accept', 'application/json')
	   .end(callback);
```

你也可以直接传递一个对象进去，这样一次就可以修改多个头字段:

```js
 request
   .get('/search')
   .set({ 'API-Key': 'foobar', Accept: 'application/json' })
   .end(callback);
```

**query**

```js
request
  .get('/search')
  .query({ query: 'Manny', range: '1..5', order: 'desc' })
  .end(function(res){

  });
```

同样支持传递字符串：

```js
request
    .get('/querystring')
    .query('search=Manny&range=1..5')
    .end(function(res){

    });
```

或者字符串拼接:

```js
request
    .get('/querystring')
    .query('search=Manny')
    .query('range=1..5')
    .end(function(res){

    });
```

**POST/PUT 请求**
一个典型的json post请求看起来就像下面的那样，设置一个合适的Content-type头字段，然后写入一些数据，在这个例子里只是json字符串:

```js
request.post('/user')
    .set('Content-Type', 'application/json')
    .send('{"name":"tj","pet":"tobi"}')
    .end(callback)
```

因为json非常通用，所以就作为默认的Content-type,下面的例子跟上面的一样:

```js
request.post('/user')
    .send({ name: 'tj', pet: 'tobi' })
    .end(callback)
```


默认发送字符串，将设置Content-type为application/x-www-form-urlencoded,多次调用将会通过&来连接，这里的结果为name=tj&pet=tobi:

```js
request.post('/user')
    .send('name=tj')
    .send('pet=tobi')
    .end(callback);
```

**Response status**
响应状态标识可以用来判断请求是否成功，除此之外，可以用superagent来构建理想的restful服务器,这些标识目前定义为:

```js
var type = status / 100 | 0;

 // status / class
 res.status = status;
 res.statusType = type;

 // basics
 res.info = 1 == type;
 res.ok = 2 == type;
 res.clientError = 4 == type;
 res.serverError = 5 == type;
 res.error = 4 == type || 5 == type;

 // sugar
 res.accepted = 202 == status;
 res.noContent = 204 == status || 1223 == status;
 res.badRequest = 400 == status;
 res.unauthorized = 401 == status;
 res.notAcceptable = 406 == status;
 res.notFound = 404 == status;
 res.forbidden = 403 == status;
```

同样```可以通过req.abort()来中止请求.```

**跨域资源共享**
.withCredentials()方法可以激活发送原始cookie的能力,不过只有在Access-Control-Allow-Origin不是一个通配符(*),并且Access-Control-Allow-Credentials为’true’的情况下才行.

```js
request
  .get('http://localhost:4001/')
  .withCredentials()
  .end(function(res){
    assert(200 == res.status);
    assert('tobi' == res.text);
    next();
  })
```

***

<h3 id="3"> eventproxy </h3>

> 世界上本没有嵌套回调，写得人多了，也便有了}}}}}}}}}}}}—— fengmk2


<h4 id="3.1"> eventproxy 概念</h4>
EventProxy 仅仅是一个很轻量的工具，但是能够带来一种事件式编程的思维变化。有几个特点：

- 利用事件机制解耦复杂业务逻辑
- 移除被广为诟病的深度callback嵌套问题
- 将串行等待变成并行等待，提升多异步协作场景下的执行效率
- 友好的Error handling
- 无平台依赖，适合前后端，能用于浏览器和Node.js
- 兼容CMD，AMD以及CommonJS模块环境


<h4 id="3.2"> eventproxy API</h4>

[api文档-链接](http://eventproxy.html5ify.com/api.html)

<h4 id="3.3"> eventproxy demo</h4>

**异步协作**
此处以页面渲染为场景，渲染页面需要模板、数据。假设都需要异步读取。

```js
var ep = new EventProxy();
ep.all('tpl', 'data', function (tpl, data) { // or ep.all(['tpl', 'data'], function (tpl, data) {})
  // 在所有指定的事件触发后，将会被调用执行
  // 参数对应各自的事件名
});
fs.readFile('template.tpl', 'utf-8', function (err, content) {
  ep.emit('tpl', content);
});
db.get('some sql', function (err, result) {
  ep.emit('data', result);
});
```

#####all方法将handler注册到事件组合上。当注册的多个事件都触发后，将会调用handler执行，每个事件传递的数据，将会依照事件名顺序，传入handler作为参数。

**快速创建**

EventProxy提供了create静态方法，可以快速完成注册all事件。

```js
var ep = EventProxy.create('tpl', 'data', function (tpl, data) {
  // TODO
});
```
等同于

```js
var ep = new EventProxy();
ep.all('tpl', 'data', function (tpl, data) {
  // TODO
});
```



**重复异步协作**


此处以读取目录下的所有文件为例，在异步操作中，我们需要在所有异步调用结束后，执行某些操作。

```js
var ep = new EventProxy();
ep.after('got_file', files.length, function (list) {
  // 在所有文件的异步执行结束后将被执行
  // 所有文件的内容都存在list数组中
});
for (var i = 0; i < files.length; i++) {
  fs.readFile(files[i], 'utf-8', function (err, content) {
    // 触发结果事件
    ep.emit('got_file', content);
  });
}
```


after方法适合重复的操作，比如读取10个文件，调用5次数据库等。将handler注册到N次相同事件的触发上。达到指定的触发数，handler将会被调用执行，每次触发的数据，将会按触发顺序，存为数组作为参数传入。

**持续型异步协作**

此处以股票为例，数据和模板都是异步获取，但是数据会持续刷新，视图会需要重新刷新。

```js
var ep = new EventProxy();
ep.tail('tpl', 'data', function (tpl, data) {
  // 在所有指定的事件触发后，将会被调用执行
  // 参数对应各自的事件名的最新数据
});
fs.readFile('template.tpl', 'utf-8', function (err, content) {
  ep.emit('tpl', content);
});
setInterval(function () {
  db.get('some sql', function (err, result) {
    ep.emit('data', result);
  });
}, 2000);
```

tail与all方法比较类似，都是注册到事件组合上。不同在于，指定事件都触发之后，如果事件依旧持续触发，将会在每次触发时调用handler，极像一条尾巴。

**基本事件**
通过事件实现异步协作是EventProxy的主要亮点。除此之外，它还是一个基本的事件库。携带如下基本API

- on/addListener，绑定事件监听器
- emit，触发事件
- once，绑定只执行一次的事件监听器
- removeListener，移除事件的监听器
- removeAllListeners，移除单个事件或者所有事件的监听器

**异常处理**

```js
exports.getContent = function (callback) {
 var ep = new EventProxy();
  ep.all('tpl', 'data', function (tpl, data) {
    // 成功回调
    callback(null, {
      template: tpl,
      data: data
    });
  });
  // 添加error handler
  ep.fail(callback);

  fs.readFile('template.tpl', 'utf-8', ep.done('tpl'));
  db.get('some sql', ep.done('data'));
};

```

[具体详细的内容请看github库中，作者的编写的内容](https://github.com/JacksonTian/eventproxy)


**node中的 异步事件触发：**

```js
var ep = EventProxy.create();

db.check('key', function (err, permission) {
  if (err) {
    return ep.emitLater('error', err);
  }
  ep.emitLater('check', permission);
});

ep.once('check', function (permission) {
  permission && db.get('key', function (err, data) {
    if (err) {
      return ep.emit('error');
    }
    ep.emit('get', data);
  });
});

ep.once('get', function (err, data) {
  if (err) {
    return ep.emit('error', err);
  }
  render(data);
});

ep.on('error', errorHandler);
```

上面代码中，我们把db.check的回调函数中的事件通过emitLater触发，这样,就算db.check的回调函数被同步执行了，事件的触发也还是异步的，ep在当前事件循环中监听了所有的事件，之后的事件循环中才会去触发check事件。代码顺序将和逻辑顺序保持一致。 当然，这么复杂的代码，必须可以像ep.done()一样通过doneLater来解决：

```js
var ep = EventProxy.create();

db.check('key', ep.doneLater('check'));

ep.once('check', function (permission) {
  permission && db.get('key', ep.done('get'));
});

ep.once('get', function (data) {
  render(data);
});

ep.fail(errorHandler);
```
###注意事项
- 请勿使用all作为业务中的事件名。该事件名为保留事件。
- 异常处理部分，请遵循 Node 的最佳实践(回调函数首个参数为异常传递位)。


<h3 id="4">通过以上技术，node实现爬虫</h3>

**代码示例**

```js
// app.js

//使用 eventproxy 控制并发

// 体会 Node.js 的 callback hell 之美

// 学习使用 eventproxy 这一利器控制并发

// 我们需要取出每个主题的第一条评论，这就要求我们对每个主题的链接发起请求，并用 cheerio 去取出其中的第一条评论。

var eventproxy = require('eventproxy');
var superagent = require('superagent');
var cheerio = require('cheerio');
var express = require('express');

var url = require('url');

var app = express();

var cnodeUrl = 'https://cnodejs.org/';

superagent.get(cnodeUrl)
  .end(function (err, res) {
    if (err) {
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element);
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    });

    var ep = new eventproxy();

    ep.after('topic_html', topicUrls.length, function (topics) {
      topics = topics.map(function (topicPair) {
        var topicUrl = topicPair[0];
        var topicHtml = topicPair[1];
        var $ = cheerio.load(topicHtml);
        return ({
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim(),
        });
      });

      console.log('final:');
      console.log(topics);
    });

    topicUrls.forEach(function (topicUrl) {
      superagent.get(topicUrl)
        .end(function (err, res) {
          console.log('fetch ' + topicUrl + ' successful');
          ep.emit('topic_html', [topicUrl, res.text]);
        });
    });
  });
```

### 参考资料
[[译] SuperAgent中文使用文档 -作者 xuwenmin](http://cnodejs.org/topic/5378720ed6e2d16149fa16bd)

[github-node-lesson-作者 alsotang](https://github.com/alsotang/node-lessons)


