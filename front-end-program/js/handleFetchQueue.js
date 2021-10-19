function handleFetchQueue(input, max) {
	const urlCount = input.length; // 请求总长度，用于判断边界
	const requestsQueue = []; // 请求队列
	const output = []; // 结果
    let i = 0;
    const handleRequest = (url) => {
   		const req = fetch(url, (res)=>{
        	const len = output.push(res);
            if (len < urlCount && i + 1 < urlCount) {
        		requestsQueue.shift(); // 请求成功后释放位置
          		handleRequest(input[++i]) // 控制何时进入下一次
        	} else if (len === urlCount) {
          		return output;
        	}
        })
        if (requestsQueue.push(req) < max) { //队列满了就不递归到下一个
        	handleRequest(input[++i]);
      	}
  	}
   return handleRequest(input[i]);
}