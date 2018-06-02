<?php

use Emix\Asset\Asset;
use Emix\Asset\TwigAssetExtension;
use Emix\Config\ConfigRepository;
use Emix\Config\ConfigRepositoryInterface;
use Emix\Twig\TwigEnvExtension;
use Psr\Container\ContainerInterface;

$container = $app->getContainer();

$container['config'] = function () use ($configRepository): ConfigRepositoryInterface {
  return $configRepository;
};

$container[\Emix\Support\PathHelpers::class] = function (ContainerInterface $container) use ($pathHelpers) {
  return $pathHelpers;
};

$container[Asset::class] = function (ContainerInterface $container) use($configRepository) {
  $appConfig = $configRepository->get('app');

  if (ASSETS_DELIVERED_WEBPACK) {
    return new \Emix\Asset\Asset(null, ASSETS_DELIVERED_WEBPACK_URI . '/' . getenv('ASSETS_PUBLIC_PATH'));
  }

  return new \Emix\Asset\Asset(ASSETS_FILEINFO_PATH);
};

$container[TwigAssetExtension::class] = function (ContainerInterface $container) {
  return new \Emix\Asset\TwigAssetExtension($container[\Emix\Asset\Asset::class]);
};

$container[TwigEnvExtension::class] = function ($container) {
	return new \Emix\Twig\TwigEnvExtension($container['config']);
};

$container['lang'] = function() use ($configRepository) {
	$userPrefLang = $_GET['lang'] ?? null;
	$httpAcceptLang = $_SERVER["HTTP_ACCEPT_LANGUAGE"] ?? null;
	$langConfig = $configRepository->get('lang');


	// String $userPrefLang, String $httpAcceptLang, array $supportedLanguages, String $defaultLang
	return new \Emix\Lang\Lang($userPrefLang, $httpAcceptLang, $langConfig['supported'], $langConfig['default']);
};

$viewServiceProvider = new \App\Providers\ViewServiceProvider($container);
$viewServiceProvider->run();

$translatorServiceProvider = new \App\Providers\TranslatorServiceProvider($container);
$translatorServiceProvider->run();
