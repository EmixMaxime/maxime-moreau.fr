<?php

require './vendor/autoload.php';

use Spatie\Browsershot\Browsershot;

Browsershot::url('http://localhost:8080/cv')
  ->showBackground()
  ->savePdf('cv.pdf');
