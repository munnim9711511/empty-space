'use strict'

class SpaceController {
  async index({view}){
    return view.render('welcome');
  }
  async adminLogin({view}){
    return view .render('adminLogin');
  }
  async validateUser({request}){

  }
  async adminPanel({view}){
    return view.render('admin');
  }
}

module.exports = SpaceController
