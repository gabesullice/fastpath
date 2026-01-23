dist/extension.zip: $(shell find ./src -type f)
	cd src && zip -r ../$@ .
