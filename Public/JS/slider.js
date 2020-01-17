var slide = ["Public/Images/Photos/pain.jpg", "Public/Images/Photos/blinis.jpg", "Public/Images/Photos/risoto.jpg" ];
var i = 0;

function ChangeSlide(sens) {
    i = i + sens;
    if (i < 0)
        i = slide.length - 1;
    if (i > slide.length - 1)
        i = 0;
    document.getElementById("slide2").src = slide[i];
}