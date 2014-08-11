TESTS = $(shell ls -S `find test -type f -name "*.test.js" -print`)
REPORTER = tap
TIMEOUT = 30000
MOCHA_OPTS =

install:
	@npm install --registry=http://registry.cnpmjs.org \
		--disturl=http://cnpmjs.org/dist

jshint: install
	@./node_modules/.bin/jshint ./

contributors: install
	@./node_modules/.bin/contributors -f plain -o AUTHORS

autod: install
	@./node_modules/.bin/autod -w --prefix="~"
	@$(MAKE) install

.PHONY: test
