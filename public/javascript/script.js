const ARTICLE_BODY = document.querySelector('.article__body');
const SHARE_BUTTON = document.querySelector('.share__button');
const SHARE_SOCIAL_LIST_WRAPPER = document.querySelector('.share__social-list-wrapper');
let articleBodyWidth = getComputedStyle(ARTICLE_BODY).width;

SHARE_SOCIAL_LIST_WRAPPER.style = `--article-body-width: ${articleBodyWidth}`;

window.addEventListener('resize', () => {
  SHARE_SOCIAL_LIST_WRAPPER.style = `--article-body-width: ${getComputedStyle(ARTICLE_BODY).width}`;
});

SHARE_BUTTON.addEventListener('click', () => {
  SHARE_BUTTON.classList.toggle('clicked');
  SHARE_BUTTON.setAttribute('aria-expanded', SHARE_BUTTON.classList.contains('clicked'));
  SHARE_SOCIAL_LIST_WRAPPER.classList.toggle('active');
  SHARE_SOCIAL_LIST_WRAPPER.setAttribute('aria-hidden', !SHARE_SOCIAL_LIST_WRAPPER.classList.contains('active'));
});

// share functionality
const LINK = encodeURI(window.location.href);
const FACEBOOK_LINK = document.getElementById('facebook-link');
const TWITTER_LINK = document.getElementById('twitter-link');
const PINTEREST_LINK = document.getElementById('pinterest-link');
FACEBOOK_LINK.href = `https://www.facebook.com/share.php?u=${LINK}`;
TWITTER_LINK.href = `https://www.twitter.com/share?&url=${LINK}`;
PINTEREST_LINK.href = `https://www.pinterest.com/pin/create/button/?url=${LINK}`;
