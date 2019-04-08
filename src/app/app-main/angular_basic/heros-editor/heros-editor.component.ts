import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/interface/hero';
import { HeroserviceService } from 'src/app/services/heroservice.service';
@Component({
  selector: 'app-heros-editor',
  templateUrl: './heros-editor.component.html',
  styleUrls: ['./heros-editor.component.scss']
})
export class HerosEditorComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroserviceService: HeroserviceService
  ) { }

  ngOnInit() {
    // 让构造函数保持简单，只做初始化操作，比如把构造函数的参数赋值给属性。 构造函数不应该做任何事。 它当然不应该调用某个函数来向远端服务（比如真实的数据服务）发起 HTTP 请求。而是选择在 ngOnInit 生命周期钩子中调用
    this.getHeroes();
  }
  getHeroes(): void {
    // 关键差异点
    this.heroserviceService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
