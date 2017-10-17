<?php

namespace App\Http\Controllers;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

class CvController extends BaseController
{

  public function __construct (ContainerInterface $container)
  {
    parent::__construct($container);
  }

  public function __invoke(RequestInterface $request, ResponseInterface $response)
  {
    return $this->render($response, 'cv/cv.twig');
  }

}
