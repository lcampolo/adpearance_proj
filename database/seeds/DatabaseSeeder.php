<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->insert([
            ['name' => 'Ned Stark', 'email' => 'ned.stark@winterfell.com', 'comment' => 'Winter is coming', 'created_at' => '2020-03-05 00:00:00'],
            ['name' => 'Daenerys Targaryen', 'email' => 'dtarg@dragons.com', 'comment' => 'Bend the knee', 'created_at' => '2020-03-06 00:00:00'],
            ['name' => 'Tyrion Lannister', 'email' => 'tyrion@kingslanding.com', 'comment' => 'I drink and I know things', 'created_at' => '2020-03-07 00:00:00'],
            ['name' => 'Arya Stark', 'email' => 'arya@winterfell.com', 'comment' => 'Not today', 'created_at' => '2020-03-08 00:00:00'],
            ['name' => 'Night King', 'email' => 'white_walker_lord@thenorth.com', 'comment' => '....Hrmmmmmm', 'created_at' => '2020-03-10 00:00:00']

        ])
    }
}
