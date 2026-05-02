<?php

use App\Models\Company;
use Illuminate\Support\Facades\Route;

Route::get('/companies', function () {
    return Company::all();
});
