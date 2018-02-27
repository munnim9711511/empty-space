'use strict'

class SpaceController {
  async index({view}){
    return view.render('welcome');
  }
}

module.exports = SpaceController
