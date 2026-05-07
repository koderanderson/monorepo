#!/bin/sh
set -e
cd /app

if [ -f composer.json ] && [ ! -f vendor/autoload.php ]; then
  composer install --ignore-platform-reqs --no-dev --no-interaction --prefer-dist --no-progress --optimize-autoloader --no-scripts
fi

exec docker-php-entrypoint "$@"
