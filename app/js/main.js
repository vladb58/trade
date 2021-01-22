$(function () {
 
  $('.result__inner').slick({
    centerMode: true,
    variableWidth: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    nextArrow: '<button type="button" class="slick-prev"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">< circle cx="18.5" cy="18.5" r="18.5" fill="url(#paint0_linear)" /><path d="M9.33333 19.3499L25.9579 19.3499L19.5921 25.5344C19.2587 25.8583 19.2458 26.3963 19.5633 26.7363C19.8804 27.0759 20.4079 27.0895 20.7417 26.7656L28.0117 19.7022C28.3262 19.3809 28.5 18.9542 28.5 18.4999C28.5 18.046 28.3262 17.6189 27.9971 17.2836L20.7412 10.2346C20.58 10.0778 20.3733 10 20.1667 10C19.9467 10 19.7267 10.0884 19.5629 10.2639C19.2454 10.6039 19.2583 11.1415 19.5917 11.4654L25.9842 17.6499L9.33333 17.6499C8.87333 17.6499 8.5 18.0307 8.5 18.4999C8.5 18.9691 8.87333 19.3499 9.33333 19.3499Z" fill="white"/><defs><linearGradient id="paint0_linear" x1="0" y1="0" x2="37" y2="37" gradientUnits="userSpaceOnUse"><stop stop-color="#F8E326"/><stop offset="1" stop-color="#FFB432"/></linearGradient></defs></svg></button>',
    prevArrow: '<button type="button" class="slick-next"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">< circle cx="18.5" cy="18.5" r="18.5" transform="rotate(-180 18.5 18.5)" fill="url(#paint0_linear)" /><path d="M27.6667 17.6501H11.0421L17.4079 11.4656C17.7413 11.1417 17.7542 10.6037 17.4367 10.2637C17.1196 9.92413 16.5921 9.91053 16.2583 10.2344L8.98833 17.2978C8.67375 17.6191 8.5 18.0458 8.5 18.5001C8.5 18.954 8.67375 19.3811 9.00292 19.7164L16.2587 26.7654C16.42 26.9222 16.6267 27 16.8333 27C17.0533 27 17.2733 26.9116 17.4371 26.7361C17.7546 26.3961 17.7417 25.8585 17.4083 25.5346L11.0158 19.3501H27.6667C28.1267 19.3501 28.5 18.9693 28.5 18.5001C28.5 18.0309 28.1267 17.6501 27.6667 17.6501Z" fill="white"/><defs><linearGradient id="paint0_linear" x1="1.90735e-06" y1="-190735e-06" x2="37" y2="37" gradientUnits="userSpaceOnUse"><stop stop-color="#F8E326"/><stop offset="1" stop-color="#FFB432"/></linearGradient></defs></svg></button>',
  });

  $('.feedback-trust__box-link').on('click', function (e) {
    e.preventDefault();
    $(this).siblings('.feedback-trust__box-text').addClass('feedback-trust__box-text--hidden');
    $(this).siblings('.feedback-trust__box-textplus').addClass('feedback-trust__box-textplus--active');

    $(this).addClass('feedback-trust__box-link--active');
  });

})