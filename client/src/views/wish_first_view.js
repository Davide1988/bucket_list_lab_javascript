const PubSub = require('../helpers/pub_sub.js')
const WishFinalView = require('./wish_final_view.js')

const WishFirstView = function(space){
  this.space = space

}

WishFirstView.prototype.bindEvent= function () {
  PubSub.subscribe('Bucket:WishFirstView:datas', (evt) =>{
    const wishes =  evt.detail
    this.pass(wishes);
  })
};

WishFirstView.prototype.pass = function (data) {
  this.space.innerHTML = '';
  const finalView = new WishFinalView(this.space)
  finalView.render(data)
};




module.exports = WishFirstView
