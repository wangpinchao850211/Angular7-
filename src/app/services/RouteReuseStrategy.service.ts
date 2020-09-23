import { RouteReuseStrategy, DefaultUrlSerializer, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
 

/**
 * RouteReuseStrategy 我称它为：路由复用策略
 * shouldDetach 是否允许复用路由
 * store 当路由离开时会触发，存储路由
 * shouldAttach 是否允许还原路由
 * retrieve 获取存储路由
 * shouldReuseRoute 进入路由触发，是否同一路由时复用路由
 *   原理：
 *          把路由 /list 设置为允许复用（shouldDetach），然后将路由快照存在 store 当中；当 shouldReuseRoute 成立时即：再次遇到 /list 路由后表示需要复用路由，先判断 shouldAttach 是否允许还原，最后从 retrieve 拿到路由快照并构建组件。
 * */ 
export class AppReuseStrategy implements RouteReuseStrategy {

    public static handlers: { [key: string]: DetachedRouteHandle } = {}
    private static waitDelete:string

    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    public shouldDetach(route: ActivatedRouteSnapshot): boolean {
        console.log(route);
        return true;
    }

    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    public store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        console.log(route);
        console.log(handle);
        if(AppReuseStrategy.waitDelete && AppReuseStrategy.waitDelete==this.getRouteUrl(route)){
            //如果待删除是当前路由则不存储快照
            AppReuseStrategy.waitDelete=null
            return;
        }
        AppReuseStrategy.handlers[this.getRouteUrl(route)] = handle; // 存储路由
    }

    /** 若 path 在缓存中有的都认为允许还原路由 */
    public shouldAttach(route: ActivatedRouteSnapshot): boolean {
        console.log(route.routeConfig);
        console.log(AppReuseStrategy.handlers[this.getRouteUrl(route)]);
        return !!route.routeConfig && !!AppReuseStrategy.handlers[this.getRouteUrl(route)]
    }

    /** 从缓存中获取快照，若无则返回null */
    public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        console.log(route);
        if (!route.routeConfig) {
            return null
        }
        console.log(AppReuseStrategy.handlers[this.getRouteUrl(route)]);
        
        return AppReuseStrategy.handlers[this.getRouteUrl(route)];
    }

    /** 进入路由触发，判断是否同一路由 */
    public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.log(future);
        console.log(curr);
        return future.routeConfig===curr.routeConfig && 
            JSON.stringify(future.params)==JSON.stringify(curr.params);
    }

    private getRouteUrl(route: ActivatedRouteSnapshot){
        console.log(route);
        console.log(route['_routerState'].url.replace(/\//g, '_'));
        return route['_routerState'].url.replace(/\//g, '_');
    }

    public static deleteRouteSnapshot(name:string):void{
        console.log(name);        
        if(AppReuseStrategy.handlers[name]){
            delete AppReuseStrategy.handlers[name];
        }else{
            AppReuseStrategy.waitDelete = name;
        }
    }
}