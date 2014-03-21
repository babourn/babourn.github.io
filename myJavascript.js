/***Standard javascript file
 *  Author: Brian Bourn*/
render_picture = function() {
 	var canvas = document.getElementById('headers');
    var imageObj = document.getElementById('picture')
    var destHeight = 300;
    imageObj.src = 'pic/Brian.jpg';

    imageObj.onload = function() {
        imageObj.clip(60,60,200,300);
     };
 }