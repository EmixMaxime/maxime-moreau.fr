<?php
namespace Emix\Twig;

use Emix\Config\ConfigRepository;
use Twig_Extension;

class TwigEnvExtension extends Twig_Extension {

	private $config;

	public function __construct(ConfigRepository $config)
	{
		$this->config = $config;
	}

	public function getFunctions()
	{
		return [
			new \Twig_SimpleFunction('getConfig', [$this->config, 'get'])
		];
	}
}
