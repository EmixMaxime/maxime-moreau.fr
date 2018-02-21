.PHONY: phpserve clean dev build pdf

BUILD_FOLDER = ./resources/assets/build
DIST_FOLDER = ./public/assets
VIEW_CACHE_FOLDER = ./storage/framework/views

phpserve:
	sh ./server.sh

dev:
	cd $(BUILD_FOLDER) && npm run dev

clean:
	cd $(VIEW_CACHE_FOLDER) && rm -fR *

build:
	rm -R $(DIST_FOLDER)
	cd $(BUILD_FOLDER) && npm run build

pdf:
	php ./generation-pdf.php
