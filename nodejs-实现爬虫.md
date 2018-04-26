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


<h3 id="3"> eventproxy </h3>

<h4 id="3.1"> eventproxy 概念</h4>
<h4 id="3.2"> eventproxy API</h4>
<h4 id="3.3"> eventproxy demo</h4>


### 参考资料
[[译] SuperAgent中文使用文档 -作者 xuwenmin](http://cnodejs.org/topic/5378720ed6e2d16149fa16bd)


