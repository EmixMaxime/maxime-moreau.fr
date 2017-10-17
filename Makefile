.PHONY: phpserve dev build pdf

BUILD_FOLDER = ./resources/assets/build
DIST_FOLDER = ./public/assets

phpserve:
	sh ./server.sh

dev:
	cd $(BUILD_FOLDER) && npm run dev

build:
	rm -R $(DIST_FOLDER)
	cd $(BUILD_FOLDER) && npm run build

pdf:
	php ./generation-pdf.php