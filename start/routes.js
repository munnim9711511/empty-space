'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/','SpaceController.index');
Route.get('/galery','SpaceController.galaryPage');
Route.get('/wp-admin','SpaceController.adminLogin');
Route.get('/admin-panel','SpaceController.adminPanel');

Route.post('/test-validation','SpaceController.validateUser');
