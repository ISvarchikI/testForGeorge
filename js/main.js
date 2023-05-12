const button = document.querySelector('#change-color')
const footer = document.querySelector("footer")
function changeFooterColor() {
  this.style.backgroundColor = 'yellow';
}

Function.prototype.myBindButton = function myBindButton(context) {
  return () => {
    return this.call(context)
  }
}

button.onclick = changeFooterColor.myBindButton(footer);
