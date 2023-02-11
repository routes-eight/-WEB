var Links = {
    setColor: function (color) {
        var as = document.querySelectorAll("a");
        for (var i = 0; i < as.length; i++) {
            as[i].style.color = color;
        }
    },
};
var Body = {
    setColor: function (color) {
        document.querySelector("body").style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector("body").style.backgroundColor = color;
    },
};
var H1 = {
    setBorderColor: function (color) {
        document.querySelector("h1").style.borderColor = color;
    },
};
var Ol = {
    setBorderColor: function (color) {
        document.querySelector("ol").style.borderColor = color;
    },
};
function nightDayHandler(self) {
    if (self.value == "다크모드") {
        self.value = "라이트모드";
        Body.setColor("white");
        Body.setBackgroundColor("black");
        H1.setBorderColor("white");
        Ol.setBorderColor("white");
        Links.setColor("lightblue");
    } else {
        self.value = "다크모드";
        Body.setColor("black");
        Body.setBackgroundColor("white");
        H1.setBorderColor("black");
        Ol.setBorderColor("black");
        Links.setColor("blue");
    }
}