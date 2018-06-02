<?php

namespace App\Providers;

use Interop\Container\ContainerInterface;
use Slim\Views\Twig;
use Symfony\Component\Translation\Translator;

class LangServiceProvider extends ServiceProvider
{
	public function __construct(ContainerInterface $container)
	{
		parent::__construct($container);
	}

	public function run(): void
	{
		$this->container['translator'] = function(): Translator {
			$langConfig = $this->configRepository->get('lang');
			$translator = new \Symfony\Component\Translation\Translator('en_US');
			// $translator = new Symfony\Component\Translation\Translator('fr_FR');
			
			$path = $langConfig['path'];
			
			$arr = [];
			foreach (glob("${path}/fr_FR/*.fr_FR.php") as $path) {
				$filename = basename($path);
				$arr[basename($filename)] = include($path);
			}
		
			$translations = [];
		
			/**
			 * ['skills.fr_FR.php' => ['Bonjour' => 'Hello world']]
			 * to
			 * ['Bonjour' => 'Hello world']
			 */
			foreach ($arr as $key => $value) {
				$translations = array_merge($translations, $value);
			}
		
			$arrayLoader = $yamlLoader = new \Symfony\Component\Translation\Loader\ArrayLoader();
			$translator->addLoader('array', $arrayLoader);
		
			$translator->addResource('array', $translations, 'en_US');
		
			return $translator;
		};
	}
}