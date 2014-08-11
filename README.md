custom-cnpm-example
===========

Use cnpmjs.org and your own nfs to build your own npm

## Samples

- [hello cnpm](hello_cnpm) - The most simple way to use `cnpmjs.org`, default cnpm is private mode, work as a NPM mirror.
- [culster](cluster) - Use cluster mode to make your system more **stable** and **reliable**
- [cloud storgae service](cloud_storage_service) - Use [qiniu](http://www.qiniu.com/) cloud storage service to store tarballs
- [simple filesytem](sfs) - Use [sfs](https://github.com/cnpm/sfs) to store tarballs
- [public registry](public) - Build a public registry with scope support, use for enterprise private registry

## Prepare

- Node.js: To run cnpm, please install node v0.11+.
- Mysql

### Install Dependencies

```
npm install
```

### create mysql tables

```
mysql -uroot -e 'DROP DATABASE IF EXISTS cnpmjs_test;' &&\
mysql -uroot -e 'CREATE DATABASE cnpmjs_test;' &&\
mysql -uroot 'cnpmjs_test' < node_modules/cnpmjs.org/docs/db.sql &&\
mysql -uroot 'cnpmjs_test' -e 'show tables;'

```

Or you can find all table sqls in [cnpmjs.org/docs/db.sql](https://github.com/cnpm/cnpmjs.org/blob/master/docs/db.sql).

## Try it

Step one: start server

```bash
# start simple sample
$ node --harmony hello_cnpm

# start cluster sample
$ node --harmony cluster

# start sfs sample
$ node --harmony sfs
```

Step two: wrap cnpm cli for test your own registry

```
# install cnpm cli first
$ npm install cnpm -g

# alias lnpm to cnpm for test
$ alias lnpm='cnpm --registry=http://localhost:7001 \
  --registryweb=http://localhost:7002 \
  --cache=$HOME/.npm/.cache/lnpm \
  --userconfig=$HOME/.lnpmrc'
```

Now you can use lnpm to play with yoru own registry:

```bash
$ lnpm sync moduletest
$ lnpm install moduletest
# do whatever npm supported
```

## More File system store support

You can replace the default `filesystem storage` by any other file store system, only need to follow [this guide](https://github.com/cnpm/cnpmjs.org/wiki/NFS-Guide).
We provide several cloud storage service wrapper for cnpm. Just check it out.

* [oss](https://github.com/cnpm/oss-cnpm)
* [tfs](https://github.com/cnpm/tfs-cnpm)
* [unyun](https://github.com/cnpm/unyun-cnpm)

## License
MIT
