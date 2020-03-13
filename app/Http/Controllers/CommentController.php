<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Db;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function handleGetComments() {
        $lastFiveComments = DB::select('select * from comments order by created_at desc limit 5', []);
        
        return $lastFiveComments;
    }
    
    public function handlePostComment(Request $request) {
        $validatedData = $request->validate([
            'name' => 'required',
            'content' => 'required',
            'email' => 'required'
        ]);

        $id = DB::table('comments')->insertGetId(
            ['name' => $validatedData['name'], 'email' => $validatedData['email'], 'content' => $validatedData['content'], 'created_at' => now()]
        );

        if (!$id) {
            return response()->json('Failed to save comment');
        }

        $lastFiveComments = DB::select('select * from comments order by created_at desc limit 5', []);

        return $lastFiveComments;
    }
}
