<?php

namespace App\Http\Controllers;

use App\Services\GithubApiService;

class SiteController extends Controller
{
    public function index()
    {
        return view('welcome')->with(['title' => 'Github User Finder']);
    }

    public function showUser($username, GithubApiService $service)
    {
        $response = app('cache')->remember(md5($username), 30, function () use ($service, $username) {
            return $service->getUserByName($username);
        });

        return response()->json($response);
    }
}
