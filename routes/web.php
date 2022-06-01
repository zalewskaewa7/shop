<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layout.welcome');
});
Route::get('/sklep', function () {
    return view('layout.welcome');
});
Route::get('/kontakt', function () {
    return view('layout.welcome');
});
Route::get('/koszyk', function () {
    return view('layout.welcome');
});
Route::get('/datatosend', function () {
    return view('layout.welcome');
});
// Route::get('/menu', function () {
//     return view('layout.menu');
// });

