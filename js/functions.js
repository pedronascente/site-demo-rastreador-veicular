$(window)['on']('load', function() {
    'use strict';
    $('#status')['fadeOut']();
    $('#preloader')['delay'](350)['fadeOut']('slow');
    $('body')['delay'](350)['css']({
        "\x6F\x76\x65\x72\x66\x6C\x6F\x77": 'visible'
    })
});
$(window)['on']('resize', function() {
    'use strict';
    if ($(window)['width']() >= 1024) {
        $('header')['headroom']({
            "\x6F\x66\x66\x73\x65\x74": 150,
            "\x74\x6F\x6C\x65\x72\x61\x6E\x63\x65": 5,
            "\x63\x6C\x61\x73\x73\x65\x73": {
                "\x69\x6E\x69\x74\x69\x61\x6C": 'animated',
                "\x70\x69\x6E\x6E\x65\x64": 'slideDown',
                "\x75\x6E\x70\x69\x6E\x6E\x65\x64": 'slideUp'
            }
        })
    } else {
        $('header')['removeClass']('animated')
    }
})['resize']();
$('.tooltip-1')['tooltip']({
    html: true
});

function toggleChevron(_0xf896x2) {
    'use strict';
    $(_0xf896x2['target'])['prev']('.panel-heading')['find']('i.indicator')['toggleClass']('icon_plus_alt2 icon_minus_alt2')
}
$('#accordion')['on']('hidden.bs.collapse shown.bs.collapse', toggleChevron);
if ($(window)['width']() >= 768) {
    $('footer')['footerReveal']({
        shadow: false,
        zIndex: 0
    })
};
$('input.icheck')['iCheck']({
    checkboxClass: 'icheckbox_square-grey',
    radioClass: 'iradio_square-grey'
});
$(function() {
    'use strict';
    $('.video')['magnificPopup']({
        type: 'iframe'
    });
    $('.magnific-gallery')['each'](function() {
        $(this)['magnificPopup']({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        })
    });
    var _0xf896x3 = document['querySelectorAll']('.cmn-toggle-switch');
    for (var _0xf896x4 = _0xf896x3['length'] - 1; _0xf896x4 >= 0; _0xf896x4--) {
        var _0xf896x5 = _0xf896x3[_0xf896x4];
        _0xf896x6(_0xf896x5)
    };

    function _0xf896x6(_0xf896x5) {
        _0xf896x5['addEventListener']('click', function(_0xf896x2) {
            _0xf896x2['preventDefault']();
            (this['classList']['contains']('active') === true) ? this['classList']['remove']('active'): this['classList']['add']('active')
        })
    }
    $(window)['on']('scroll', function() {
        'use strict';
        if ($(this)['scrollTop']() != 0) {
            $('#toTop')['fadeIn']()
        } else {
            $('#toTop')['fadeOut']()
        }
    });
    $('#toTop')['on']('click', function() {
        $('body,html')['animate']({
            scrollTop: 0
        }, 500)
    })
});
$('.carousel_testimonials')['owlCarousel']({
    items: 1,
    loop: true,
    autoplay: false,
    animateIn: 'flipInX',
    margin: 30,
    stagePadding: 30,
    smartSpeed: 450,
    responsiveClass: true,
    responsive: {
        600: {
            items: 1
        },
        1000: {
            items: 1,
            nav: false
        }
    }
});
$('.numbers-row')['append']('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>');
$('.button_inc')['on']('click', function() {
    var _0xf896x7 = $(this);
    var _0xf896x8 = _0xf896x7['parent']()['find']('input')['val']();
    if (_0xf896x7['text']() == '+') {
        var _0xf896x9 = parseFloat(_0xf896x8) + 1
    } else {
        if (_0xf896x8 > 1) {
            var _0xf896x9 = parseFloat(_0xf896x8) - 1
        } else {
            _0xf896x9 = 0
        }
    };
    _0xf896x7['parent']()['find']('input')['val'](_0xf896x9)
})