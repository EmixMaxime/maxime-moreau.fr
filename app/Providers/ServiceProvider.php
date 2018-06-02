<?php
namespace App\Providers;
use Interop\Container\ContainerInterface;

class ServiceProvider
{
	/**
	 * @var ContainerInterface
	 */
	protected $container;

	protected $configRepository;

	public function __construct(ContainerInterface $container)
	{
		$this->container = $container;
		$this->configRepository = $container->get('config');
	}
}
