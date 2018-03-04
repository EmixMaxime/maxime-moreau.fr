<?php

require './vendor/autoload.php';

use Spatie\Browsershot\Browsershot;

Browsershot::url('http://localhost:7000/cv-fr')
  ->showBackground()
  ->savePdf('cv-fr.pdf');
