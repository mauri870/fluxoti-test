<?php

namespace App\Services;

use GuzzleHttp\Client;
use Symfony\Component\HttpFoundation\Response;

class GithubApiService
{
    /**
     * @var Client
     */
    private $client;

    public function __construct(Client $client)
    {

        $this->client = $client;
    }

    /**
     * Get the user information from Github Api based on username
     *
     * @param $username
     * @return array
     */
    public function getUserByName($username)
    {
        $response = $this->client->request('GET', sprintf('https://api.github.com/users/%s', $username), ['exceptions' => false]);

        if ($response->getStatusCode() === 200) {
            $content = ['data' => json_decode($response->getBody()->getContents(), true)];
        } else {
            $content = ['message' => Response::$statusTexts[$response->getStatusCode()]];
        }

        return array_merge(['code' => $response->getStatusCode()], $content);
    }

}