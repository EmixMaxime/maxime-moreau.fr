<?php

namespace Emix\Config;

interface ConfigRepositoryInterface
{
	public static function getInstance(): ConfigRepositoryInterface;

	public function get($key, $default = NULL);
}
