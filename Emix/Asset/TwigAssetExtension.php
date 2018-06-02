<?php
namespace Emix\Asset;

use Emix\Asset\Asset;
use Twig_Extension;

class TwigAssetExtension extends Twig_Extension
{
	private $asset;

	public function __construct(Asset $asset)
	{
		$this->asset = $asset;
	}

	public function getFunctions(): array
	{
		return [
			new \Twig_SimpleFunction('asset', [$this->asset, 'path'])
		];
	}
}
