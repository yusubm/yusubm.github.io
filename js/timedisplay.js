document.addEventListener("DOMContentLoaded", function () {
    function displayCurrentTime() {
        var now = new Date();
        
        var year = now.getFullYear();
        var month = addLeadingZero(now.getMonth() + 1); // Months are zero-based
        var day = addLeadingZero(now.getDate());
        
        var hours = addLeadingZero(now.getHours());
        var minutes = addLeadingZero(now.getMinutes());
        var seconds = addLeadingZero(now.getSeconds());
        
        // 格式化日期和时间
        var formattedDateTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        
        // 将日期和时间显示在页面上
        document.getElementById("currentTime").innerHTML = "当前时间：" + formattedDateTime;
    }
    
    function addLeadingZero(number) {
        // 在数字前面添加零，以保持两位数的格式
        return (number < 10 ? "0" : "") + number;
    }
    
    // 初始加载时显示日期和时间，并每秒更新一次
    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
});