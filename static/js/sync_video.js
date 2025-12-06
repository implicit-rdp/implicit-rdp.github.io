// sync video play
function controlVideoFunction(videoClass) {
    return function() {
        const videos = document.querySelectorAll(videoClass);
        let userClicked = false;

        function resetAndPlayAllVideos() {
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0;
                video.play();
            });
        }

        function hideSteps() {
            method_name_begin = document.getElementById($(this).attr('id') + '_begin');
            method_name_end = document.getElementById($(this).attr('id') + '_end');
            method_name_begin.style.display = 'inline';
            method_name_end.style.display = 'none';
        }

        function displaySteps() {
            method_name_begin = document.getElementById($(this).attr('id') + '_begin');
            method_name_end = document.getElementById($(this).attr('id') + '_end');
            method_name_begin.style.display = 'none';
            method_name_end.style.display = 'inline';
        }

        videos.forEach(video => {
            video.addEventListener('focus', () => {
                userClicked = true;
              });

            video.addEventListener('play', function() {
                if (userClicked) {
                    userClicked = false;
                    resetAndPlayAllVideos();
                };
            });
            
            video.addEventListener('playing', hideSteps);
            video.addEventListener('ended', displaySteps);
        });
    };
}

document.addEventListener("DOMContentLoaded", controlVideoFunction('.box-1'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.switch-1'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.box-2'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.switch-2'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.box-3'));
document.addEventListener("DOMContentLoaded", controlVideoFunction('.switch-3'));