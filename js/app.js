$(document).ready(function () {
    "use strict";
    doSomething();
});
    
var lglobe = document.createElement('lglobe');
var rglobe = document.createElement('rglobe');
var cglobe = document.createElement('cglobe');
var blglobe = document.createElement('blglobe');
var button = document.createElement('button');

document.body.appendChild(button);
document.body.appendChild(lglobe);
document.body.appendChild(rglobe);
document.body.appendChild(cglobe);
document.body.appendChild(blglobe);

$button = $('button');
$lglobe = $('lglobe');
$rglobe = $('rglobe');
$cglobe = $('cglobe');
$blglobe = $('blglobe');

button.innerHTML = 'Press Me';
$button.css('background', '#5EEBE8');

function doSomething() {
    $button.on('click', function (e) {
        $(this).fadeOut('slow');
        setInterval(function () {
            $lglobe.fadeIn(1000);
            $lglobe.animate({
                opacity: 0.001,
                width: '75%',
                height: '100%',
                left: '+=400'
            }, 3000, function () {
                $lglobe.css({
                    width: '',
                    height: '',
                    left: '65px',
                    opacity: ''
                });
            });
            
            $rglobe.fadeIn(2000);
            $rglobe.animate({
                opacity: 0.001,
                width: '65%',
                height: '90%',
                left: '-=500',
                top: '+=400'
            }, 4000, function () {
                $rglobe.css({
                    width: '',
                    height: '',
                    left: '800px',
                    top: '10px',
                    opacity: ''
                });
            });
        
            $cglobe.fadeIn(3000);
            $cglobe.animate({
                opacity: 0.001,
                width: '120%',
                height: '145%',
                top: '-=400'
            }, 3500, function () {
                $cglobe.css({
                    width: '',
                    height: '',
                    left: '400px',
                    top: '200px',
                    opacity: ''
                });
            });
        
            $blglobe.fadeIn(3000);
            $blglobe.animate({
                opacity: 0.001,
                width: '100%',
                height: '125%',
                top: '+=400'
            }, 2500, function () {
                $blglobe.css({
                    width: '',
                    height: '',
                    left: '150x',
                    top: '300px',
                    opacity: ''
                });
            });
        }, 1000);
            
   
    });
}

               
    













