#!/bin/sh
set -e
cd /var/www/html

if [ -f composer.json ] && [ ! -f vendor/autoload.php ]; then
  composer install --no-interaction --prefer-dist --no-progress --optimize-autoloader --no-dev
fi

exec docker-php-entrypoint "$@"
