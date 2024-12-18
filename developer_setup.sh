#!/bin/bash

for dir in pgdata redisdata; do
  [ ! -d "$dir" ] && echo "Creating directory: $dir" && mkdir -p "$dir" || echo "Directory already exists: $dir"
done

echo "necessary directories are in place."