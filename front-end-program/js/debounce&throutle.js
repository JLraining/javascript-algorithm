function debounce(fn, delay = 1000) {
    let timer;

    return function(...args) {
        if(timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}


function throutle(fn, delay = 1000) {
    let timer;
    
    return function(...args) {
        if(timer) {
           return
        } 

        timer = setTimeout(() => {
            fn.apply(this, args);
            clearTimeout(timer);
        }, delay);
    }
}