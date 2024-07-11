function play_youtube_video(video_id) {
    var video_element = document.getElementById(video_id);
    if (video_element) {
        var iframe = video_element.querySelector('iframe');
        var src = iframe.getAttribute('src');
        iframe.setAttribute('src', src + '&autoplay=1');
    }
}
var video_buttons = document.querySelectorAll('.video-button');
video_buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var video_id = button.getAttribute('data-video-id');
        play_youtube_video(video_id);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Función para reproducir videos de YouTube
    function play_youtube_video(video_id) {
        var video_element = document.getElementById(video_id);
        if (video_element) {
            var iframe = video_element.querySelector('iframe');
            var src = iframe.getAttribute('src');
            iframe.setAttribute('src', src + '&autoplay=1');
        }
    }

    // Manejo de eventos de clic en botones para reproducción de videos
    var video_buttons = document.querySelectorAll('.video-button');
    video_buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var video_id = button.getAttribute('data-video-id');
            play_youtube_video(video_id);
        });
    });
});
