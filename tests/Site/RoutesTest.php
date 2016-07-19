<?php

namespace App\Tests\Site; 

use App\Tests\TestCase;

class RoutesTest extends TestCase
{
    public function test_can_load_index_page()
    {
        $this->visit('/')
        ->assertResponseOk();
    }

    public function test_can_get_and_cache_user_info()
    {
        $response = $this->call('GET', 'user/github');
        $content = json_decode($response->getContent(), true);

        $this->assertResponseOk();
        $this->assertArrayHasKey('github_response_code', $content);
        $this->assertArrayHasKey('data', $content);

        $this->assertTrue(app('cache')->has(md5('github')));
        $this->assertEquals('GitHub', app('cache')->get(md5('github'))['data']['name']);

    }
}
