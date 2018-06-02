<?php

namespace App\Http\Controllers;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class HomeController extends BaseController
{

	public function __construct(ContainerInterface $container)
	{
		parent::__construct($container);
	}

	public function home(RequestInterface $request, ResponseInterface $response)
	{
		$data = $this->getData(['skills', 'creations']);
		return $this->render($response, 'site/home.twig', compact('data'));
	}

}
