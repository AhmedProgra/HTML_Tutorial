const codeArea = document.getElementById("code");
codeArea.value = `<style>
    h3 {
        color: lime;
        background: black;
        padding: 10px;
        border-radius: 10px;
        text-align: center
    }
</style>
<h3>Hello, My name is Ahmed Bourmdane</h3>
<br />

<!-- You can write your code here -->

`;
codeArea.focus();
let browser = document.getElementsByClassName("browser")[0];
browser.innerHTML = codeArea.value;
let value = codeArea.value;

codeArea.oninput = function () {
    if (codeArea.value.includes("<p>")) {
        console.log(codeArea.innerText);
    }
    browser.innerHTML = codeArea.value;
};
