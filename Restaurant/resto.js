// custom cursor codes

const cursor = document.querySelector('.cursor');


document.addEventListener('mousemove', e => {
    // console.log(e);
    cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;");
});

// changing cursor style on hover
const anchorPoints = document.querySelectorAll('a');

console.log(anchorPoints);

for (var i = 0; i < anchorPoints.length; i++) {
    anchorPoints[i].addEventListener('mouseenter', changeCursorStyle);
    anchorPoints[i].addEventListener('mouseleave', resetCursorStyle);
}

function changeCursorStyle() { 
    cursor.classList.add('cursor-hovering'); 
}

function resetCursorStyle() {
    cursor.classList.remove('cursor-hovering');

}