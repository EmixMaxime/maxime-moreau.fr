<?php

require './vendor/autoload.php';

use Spatie\Browsershot\Browsershot;

Browsershot::url('http://localhost:7000/cv')
  ->showBackground()
  ->savePdf('cv.pdf');
