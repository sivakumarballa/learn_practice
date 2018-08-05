var fs = {};

fs.readdir = function(path, cb) {
	setTimeout(() => {
		cb(null, ["file1", "file2"]);
	}, 2000);
};

fs.readdirAsync = function(path) {
	return new Promise((resolve, reject) => {
		fs.readdir("path", (err, filenames) => {
			if(err) {
                reject(err);
            } else {
                resolve(filenames);
            }
		});
	});
};

fs.readdirAsync("path").then((filenames) => {
    console.log(filenames);
}).catch((err) => {
    console.log(err);
});