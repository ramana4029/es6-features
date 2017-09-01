function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
	console.log('first');
    return timeout(2000);
}).then(() => {
	console.log('second in error');
    throw new Error("Nice Error");
}).catch(err => {
	console.log('In exception - ' + err);    
})