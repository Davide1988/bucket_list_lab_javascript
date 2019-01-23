const PubSub = require('../helpers/pub_sub.js')

const WishFinalView = function(space){
  this.space = space

}

WishFinalView.prototype.render = function (data) {

  data.forEach((wish) =>{

    const div = document.createElement('div')
    div.classList.add('wish-div')
    this.space.appendChild(div)


    const p = document.createElement('p')
    p.textContent = `My wish: ${wish.wish}`

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "Delete"
    deleteButton.classList.add('delete-button')
    deleteButton.value = wish._id
    deleteButton.addEventListener('click', (evt) =>{
      PubSub.publish('wishFinalView:Wish:targetedId', evt.target.value)
    })




    div.appendChild(p)
    div.appendChild(deleteButton)

  })
};


module.exports = WishFinalView;
