#!/usr/bin/env bash

php -S localhost:${1:-7000} -t public/ -ddisplay_errors=1 -dzned_extensions=xdebug.so
