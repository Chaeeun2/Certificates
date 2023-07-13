//드래그
var drag_idx = 10;
$(document).ready(function () {
    $(".draggable")
        .draggable()
        .css('cursor', 'move')
        .mousedown(function () { // mousedown 이벤트 생성
            $(this).css('z-index', drag_idx); // 클릭한 이미지만 z-index 증가시킴
            drag_idx++;;
        });
});


//네비게이션
function sidebar() {
    var e = document.getElementById('side');
    var d = document.getElementById('sidetop');
    if (e.style.transform === 'translateY(0px)') {
        e.style.transform = 'translateY(52px)';
        d.innerHTML = "↑";
    } else {
        e.style.transform = 'translateY(0px)';
        d.innerHTML = "↓";
    }
}


//모달
function modal_visibility(id) {
    var e = document.getElementById(id);
    if (e.style.display === 'block') {
        e.style.display = 'none';
    } else {
        e.style.display = 'block';
    }
}


//드래거블 랜덤위치
$(document).ready(function () {
    $(".draggable").each(function () {
        var top = Math.round(Math.random() * 800);
        var left = Math.round(Math.random() * 1300);
        $(this).css('top', top)
        $(this).css('left', left)
    })
});

$("#folder4").click(function () {
    location.replace('index2.html');
});

$("#folder9").click(function () {
    location.replace('index3.html');
});


//챕터2 랜덤위치
$(document).ready(function () {
    $(".page2random").each(function () {
        var top = Math.round(Math.random() * 700);
        var left = Math.round(Math.random() * 1600);
        $(this).css('top', top)
        $(this).css('left', left)
    })
});
setInterval(toggle, 2000);
function toggle() {
    $(document).ready(function () {
        $(".page2random").each(function () {
            var top = Math.round(Math.random() * 700);
            var left = Math.round(Math.random() * 1600);
            $(this).css('top', top)
            $(this).css('left', left)
        })
    });
}


//챕터3 랜덤위치
$(document).ready(function () {
    $(".page3random").each(function () {
        var top = Math.round(Math.random() * 700);
        var left = Math.round(Math.random() * 1350);
        $(this).css('top', top)
        $(this).css('left', left)
    })
});
setInterval(toggle2, 1200);
function toggle2() {
    $(document).ready(function () {
        $(".page3random").each(function () {
            var top = Math.round(Math.random() * 700);
            var left = Math.round(Math.random() * 1600);
            $(this).css('top', top)
            $(this).css('left', left)
        })
    });
}


//압축풀기
function progress2000a() {
    var a = document.getElementById("progress");
    var b = document.getElementById("progress-bar");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 풀기 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content1').show();
        $('#folder1').hide();
        c.innerHTML = "압축 푸는 중...";
    }, 3200);
}

function progress2010a() {
    var a = document.getElementById("progress");
    var b = document.getElementById("progress-bar");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 풀기 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content2').show();
        $('#folder2').hide();
        c.innerHTML = "압축 푸는 중...";
    }, 3200);
}

function progress2016a() {
    var a = document.getElementById("progress");
    var b = document.getElementById("progress-bar");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 풀기 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content3').show();
        $('#folder3').hide();
        $('#side').show();
        c.innerHTML = "압축 푸는 중...";
    }, 3200);
}

function progress2019a() {
    var a = document.getElementById("progress");
    var b = document.getElementById("progress-bar");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 풀기 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content4').show();
        $('#folder5').hide();
        c.innerHTML = "압축 푸는 중...";
    }, 3200);
}

function progress2020a() {
    var a = document.getElementById("progress");
    var b = document.getElementById("progress-bar");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 풀기 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content5').show();
        $('#folder6').hide();
        c.innerHTML = "압축 푸는 중...";
    }, 3200);
}

function progress2021a() {
    var a = document.getElementById("progress");
    var b = document.getElementById("progress-bar");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 풀기 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content6').show();
        $('#folder7').hide();
        c.innerHTML = "압축 푸는 중...";
    }, 3200);
}

function progress2022a() {
    var a = document.getElementById("progress");
    var b = document.getElementById("progress-bar");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 풀기 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content7').show();
        $('#folder8').hide();
        c.innerHTML = "압축 푸는 중...";
    }, 3200);
}

//압축하기
function progress2000b() {
    var a = document.getElementById("progress2");
    var b = document.getElementById("progress-bar2");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content1').hide();
        $('#folder1').show();
        $('#side').show();
        c.innerHTML = "압축하는 중...";
    }, 3200);
}

function progress2010b() {
    var a = document.getElementById("progress2");
    var b = document.getElementById("progress-bar2");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content2').hide();
        $('#folder2').show();
        c.innerHTML = "압축하는 중...";
    }, 3200);
}

