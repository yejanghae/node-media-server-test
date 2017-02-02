Vue.use(VueSocketio.default, location.origin + '/stream');

var vueObj = new Vue({
	el: '#stream-vue',
	sockets: {
		connect: function(){
			console.log('socket connected');
		}
	},
	mounted: function(){
		if(navigator.mediaDevices.getUserMedia){
			navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(stream => {
				var video = document.getElementById('video');
				video.src = window.URL.createObjectURL(stream);
				var canvas = document.createElement('canvas');
				//var context = canvas.getContext('2d');
				canvas.width = 640;
				canvas.height = 360;
				setInterval(() => {
					vueObj.$socket.emit('stream', canvas.toDataURL('image/webp'));
				}, 70);
			}).catch(err => {console.error(err)});
		}
	}
});
