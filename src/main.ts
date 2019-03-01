import 'hammerjs';
// 关闭angular的开发者模式
import { enableProdMode } from '@angular/core';
// platformBrowserDynamic从angular浏览器模块导入的方法，这个方法告诉浏览器使用哪个模块启动应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// 打包部署，对多环境的支持
import { environment } from './environments/environment';

if (environment.production) { // 如果是生成环境，关闭开发者模式
  enableProdMode();
}

// 传入AppModule作为起点开始加载，angular会AppModule通过这个模块开始分析还要依赖哪些模块（在@NgModule的imports中查找还要哪些模块），当加载完所有依赖时，会去index.html寻找启动模块就是AppModule的bootstrap指定主组件就是AppComponent的装饰器selector指定的 'app-root',使用AppComponent的装饰器的templateUrl的模板标签替换掉selector指定的 'app-root'。在替换之前会显示app-root标签里的内容
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // 第一步安装依赖包
  // 安装jquery cnpm install jquery --save
  // 安装bootstrap cnpm install bootstrap --save
  // 第二步将node-modules下安装完的依赖引入angular.json文件的build.options.scripts的数组中
  // 第三步直接在组件类中使用$,并不识别，需要安装jquery和bootstrap的类型文件，命令：cnpm install @types/jquery --save-dev
