<?php

namespace App\Providers;

use Interop\Container\ContainerInterface;
use Slim\Views\Twig;


class ViewServiceProvider extends ServiceProvider
{
	public function __construct(ContainerInterface $container)
	{
		parent::__construct($container);
	}

	public function run(): void
	{
		$this->container['view'] = function (ContainerInterface $container): Twig {
			$viewBuilder = new \App\View($container, $container->get('config'));
			$view = $viewBuilder->getTwig();

			return $view;
		};
	}
}