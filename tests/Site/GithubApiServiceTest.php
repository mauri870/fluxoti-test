<?php

namespace App\Tests\Site; 

use App\Tests\TestCase;
use App\Services\GithubApiService;
use Symfony\Component\HttpFoundation\Response;

class GithubApiServiceTest extends TestCase
{
    /**
     * @var GithubApiService
     */
    private $service;

    public function setUp()
    {
        parent::setUp();
        $this->service = app(GithubApiService::class);
    }

    public function test_can_get_valid_user_by_name()
    {
        $response = $this->service->getUserByName('github');

        $this->assertEquals(200, $response['code']);
        $this->assertArrayHasKey('data', $response);
        $this->assertEquals('GitHub', $response['data']['name']);
        $this->assertEquals('How people build software.', $response['data']['bio']);
    }

    public function test_error_when_try_an_invalid_user()
    {
        $response = $this->service->getUserByName('invalid_user!@#$%&*()');

        $this->assertEquals(404, $response['code']);
        $this->assertEquals(Response::$statusTexts[404], $response['message']);
    }
}
