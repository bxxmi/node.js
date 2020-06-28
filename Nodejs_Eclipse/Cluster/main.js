// Cluster 모듈 : node.js에서 병렬처리를 위해 제공되는 모듈
// 작업 하나의 단위 명칭 : worker

var cluster = require('cluster');

// Round Robin 방식으로 스케쥴링
cluster.schedualingPolicy = cluster.SCHED_RR;

if (cluster.isMaster == true) {

	// worker 3개 발생
	cluster.fork();
	cluster.fork();
	cluster.fork();

	cluster.on('online', function(worker) {
		for (var i = 0; i < 10; i++) {
			// pid : worker를 구분하는 값
			console.log(worker.process.pid, "동작");
		}
	});
}