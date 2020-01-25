// 简单定义注解: 注解就是返回函数的函数，既是闭包
export function Emoji() {
    return (target: Object, key: string) => {
        let val = target[key];
        const gettter = () => {
            return val;
        };
        const setter = (value: string) => {
            val = `😀${value}😀`;
        };
        Object.defineProperty(target, key, {
            get: gettter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
// 确认对话框注解
export function Confirmable(message: string) {
    return (target: Object, key: string, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;
        descriptor.value = function( ...args: any) {
            const allow = window.confirm(message);
            if (allow) {
                const result = original.apply(this, args);
                return result;
            } 
            return null;
        }
        return descriptor
    }
}
