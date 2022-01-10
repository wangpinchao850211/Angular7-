# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Project Technical point Introduce
一、组件：
0、index.html: 注册自定义事件：localStorage.setItem
1、app.module: 
    ①、cdk引入: 这里只引入了overlay的demo：在angular_material下有
        ①、cdk-overlay的自定义使用；
        ②、使用继承OverlayContainer的继承类CdkOverlayContainer和指令实现动态执行tooltip的使用，可以封装一下；需见源码demo例子深入研究
    ②、store引入：tab使用可见flexable项目
2、app-routing.module：①、有辅助路由的使用
3、appComponent：
    ①、主题var函数的简单使用（见theme.scss结合本组件scss）
    ②、监听滚动条滚动，同时防抖，去加载数据
    ③、beforeunload监听页面刷新
    ④、监听路由变化：this.router.events
    ⑤、用空格替换加法符号的正则表达式处理路径：deSerialize
4、app-menu：
    ①、nz菜单的使用及数据menu.json的获取
    ②、使用material自定义注册icon使用
5、home component：
    ①、typeCache保证store的Action为独一无二的的方法
    ②、路由动画：HostBinding的绑定使用
    ③、app-count-down：倒计时器组件(使用rxjs实现)；除了这个还有实现了下变更storage操作，配合home组件实现监听storage的变更 
    ④、4.1、单页面监听storage事件: 自定义一个事件将localStorage.setItem设置为创建这个事件的母函数，在组件内部监听自定义事件名(可见index.html自定义code，实现home和count组件的storage的监听) 4.2、同域名不同页面的监听正常使用onstorage事件即可
    ⑤、ngTemplateOutlet，ng-template渲染
    ⑥、货币原生实现
    ⑦、类型校验合并两个对象；创建字符串列表映射至 `K: V` 的函数 （组件的constructor有使用例子）
6、routes组件有路由传值的基本使用，还有辅助路由(`待深入`)的使用
7、communication组件介绍HTML 属性 和 Dom 属性的关系
8、directive组件：
    ①、自定义droplist点击外部关闭指令，完美实现
    ②、注解的使用，现在来看可阻止函数的执行，需要多看看源码，查查注解的深入作用
    ③、监听滚动条滚动和指令里引入renderer，操作dom
9、form表单的各种实现，可深入实现动态表单问卷试试！！！(`细看下※※※`)
10、DependencyInjection组件，简单介绍依赖注入方式实现多实例的例子
11、life-cycle组件：
    ①、触发变更检测机制就是调用DoCheck (实现$watch功能), 同时解释changeDetection变更检测，同时简单使用ngOnChange
    ①、自定义radio，同时将值传入view-container-ref组件，实用get，set方式实现了下
    ③、ViewContainerRef动态变更模板，实用radio动态变更值来改变的(`待学学※※※`)
12、peek-a-boo组件：
    ①、通过指令，调取service，通过service调用subject，发射一个log信息，在spy-parent组件订阅这个subject，将信息累加到--Spy Lifecycle Hook Log里
    ②、检测AfterView生命周期
    ③、检测AfterContent生命周期
13、ng-content的详细实用
14、work-member-list组件：使用`date-fns`处理日期操作
15、文件上传`要结合glr的原生写法`
16、menu使用循环嵌套组件，封装menu!，有使用render.listen
17、rxjs: 基础使用方式需要细看，具体使用有：
    ①、使用指令调用Subject对象进行点击事件的监听和去抖
    ②、计时器的实现
    ③、fromEvent监听鼠标移入事件
    ④、search debounce，流控制各种过滤：inputObservables
    ⑤、路由的Observable订阅
    ⑥、rxjs的基础概念需要深入理解！！！面试可用
18、ngx-store的数字增加减少的简单使用，具体的store使用可见tab或者flexable项目的theme主题的应用
19、chain-modle包括SharedModule的使用(`里面细看提取下重点好※※※`)
    ①、有自己封装的dialog、tooltip、message(`要结合overlay还有flexable的提取一起整体整理下这几个好的封装`)
    ②、block-C的代表组件封装可学学(`可提取下精华，剩下删掉`)
20、angular_material下overlay文件：
    ①、`两个组件菜单是使用封装重点结合上面自己封装的一起深入研究下overlay※※※`
    ②、原来使用的material和bs使用时可看看
21、angular_scss: 待多封装一些好用的东西来
    ①、自定义栅格系统
    ②、rem布局有code，实际效果注销掉了，因为根html没设置fontSize
22、editor组件相关的应用
    ①、Ckeditor的引入及基础使用
    ②、动态获取输入框text长度，变更输入框长度
    ③、可编辑元素文本添加link
23、host-use组件：css-host深入研究
    ①、host实战比较实用(`要深入看，一定得研究透，才能实用`)：在life-cycle组件的scss文件有使用了一下，根据不同父组件实现不同的子组件样式！！！
    ②、star-checkbox得封装
24、echart的引入和实用(`在glr项目有详细实用，和动态引入`)
25、layout组件里有个路由监听事件绑定在router-outlet上(`onActivate,onDeactivate`)
26、simpleQuestionnaire.module是整个questionnaire的封装(`可结合9项form表达深入实战和实用`; 还有download excel 和 download doc)

二、指令和管道：
    ①、`appClickOutside, appDebouncEvent, appDebounceKeyupEnter, appEmailvalid, appScrollDirective`
    ②、`dateFormat, filter, multiple, safehtml, sliceEmail`
三、service：`auth.guard路由守卫, btn的dialog※※※，http等等吧，都细看看`
四、interface，和note注解
五、utils公共方法封装：`debounce去抖原理; index专门数据操作; material的svg引入; MenuTabMapping; toggel下来动画使用在封装menu组件; class-validator使用trim; Star原生封装`
