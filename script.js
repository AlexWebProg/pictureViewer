// Choosing a main photo by clicking preview
$('.previewPhoto').click(function(){
    $('#mainPhoto').attr('src',$(this).attr('src'));
    $('.previewPhotoActive').removeClass('previewPhotoActive');
    $(this).addClass('previewPhotoActive');
});

// Opening a block with big photo and previews
$('#zoom').click(function(){
    window.scrollTo(0,0);
    var bigPhotos = $('#bigPhotos'),
        bigPhotoMain = $('#bigPhotoMain'),
        windowH = window.innerHeight,
        windowW = window.innerWidth,
        maxHeight = windowH-30,
        maxWidth = windowW-200,
        src = $('#mainPhoto').attr('src');
    $('.previewBigPhotoActive').removeClass('previewBigPhotoActive');
    $('.previewBigPhoto[src="'+src+'"]').addClass('previewBigPhotoActive');
    src = src.replace('small', 'big');
    bigPhotoMain.attr('src',src);
    $('#bigPhotos_background').show();
    bigPhotos.show();
    $('body').css('overflow','hidden');
    bigPhotoMain.css('max-height',maxHeight).css('width','auto');
    var bigPhotoMainW = bigPhotoMain.width();
    if (bigPhotoMainW > maxWidth){
        bigPhotoMain.css('max-width',maxWidth).css('height','auto');
    }
    var bigPhotosW = bigPhotos.width(), left = (windowW - bigPhotosW)/2 - 8;
    bigPhotos.css('left',left);
});

// Closing big photos block
$('#close_bigPhotos,#bigPhotos_background').click(function(){
    $('#bigPhotos').hide();
    $('#bigPhotos_background').hide();
    $('body').css('overflow','scroll');
});

// Choosing big photo by preview click in big photos block
$('.previewBigPhoto').click(function(){
    var src = $(this).attr('src');
    src = src.replace('small', 'big');
    $('#bigPhotoMain').attr('src',src);
    $('.previewBigPhotoActive').removeClass('previewBigPhotoActive');
    $(this).addClass('previewBigPhotoActive');
});

// Enlarging a big photo by clicking it
$("#bigPhotoMain").imagezoomsl({
    zoomrange: [1, 4],
    zoomstart: 2,
    innerzoom: true,
    magnifierborder: "#ff9900 1px solid",
    zoomspeedanimate: 1,
    magnifiereffectanimate: "none"
});