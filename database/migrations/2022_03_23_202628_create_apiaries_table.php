<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApiariesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apiaries', function (Blueprint $table) {
            $table->id();
            $table->string('imageName') ;
            $table-> string('honeyType') ;
            $table-> string('weight') ;
            $table-> string('price') ;
            $table-> string('quantity') ;
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apiaries');
    }
}
