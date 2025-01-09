$(document).ready(function() {
    let startTime, tInterval;
    let savedTime = 0;
    let running = false;

    $('#start').on('click', function() {
        if (!running) {
            startTime = new Date().getTime() - savedTime;
            tInterval = setInterval(updateTime, 1);
            running = true;
        }
    });

    $('#stop').on('click', function() {
        if (running) {
            clearInterval(tInterval);
            savedTime = new Date().getTime() - startTime;
            running = false;
        }
    });

    $('#reset').on('click', function() {
        clearInterval(tInterval);
        savedTime = 0;
        $('#time').text('00:00:00:00');
        running = false;
    });

    function updateTime() {
        let difference = new Date().getTime() - startTime;

        let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((difference / (1000 * 60)) % 60);
        let seconds = Math.floor((difference / 1000) % 60);
        let milliseconds = Math.floor((difference % 1000) / 10);

        $('#time').text(
            `${formatTime(hours, 2)}:${formatTime(minutes, 2)}:${formatTime(seconds, 2)}:${formatTime(milliseconds, 2)}`
        );
    }

    function formatTime(value, digits) {
        return value.toString().padStart(digits, '0');
    }
});
