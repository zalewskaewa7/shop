<?php

namespace App\Http\Controllers;
use App\Models\Apiary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Response;



class ApiaryController extends Controller
{
    public function index()
    {
    
        $data= Apiary::all();
        
        return $data;
    }
}
