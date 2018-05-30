<?php

namespace App;

use Interop\Container\ContainerInterface;
use Slim\Views\Twig;
use Slim\Views\TwigExtension;
use Symfony\Bridge\Twig\Extension\TranslationExtension;

class View
{
	private $container;

	private $config;

	private $viewConfig;
	private $twigConfig;

	private $twig;
	private $twigEnv;

	private $env;

	public function __construct(ContainerInterface $container)
	{
		$this->container = $container;

		$config = $container->get('config');
		$env = $config->get('app.env');

		$c = $config->get('view');
		$this->viewConfig = $c['general'];
		$twigConfig = $c['twig'];

		$this->twig = new Twig($twigConfig['path'], $twigConfig);
		$this->twigEnv = $this->twig->getEnvironment();

		$this->config = $config;
		$this->env = $env;
		$this->twigConfig = $twigConfig;

		$this->slim();
		$this->addGlobals();
		$this->addExtensions();
		$this->addTranslator();
	}

	/**
	 * Compatibility with slim framework
	 */
	private function slim(): void
	{
		$basePath = rtrim(
			str_ireplace(
				'index.php',
				'',
				$this->container['request']->getUri()->getBasePath()
			), '/');

		$this->twig->addExtension(new TwigExtension($this->container['router'], $basePath));
	}

	private function addGlobals(): void
	{
		$this->twigEnv->addGlobal('uri', $this->container['request']->getUri());
		$this->twigEnv->addGlobal('path', $this->container['request']->getUri()->getPath());
		$this->twigEnv->addGlobal('request', $this->container['request']);
		// $this->addGlobals($container, $twigEnv);

		$siteConfig = $this->config->get('site');
		$this->twigEnv->addGlobal("site", $siteConfig);

		$socials = $this->config->get('social') ?? [];

		foreach ($socials as $socialName => $socialLink) {
			$this->twigEnv->addGlobal($socialName, $socialLink);
		}
	}

	private function addExtensions(): void
	{
		if ($this->env === 'dev') {
			$this->twig->addExtension(new \Twig_Extension_Debug());
		}

		$extensions = $this->viewConfig['extensions'];

		foreach($extensions as $ext) {
			$this->twigEnv->addExtension($this->container->get($ext));
		}
	}

	private function addTranslator(): void
	{
		$translator = $this->container['translator'];
		$this->twig->addExtension(new TranslationExtension($translator));
	}

	public function getTwig(): Twig
	{
		return $this->twig;
	}
}