function progress2016b() {
    var a = document.getElementById("progress2");
    var b = document.getElementById("progress-bar2");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content3').hide();
        $('#folder3').show();
        c.innerHTML = "압축하는 중...";
    }, 3200);
}

function progress2019b() {
    var a = document.getElementById("progress2");
    var b = document.getElementById("progress-bar2");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content4').hide();
        $('#folder5').show();
        c.innerHTML = "압축하는 중...";
    }, 3200);
}

function progress2020b() {
    var a = document.getElementById("progress2");
    var b = document.getElementById("progress-bar2");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content5').hide();
        $('#folder6').show();
        c.innerHTML = "압축하는 중...";
    }, 3200);
}


function progress2021b() {
    var a = document.getElementById("progress2");
    var b = document.getElementById("progress-bar2");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content6').hide();
        $('#folder7').show();
        c.innerHTML = "압축하는 중...";
    }, 3200);
}

function progress2022b() {
    var a = document.getElementById("progress2");
    var b = document.getElementById("progress-bar2");
    var c = document.getElementById("progress-text");
    a.style.display = "block";
    setTimeout(function () {
        b.style.width = "100%";
    }, 100);
    setTimeout(function () {
        c.innerHTML = "압축 완료!";
    }, 2500);
    setTimeout(function () {
        a.style.display = "none";
        b.style.width = "0%";
        $('.content7').hide();
        $('#folder8').show();
        c.innerHTML = "압축하는 중...";
    }, 3200);
}

function _rancolor() {
    var rancolors = ['1', '2', '3', '4', '5'];
    var rancolor = Math.floor(Math.random() * rancolors.length);
    if (rancolor == 1) {
        $('.bg1').css('background', '#f9c116');
        $('.bg2').css('background', '#f8bbb8');
        $('.bg3').css('background', '#00935d');
        $('.bg4').css('background', '#519ed9');
        $('.bg5').css('background', '#ef4a34');
    } else if (rancolor == 2) {
        $('.bg1').css('background', '#f8bbb8');
        $('.bg2').css('background', '#00935d');
        $('.bg3').css('background', '#519ed9');
        $('.bg4').css('background', '#ef4a34');
        $('.bg5').css('background', '#f9c116');
    } else if (rancolor == 3) {
        $('.bg1').css('background', '#00935d');
        $('.bg2').css('background', '#519ed9');
        $('.bg3').css('background', '#ef4a34');
        $('.bg4').css('background', '#f9c116');
        $('.bg5').css('background', '#f8bbb8');
    } else if (rancolor == 4) {
        $('.bg1').css('background', '#519ed9');
        $('.bg2').css('background', '#ef4a34');
        $('.bg3').css('background', '#f9c116');
        $('.bg4').css('background', '#f8bbb8');
        $('.bg5').css('background', '#00935d');
    } else if (rancolor == 5) {
        $('.bg1').css('background', '#ef4a34');
        $('.bg2').css('background', '#f9c116');
        $('.bg3').css('background', '#f8bbb8');
        $('.bg4').css('background', '#00935d');
        $('.bg5').css('background', '#519ed9');
    }
}
setInterval(_rancolor, 2000);
function _rancolor() {
    var rancolors = ['1', '2', '3', '4', '5'];
    var rancolor = Math.floor(Math.random() * rancolors.length);
    if (rancolor == 1) {
        $('.bg6').css('background', '#f9c116');
        $('.bg7').css('background', '#f8bbb8');
        $('.bg8').css('background', '#00935d');
        $('.bg9').css('background', '#519ed9');
        $('.bg10').css('background', '#ef4a34');
    } else if (rancolor == 2) {
        $('.bg6').css('background', '#f8bbb8');
        $('.bg7').css('background', '#00935d');
        $('.bg8').css('background', '#519ed9');
        $('.bg9').css('background', '#ef4a34');
        $('.bg10').css('background', '#f9c116');
    } else if (rancolor == 3) {
        $('.bg6').css('background', '#00935d');
        $('.bg7').css('background', '#519ed9');
        $('.bg8').css('background', '#ef4a34');
        $('.bg9').css('background', '#f9c116');
        $('.bg10').css('background', '#f8bbb8');
    } else if (rancolor == 4) {
        $('.bg6').css('background', '#519ed9');
        $('.bg7').css('background', '#ef4a34');
        $('.bg8').css('background', '#f9c116');
        $('.bg9').css('background', '#f8bbb8');
        $('.bg10').css('background', '#00935d');
    } else if (rancolor == 5) {
        $('.bg6').css('background', '#ef4a34');
        $('.bg7').css('background', '#f9c116');
        $('.bg8').css('background', '#f8bbb8');
        $('.bg9').css('background', '#00935d');
        $('.bg10').css('background', '#519ed9');
    }
}