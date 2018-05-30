<?php
namespace App\Providers;
use Interop\Container\ContainerInterface;

class ServiceProvider
{
	/**
	 * @var ContainerInterface
	 */
	protected $container;

	public function __construct(ContainerInterface $container)
	{
		$this->container = $container;
	}
}
