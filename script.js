var wrapper = document.body;
var numbers = [-30, 14, 66, 21, 72, -4];
var elements = [];

function character(num) {
  var that = this;
  this.num = num;
  this.ele = document.createElement("div");
  this.ele.classList.add("style");
  this.numEle = document.createElement("div");
  if (this.num < 0) {
    this.numEle.innerHTML = "The number is " + this.num + " and is below 0";
  } else if (this.num == 14) {
    this.numEle.innerHTML = "The number is " + this.num + " and equals 14";
  } else if (this.num > 50) {
    this.numEle.innerHTML ="The number is " + this.num + " and is greater than 50";
  } else {
    this.numEle.innerHTML = "The number is " + this.num;
  }

  this.ele.appendChild(this.numEle);

  this.ele.addEventListener("click", function () {
    that.changeNum();
  });
  wrapper.appendChild(this.ele);
}

character.prototype.changeNum = function () {
  this.num = this.num + 1;
  if (this.num < 0) {
    this.numEle.innerHTML = "The number is " + this.num + " and is below 0";
  } else if (this.num == 14) {
    this.numEle.innerHTML = "The number is " + this.num + " and equals 14";
  } else if (this.num > 50) {
    this.numEle.innerHTML =
      "The number is " + this.num + " and is greater than 50";
  } else {
    this.numEle.innerHTML = "The number is " + this.num;
  }
};

for (var i = 0; i < numbers.length; i++) {
  elements.push(new character(numbers[i]));
}