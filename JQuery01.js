/**
 * Created by Administrator on 2017/6/1.
 */
//主要是研究jquery 2.0版本的源码，它不在支持IE6，7，8；
(function(){
    /*
        其实在jquery中$()和jquery()中两个方法是一样的
        这是一个匿名函数自调，它的好处主要是在里面写的东西都是局部的，那么怎么把匿名函数中定义的接口向外提供呢？
        例如：在里面写window.$=$;就可以了，就是把$这个方法挂在了window对象上
    */
    //
    //(21-94行定义了一些变量和函数，其中最重要的jQuery=function(){}就是平时用到的$(),jQuery())JQuery01.html JQuery02.html
    //
    //(96-283行主要是给JQ添加一些对象和属性，JQ是一个基于面向对象的)JQuery03.html JQuery02.html
    //
    //(285-347行 extend：JQ的继承方法，便于后期维护和编写插件)JQuery04.html
    //
    //(349-817行jQuery.extend():扩展一些工具方法)JQuery05.html
    //
    //(877-2856行 Sizzle:复杂选择器的实现)
    //
    //(2880-3042行Callbacks:jquery中的回调对象：对函数的一个统一管理)  JQuery06.html
    //
    //(3043-3183行Deferred:延迟对象：对异步的统一管理)  JQuery07.html
    //
    //(3184-3295行support:功能检测：判断浏览器信息) JQuery08.html
    //
    //(3308-3652行data():数据缓存) JQuery09.html
    //
    //(3653-3797行queue():队列管理入队，dequeue()出队)  JQuery10.html
    //
    //(3803-4299行attr() prop() val() addClass()等：对元素属性的操作)  JQuery11.html
    //
    //(4300-5128行 on() trigger():事件操作的方法)
    //
    //(5140-6057行DOM操作：添加 删除 获取 包装 DOM帅选)
    //
    //(6058-6620行 css():样式的操作)
    //
    //(6621-7854行提交的数据和AJAX():ajax() load() getJson())
    //
    //(7855-8584行animate():运动的方法)
    //
    //(8585-8792行offset()等：位置和尺寸的方法)
    //
    //(8804-8821行JQ支持模块化，不光是支持AMD)
    //
    //(8826行对外提供$(),jQuery()的接口)window.jQuery = window.$ = jQuery;
})();