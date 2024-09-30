<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        // Ubah tabel catalogs untuk menambahkan foreign key
        Schema::table('catalogs', function (Blueprint $table) {
            // Hapus kolom 'group' yang lama
            $table->dropColumn('group');

            // Tambahkan kolom foreign key baru
            $table->unsignedBigInteger('group_id');

            // Tetapkan foreign key
            $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Kembalikan perubahan pada tabel catalogs
        Schema::table('catalogs', function (Blueprint $table) {
            $table->dropForeign(['group_id']);
            $table->dropColumn('group_id');

            $table->string('group');
        });

        Schema::dropIfExists('groups');
    }
};
