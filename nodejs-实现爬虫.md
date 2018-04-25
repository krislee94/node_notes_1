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

<h4 id="2.1"> superAgent 概念</h4>
<h4 id="2.2"> superAgent API</h4>
<h4 id="2.3"> superAgent demo</h4>

<h3 id="3"> eventproxy </h3>

<h4 id="3.1"> eventproxy 概念</h4>
<h4 id="3.2"> eventproxy API</h4>
<h4 id="3.3"> eventproxy demo</h4>


### 参考资料
[[译] SuperAgent中文使用文档 -作者 xuwenmin](http://cnodejs.org/topic/5378720ed6e2d16149fa16bd)


