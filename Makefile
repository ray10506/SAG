include /env.mak
include ../Makefile.inc

JS_DIR="dist"
JS_NAMESPACE="SYNO.SAG.Application"
BUNDLE_JS="dist/synologyapplicationgateway.bundle.js"
BUNDLE_CSS="dist/style/synologyapplicationgateway.bundle.css"

.PHONY: all

all: $(BUNDLE_JS) style.css

$(BUNDLE_JS):
	/usr/bin/yarn install
	/usr/bin/yarn run build
	$(MAKE) -f Makefile.js.inc JSCompress JS_NAMESPACE=\"${JS_NAMESPACE}\" JS_DIR=${JS_DIR}

style.css: $(BUNDLE_JS)
	cp $(BUNDLE_CSS) $@

clean: clean_JSCompress
	rm $(BUNDLE_JS)

install: install_JSCompress
	[ -d $(INSTALLDIR) ] || install -d $(INSTALLDIR)
	[ -d $(INSTALLDIR)/images ] || install -d $(INSTALLDIR)/images
	find images -type d -exec install -d --mode 755 $(INSTALLDIR)/{} \;
	find images -type f -exec install --mode 644 {} $(INSTALLDIR)/{} \;
	[ -d $(INSTALLDIR)/texts ] || install -d $(INSTALLDIR)/texts
	cp -rf $(STRING_DIR)/* $(INSTALLDIR)/texts/
	[ -d $(INSTALLDIR)/dist/assets ] || install -d $(INSTALLDIR)/dist/assets
	install --mode 644 dist/assets/*.png $(INSTALLDIR)/dist/assets

include Makefile.js.inc