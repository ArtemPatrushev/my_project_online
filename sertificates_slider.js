'use strict';

const slidesToShow = 9;
const slidesToScroll = 1;
const container = document.querySelector('.sertificates_window');
const track = document.querySelector('.sertificates_watch');
const itemCount = document.querySelectorAll('.sertificate_img').length;
const arrowLeft = document.querySelector('.fas fa-angle-left');
const arrowRight = document.querySelector('.fas fa-angle-right');
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;