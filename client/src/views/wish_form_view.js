const PubSub = require('../helpers/pub_sub.js')

const WishFormView = function(form){
  this.form = form
}


WishFormView.prototype.bindEvent= function () {
  this.form.addEventListener('submit', (evt) => {
    this.doSubmit(evt);
    evt.target.reset()
  });
};

WishFormView.prototype.doSubmit = function (evt) {
  evt.preventDefault();
  debugger
  const newWish = {
    wish: evt.target.exp.value
  }
  PubSub.publish('WishForm:Bucket:newWish', newWish)
};

module.exports = WishFormView;
