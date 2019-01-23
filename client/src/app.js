const Bucket = require('./models/bucket.js')
const WishFirstView = require('./views/wish_first_view.js')
const WishFormView = require('./views/wish_form_view.js')


document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#newItem')
  const formView = new WishFormView(form)
  formView.bindEvent();

  const space = document.querySelector("#container");
  const wish_first_view = new WishFirstView(space);
  wish_first_view.bindEvent();

  const url = 'http://localhost:3000/api/wish'
  const bucket = new Bucket(url)
  bucket.deleteWish();
  bucket.bindEvent();
  bucket.getData();



});
