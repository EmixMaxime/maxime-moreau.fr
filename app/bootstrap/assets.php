<?php
/**
 * Check if everything's fine to deliver the assets.
 */

$useWebpack = $appEnv === 'prod' ? false : getenv('ASSETS_DELIVERED_WEBPACK') ?: $appEnv === 'dev';

define('ASSETS_DELIVERED_WEBPACK', filter_var($useWebpack, FILTER_VALIDATE_BOOLEAN));

// We use the "assets".json file to deliver the assets.
if (ASSETS_DELIVERED_WEBPACK === false) {
  $assetsFileinfo = getenv('ASSETS_FILEINFO');

  $file = root_path() . '/' . $assetsFileinfo;
  if (!file_exists($file)) {
    throw new Exception('something wrong');
  }
}
// We use webpack-dev-server to deliver the assets.
else {
  $uri = getenv('ASSETS_DELIVERED_WEBPACK_URI');

  if (!$uri) {
    throw new Exception('Missing the variable ASSETS_DELIVERED_WEBPACK_URI in env variables.');
  }

  // Check if webpack-dev-server works !
  // So, do a simple request and check if everything's fine (http_status = 200 and no curl errors).
  $curl = curl_init();
  // Don't echo the output !
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
  
  curl_setopt($curl, CURLOPT_URL, $uri);
  $content = curl_exec($curl);
  $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  $erreur_curl = curl_errno($curl);
  $error = curl_error($curl);
  curl_close($curl);

  if ($http_code == 200 && empty($erreur_curl)) {
    // everything's fine !
  } else {
    $errorDetails = json_encode([
      'HTTP_CODE' => $http_code,
      'HTTP_ERR_DESC' => $error,
      'CURL_ERR_NO' => $erreur_curl,
      'CURL_ERR_DESC' => curl_strerror($erreur_curl)
    ]);

    throw new Error('Problem to connect ' . $errorDetails);
  }


  define('ASSETS_DELIVERED_WEBPACK_URI', $uri);
}