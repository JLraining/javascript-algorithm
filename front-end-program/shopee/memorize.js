// 缓存函数结果

const memorize = (func) => {
    const cache = {};
    return function (...args) {
        const cache_key = JSON.stringify(args);
        cache[cache_key] = cache[cache_key] || func.apply(func, args);
        return cache[cache_key];
    }
}