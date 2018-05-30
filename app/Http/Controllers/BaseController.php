<?php
namespace App\http\Controllers;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Slim\Views\Twig;
use Emix\Support\PathHelpers;

class BaseController
{

	/**
	 * @var ContainerInterface
	 */
	private $container;

	/**
	 * @var Twig
	 */
	private $view;

	/**
	 * 
	 */
	protected $pathHelpers;


	public function __construct (ContainerInterface $container)
	{
		$this->container = $container;
		$this->view = $container->get('view');
		$this->pathHelpers = $container->get(PathHelpers::class);
	}

	protected function render(ResponseInterface $response, $file, $data = []): ResponseInterface
	{
		return $this->view->render($response, $file, $data);
	}

	protected function getData(array $names): array
	{
		$dataPath = $this->pathHelpers->data;
		$arr = [];

		foreach (glob("${dataPath}/*.data.php") as $path) {
			$filename = basename($path, '.data.php');
			$arr[basename($filename)] = include($path);
		}

		return $arr;
	}

}
