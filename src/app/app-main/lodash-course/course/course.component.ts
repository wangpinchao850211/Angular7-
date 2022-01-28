import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, AfterViewInit {

  public highlightStr1 = `
    1.使用 value 值来填充（也就是替换） array，从start位置开始, 到end位置结束（但不包含end位置）
    var array = [1, 2, 3];
    _.fill(array, 'a');
    // => ['a', 'a', 'a']
    _.fill(Array(3), 2);
    // => [2, 2, 2]
    _.fill([4, 6, 8], '*', 1, 2);
    // => [4, '*', 8]

    2.移除数组array中所有和 values 相等的元素，使用 SameValueZero 进行全等比较
    var array = [1, 2, 3, 1, 2, 3];
    _.pull(array, 2, 3);
    // => [1, 1]

    3.移除数组 array 中满足 predicate 条件的所有元素 ，返回的是被移除元素数组.
    var array = [1, 2, 3, 4];
    var evens = _.remove(array, function(n) {
    return n % 2 == 0;
    });
    console.log(array);
    // => [1, 3]
    console.log(evens);
    // => [2, 4]

    4.过滤假值
    _.compact([0, 1, false, 2, '', 3]);
    // => [1, 2, 3]

    5.排除掉数组指定的值
    _.difference([1, 2, 3], [4, 2]);
    // => [1, 3]
    _.difference([1, '2', 3], [4, 2]);
    // => [1, "2", 3]

    6.将 array 中的前 n 个元素去掉，然后返回剩余的部分。
    _.drop([1, 2, 3]);
    // => [2, 3] 默认是1开始的
    _.drop([1, 2, 3], 2);
    // => [3]
    _.drop([1, 2, 3], 5);
    // => []
    _.drop([1, 2, 3], 0);
    // => [1, 2, 3]

    7.将 array 尾部的 n 个元素去除，并返回剩余的部分。
    _.dropRight([1, 2, 3]);
    // => [1, 2]
    _.dropRight([1, 2, 3], 2);
    // => [1]
    _.dropRight([1, 2, 3], 5);
    // => []
    _.dropRight([1, 2, 3], 0);
    // => [1, 2, 3]

    8.去除数组最后一个元素array.
    _.initial([1, 2, 3]);
    // => [1, 2]

    9.取出各数组中全等的元素，使用 SameValueZero方式平等比较
    _.intersection([1, 2], [4, 2], [2, 1]);
    // => [2]

    10.取出数组的最后一个元素 array   _.first(array)是获取数组 array的第一个元素
    _.last([1, 2, 3]);
    // => 3

    11.获取数组 array第一个元素除外的所有元素.
    _.rest([1, 2, 3]);
    // => [2, 3]

    12.从数组的起始位置开始，取n个元素;n默认是1
    _.take([1, 2, 3]);
    // => [1]
    _.take([1, 2, 3], 2);
    // => [1, 2]
    _.take([1, 2, 3], 5);
    // => [1, 2, 3]
    _.take([1, 2, 3], 0);
    // => []

    13.从数组右侧开始 取得 n 个元素;n默认为1
    _.takeRight([1, 2, 3]);
    // => [3]
    _.takeRight([1, 2, 3], 2);
    // => [2, 3]
    _.takeRight([1, 2, 3], 5);
    // => [1, 2, 3]
    _.takeRight([1, 2, 3], 0);
    // => []

    14.按顺序从所有提供的数组中创建一个唯一值的数组, 使用 SameValueZero 进行相等比较。
    _.union([1, 2], [4, 2], [2, 1]);
    // => [1, 2, 4]

    15.数组去重
    _.uniq([2, 1, 2]);
    // => [2, 1]
    // using "isSorted"
    _.uniq([1, 1, 2], true);
    // => [1, 2]
    // using an iteratee function
    _.uniq([1, 2.5, 1.5, 2], function(n) {
    return this.floor(n);
    }, Math);
    // => [1, 2.5]
    // using the "_.property" callback shorthand
    _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
    // => [{ 'x': 1 }, { 'x': 2 }]

    16.创建一个唯一值的数组, 它是所提供数组的对称差异。
    _.xor([1, 2], [4, 2]);
    // => [1, 4]

    17.该方法类似 _.find，区别是该方法返回的是符合 predicate条件的第一个元素的索引，而不是返回元素本身.
    var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
    ];
    _.findIndex(users, function(chr) {
    return chr.user == 'barney';
    });
    // => 0
    // using the "_.matches" callback shorthand
    _.findIndex(users, { 'user': 'fred', 'active': false });
    // => 1
    // using the "_.matchesProperty" callback shorthand
    _.findIndex(users, 'active', false);
    // => 0
    // using the "_.property" callback shorthand
    _.findIndex(users, 'active');
    // => 2

    18.该方法类似 _.findIndex ，区别是其从右到左遍历数组.
    var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
    ];

    _.findLastIndex(users, function(chr) {
    return chr.user == 'pebbles';
    });
    // => 2
    // using the "_.matches" callback shorthand
    _.findLastIndex(users, { 'user': 'barney', 'active': true });
    // => 0
    // using the "_.matchesProperty" callback shorthand
    _.findLastIndex(users, 'active', false);
    // => 2
    // using the "_.property" callback shorthand
    _.findLastIndex(users, 'active');
    // => 0

    19.从尾端查询（右数）数组 array ，第一个不满足predicate 条件的元素开始截取数组
    _.dropRightWhile([1, 2, 3], function(n) {
    return n > 1;
    });
    // => [1]
    var users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
    ];
    // using the "_.matches" callback shorthand
    _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
    // => ['barney', 'fred']
    // using the "_.matchesProperty" callback shorthand
    _.pluck(_.dropRightWhile(users, 'active', false), 'user');
    // => ['barney']
    // using the "_.property" callback shorthand
    _.pluck(_.dropRightWhile(users, 'active'), 'user');
    // => ['barney', 'fred', 'pebbles']

    20.从开头查询（左数起）数组 array ，第一个不满足predicate 条件的元素开始截取数组
    _.dropWhile([1, 2, 3], function(n) {
    return n < 3;
    });
    // => [3]
    var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
    ];
    // using the "_.matches" callback shorthand
    _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
    // => ['fred', 'pebbles']
    // using the "_.matchesProperty" callback shorthand
    _.pluck(_.dropWhile(users, 'active', false), 'user');
    // => ['pebbles']
    // using the "_.property" callback shorthand
    _.pluck(_.dropWhile(users, 'active'), 'user');
    // => ['barney', 'fred', 'pebbles']

    21. 拆分数组为指定长度的块
    _.chunk(['a', 'b', 'c', 'd'], 2);
    // => [['a', 'b'], ['c', 'd']]
    _.chunk(['a', 'b', 'c', 'd'], 3);
    // => [['a', 'b', 'c'], ['d']]
  `;
  public highlightStr = ``;
  public highlightStr3 = `
      1.将源对象的自己的可枚举属性分配给目标对象。
      _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
      // => { 'user': 'fred', 'age': 40 }
      
      2.它返回第一个元素谓词的键返回 truthy 而不是元素本身。_.findkey
      var users = {
        'barney':  { 'age': 36, 'active': true },
        'fred':    { 'age': 40, 'active': false },
        'pebbles': { 'age': 1,  'active': true }
      };
      _.findKey(users, function(chr) {
        return chr.age < 40;
      });
      // => 'barney' (iteration order is not guaranteed)
      // using the "_.matches" callback shorthand
      _.findKey(users, { 'age': 1, 'active': true });
      // => 'pebbles'
      // using the "_.matchesProperty" callback shorthand
      _.findKey(users, 'active', false);
      // => 'fred'
      // using the "_.property" callback shorthand
      _.findKey(users, 'active');
      // => 'barney'
      
      3.获取对象路径的属性值。如果解析值未定义, 则在其位置使用默认。
      var object = { 'a': [{ 'b': { 'c': 3 } }] };
      _.get(object, 'a[0].b.c');
      // => 3
      _.get(object, ['a', '0', 'b', 'c']);
      // => 3
      _.get(object, 'a.b.c', 'default');
      // => 'default'
      
      4._.has方法：检查路径是否为直接属性。
      var object = { 'a': { 'b': { 'c': 3 } } };
      _.has(object, 'a');
      // => true
      _.has(object, 'a.b.c');
      // => true
      _.has(object, ['a', 'b', 'c']);
      // => true
      
      5._.set
      var object = { 'a': [{ 'b': { 'c': 3 } }] };
      _.set(object, 'a[0].b.c', 4);
      console.log(object.a[0].b.c);
      // => 4
      _.set(object, 'x[0].y.z', 5);
      console.log(object.x[0].y.z);
      // => 5
      
      6.由选取的对象属性组成的对象
      var object = { 'user': 'fred', 'age': 40 };
      _.pick(object, 'user');
      // => { 'user': 'fred' }
      
      7._.merge
      var users = {
        'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
      };
      var ages = {
        'data': [{ 'age': 36 }, { 'age': 40 }]
      };
      _.merge(users, ages);
      // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
      // using a customizer callback
      var object = {
        'fruits': ['apple'],
        'vegetables': ['beet']
      };
      var other = {
        'fruits': ['banana'],
        'vegetables': ['carrot']
      };
      _.merge(object, other, function(a, b) {
        if (_.isArray(a)) {
          return a.concat(b);
        }
      });
      // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
  `;
  public highlightStr4 = `
      1.将字符串的第一个字符大写。
      _.capitalize('fred');
      // => 'Fred'
      
      2.如果短于长度, 则在左侧和右侧填充字符串
      _.pad('abc', 8);
      // => '  abc   '
      _.pad('abc', 8, '_-');
      // => '_-abc_-_'
      _.pad('abc', 3);
      // => 'abc'
      
      3.循环repeat
      _.repeat('*', 3);
      // => '***'
      _.repeat('abc', 2);
      // => 'abcabc'
      _.repeat('abc', 0);
      // => ''
  `;

  // lodash Demo
  public collectionStr = `
    const heros = [
      { t: '射手', n: '鲁班七号', ready: true, p: 5 },
      { t: '法师', n: '诸葛亮', ready: true, p: 2 },
      { t: '法师', n: '露娜', ready: true, p: 1 },
      { t: '刺客', n: '露娜', ready: true, p: 1 },
      { t: '辅助', n: '蔡文姬', ready: true, p: 1 },
      { t: '辅助', n: '庄周', ready: true, p: 2 },
    ];

    // 每种角色有几个英雄
    _.countBy(heros, 't');
    // => {射手: 1, 法师: 2, 刺客: 1, 辅助: 2}
    // 禁用露娜，蔡文姬 （第一个数组去掉第二个数组的结果，按照属性n判断元素是否相等）
    _.differenceBy(heros, [{ n: '露娜' }, { n: '蔡文姬' }], 'n');
    // => 去掉了露娜，蔡文姬

    // 去重（按照属性n去重）
    _.uniqBy(heros, 'n');
    // => 去掉了一个露娜

    // 全都准备
    _.every(heros, ['ready', true]);
    // => true

    // 阵容是否有坦克
    _.some(heros, ['t', '坦克']);
    // => false

    // 按熟练度排序
    _.reverse(_.sortBy(heros, ['p', 'n']));
  `;
  public FunctionStr = `
    // _.debounce:调用函数后，n秒内不调用才真正的执行函数
    // 可用于:心跳包，用户停止输入后触发验证

    // 例子:
    // 三体:摇篮系统 - 反触发系统
    //
    // 爆炸函数
    function bomb() {
      console.log("毁灭${new Date()}");
    }
    // 超过3秒不调用ylSystem，炸弹就爆炸
    const ylSystem = _.debounce(bomb, 3000, { leading: false });
    console.log("触发${new Date()}");
    ylSystem();
    setTimeout(ylSystem, 1000);
    setTimeout(ylSystem, 4000);
    setTimeout(ylSystem, 7000);

    // 只执行一次
    const init = _.once(() => console.log('init'));
    init();
    init(); // 忽略

    // _.throttle: n秒内只执行一次
    // 可用于：控制用户点击button（其他操作）的频率

    // 例子:
    // 两秒内只执行一次
    const oncePer2Sec = _.throttle(() => console.log('oncePer2Sec'), 2000, { trailing: false });
    oncePer2Sec();
    // 调用被忽略
    oncePer2Sec();
    setTimeout(oncePer2Sec, 2000);
  `;
  public otherStr = `
    // 深度拷贝
    // _.cloneDeepWith
    const objects = [{ a: 1, c: { d: {} } }, { b: 2 }];
    const deep = _.cloneDeep(objects);
    console.log(deep[0].c.d === objects[0].c.d);

    // 是null或者undefined
    console.log(_.isNil(null));
    // 转成数字
    console.log(_.toNumber(' .2 '));
    // 合并对象
    console.log(_.assign({ a: 0 }, { a: 1, b: 2 }, { c: 3 }));
  `;
  constructor(
    private el: ElementRef
  ) {
    console.log('GGGGGGGGGGGGGGGGGGG') // 项目路由跳转三遍！！！
    this.highlightStr = `
        1.创建与集合的给定键或索引相对应的元素数组
        _.at(['a', 'b', 'c'], [0, 2]);
        // => ['a', 'c']
        _.at(['barney', 'fred', 'pebbles'], 0, 2);
        // => ['barney', 'pebbles']
        
        2.循环遍历集合的元素, 返回所有元素谓词返回 truthy 的数组。
        _.filter([4, 5, 6], function(n) {
          return n % 2 == 0;
        });
        // => [4, 6]
        var users = [
          { 'user': 'barney', 'age': 36, 'active': true },
          { 'user': 'fred',   'age': 40, 'active': false }
        ];
        // using the "_.matches" callback shorthand
        _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
        // => ['barney']
        // using the "_.matchesProperty" callback shorthand
        _.pluck(_.filter(users, 'active', false), 'user');
        // => ['fred']
        // using the "_.property" callback shorthand
        _.pluck(_.filter(users, 'active'), 'user');
        // => ['barney']
        
        2.1：过滤器的反义词;此方法返回谓词不返回 truthy 的集合元素。
        _.reject([1, 2, 3, 4], function(n) {
          return n % 2 == 0;
        });
        // => [1, 3]
        var users = [
          { 'user': 'barney', 'age': 36, 'active': false },
          { 'user': 'fred',   'age': 40, 'active': true }
        ];
        // using the "_.matches" callback shorthand
        _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
        // => ['barney']
        // using the "_.matchesProperty" callback shorthand
        _.pluck(_.reject(users, 'active', false), 'user');
        // => ['fred']
        // using the "_.property" callback shorthand
        _.pluck(_.reject(users, 'active'), 'user');
        // => ['barney']
        
        3.遍历集合的元素, 返回第一个元素谓词返回 truthy。
        var users = [
          { 'user': 'barney',  'age': 36, 'active': true },
          { 'user': 'fred',    'age': 40, 'active': false },
          { 'user': 'pebbles', 'age': 1,  'active': true }
        ];
        _.result(_.find(users, function(chr) {
          return chr.age < 40;
        }), 'user');
        // => 'barney'
        // using the "_.matches" callback shorthand
        _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
        // => 'pebbles'
        // using the "_.matchesProperty" callback shorthand
        _.result(_.find(users, 'active', false), 'user');
        // => 'fred'
        // using the "_.property" callback shorthand
        _.result(_.find(users, 'active'), 'user');
        // => 'barney'
        
        4.循环遍历（分别从左侧和右侧）
        _([1, 2]).forEach(function(n) {
          console.log(n);
        }).value();
        // => logs each value from left to right and returns the array
        _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
          console.log(n, key);
        });
        
        _([1, 2]).forEachRight(function(n) {
          console.log(n);
        }).value();
        
        5.使用 SameValueZero 进行相等比较时检查目标是否在集合中。
        _.includes([1, 2, 3], 1);
        // => true
        _.includes([1, 2, 3], 1, 2);
        // => false
        _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
        // => true
        _.includes('pebbles', 'eb');
        // => true
        
        6.map方法
        function timesThree(n) {
          return n * 3;
        }
        _.map([1, 2], timesThree);
        // => [3, 6]
        _.map({ 'a': 1, 'b': 2 }, timesThree);
        // => [3, 6] (iteration order is not guaranteed)
        var users = [
          { 'user': 'barney' },
          { 'user': 'fred' }
        ];
        // using the "_.property" callback shorthand
        _.map(users, 'user');
        // => ['barney', 'fred']
        
        7.获取集合中所有元素的路径的属性值。
        var users = [
          { 'user': 'barney', 'age': 36 },
          { 'user': 'fred',   'age': 40 }
        ];
        _.pluck(users, 'user');
        // => ['barney', 'fred']
        var userIndex = _.indexBy(users, 'user');
        _.pluck(userIndex, 'age');
        // => [36, 40] (iteration order is not guaranteed)
        
        8.reduce方法: 将集合减少到一个值, 这是通过 iteratee 在集合中运行每个元素的累计结果
        _.reduce([1, 2], function(total, n) {
          return total + n;
        });
        // => 3
        _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
          result[key] = n * 3;
          return result;
        }, {});
        // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
        
        9.检查谓词是否为集合的任何元素返回 truthy。
        _.some([null, 0, 'yes', false], Boolean);
        // => true
        var users = [
          { 'user': 'barney', 'active': true },
          { 'user': 'fred',   'active': false }
        ];
        // using the "_.matches" callback shorthand
        _.some(users, { 'user': 'barney', 'active': false });
        // => false
        // using the "_.matchesProperty" callback shorthand
        _.some(users, 'active', false);
        // => true
        // using the "_.property" callback shorthand
        _.some(users, 'active');
        // => true
        
        10.获取自 Unix 纪元 (1970年1月1日 00:00:00 UTC) 以来已经过的毫秒数。
        _.defer(function(stamp) {
          console.log(_.now() - stamp);
        }, _.now());
        
        11._.bind方法：
        var greet = function(greeting, punctuation) {
          return greeting + ' ' + this.user + punctuation;
        };
        var object = { 'user': 'fred' };
        var bound = _.bind(greet, object, 'hi');
        bound('!');
        // => 'hi fred!'
        // using placeholders
        var bound = _.bind(greet, object, _, '!');
        bound('hi');
        // => 'hi fred!'
        
        12.lodash有求和方法_.sum
        _.sum([4, 6]);
        // => 10
        _.sum({ 'a': 4, 'b': 6 });
        // => 10
        var objects = [
          { 'n': 4 },
          { 'n': 6 }
        ];
        _.sum(objects, function(object) {
          return object.n;
        });
        // => 10
        // using the "_.property" callback shorthand
        _.sum(objects, 'n');
        // => 10    
    `
    this.highlightStr1 = `<ul><li>${this.highlightStr1.trim().replace(/\n/g, '\n</li><li>')}</li></ul>`;
    this.highlightStr = `<ul><li>${this.highlightStr.trim().replace(/\n/g, '\n</li><li>')}</li></ul>`;
    this.highlightStr3 = `<ul><li>${this.highlightStr3.trim().replace(/\n/g, '\n</li><li>')}</li></ul>`;
    this.highlightStr4 = `<ul><li>${this.highlightStr4.trim().replace(/\n/g, '\n</li><li>')}</li></ul>`;

    // lodash demo
    this.collectionStr = `<ul><li>${this.collectionStr.trim().replace(/\n/g, '\n</li><li>')}</li></ul>`;
    this.FunctionStr = `<ul><li>${this.FunctionStr.trim().replace(/\n/g, '\n</li><li>')}</li></ul>`;
    this.otherStr = `<ul><li>${this.otherStr.trim().replace(/\n/g, '\n</li><li>')}</li></ul>`;
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getNodes(1);
    }, 0);
  }
  getNodes(i) {
    if (i === 5) {
      const nodes = document.getElementsByClassName('javascript_5');
      Array.from(nodes).forEach(node => {
        const list = node.childNodes[0].childNodes;
        this.liHover(list);
      });
    } else {
      const code = document.getElementById(`javascript${i}`);
      const list = code.childNodes[0].childNodes;
      this.liHover(list);
    }
  }
  // css中使用hover不好使，最后使用了js操作
  liHover(list) {
    list.forEach((li, index) => {
      li.onmouseover = function ($event) {
        this.style.backgroundColor = '#666';
        this.style.cursor = 'pointer';
      }
      li.onmouseleave = function ($event) {
        this.style.backgroundColor = '#303030';
        this.style.cursor = 'default';
      }
    });
  }

  nzSelect(ev) {
    setTimeout(() => {
      this.getNodes(ev.index + 1);
    }, 100);
  }

}
