function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var displayText = "姓名: " + name + "\n邮箱: " + email + "\n留言: " + message;

    // 使用 JavaScript 弹窗显示表单内容
    alert(displayText);
}