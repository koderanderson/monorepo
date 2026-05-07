#!/bin/sh
set -e
cd /app

if [ -f composer.json ] && [ ! -f vendor/autoload.php ]; then
  composer install --ignore-platform-reqs --no-dev --no-interaction --prefer-dist --no-progress --optimize-autoloader --no-scripts
fi

chmod -R 775 /app/storage /app/bootstrap/cache
chown -R www-data:www-data /app/storage /app/bootstrap/cache

exec docker-php-entrypoint "$@"
