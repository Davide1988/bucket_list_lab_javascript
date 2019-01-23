const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')



const Bucket =  function(url){
  this.url = url
}


Bucket.prototype.bindEvent = function () {
  PubSub.subscribe('WishForm:Bucket:newWish', (evt) =>{
    this.sendDatabase(evt.detail);
})
}


Bucket.prototype.getData = function () {
  const request = new RequestHelper(this.url)
  const wish = request.get()
    .then((datas) =>{
      PubSub.publish('Bucket:WishFirstView:datas', datas);
    })
};

Bucket.prototype.sendDatabase = function (newWish) {
  const request = new RequestHelper(this.url)
  request.post(newWish)
    .then((listUpdated) =>{
    PubSub.publish('Bucket:WishFirstView:datas', listUpdated)
    })
};

Bucket.prototype.deleteWish = function () {
  PubSub.subscribe('wishFinalView:Wish:targetedId', (evt) =>{
    const gameId = evt.detail
      const request = new RequestHelper(this.url)
      request.delete(gameId)
        .then((wishList) => {
          PubSub.publish('Bucket:WishFirstView:datas', wishList)
        })
  })
};

module.exports = Bucket;
