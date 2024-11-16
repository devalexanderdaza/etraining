#!/bin/bash
# process arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
  *:*)
    HOST=$1
    shift 1
    ;;
  --)
    shift
    CLI="$@"
    break
    ;;
  esac
done

is_ready() {
  eval "curl -s '$HOST' > /dev/null"
}

# wait until is ready
while ! is_ready; do
  echo "[wait.sh] $(date) - waiting to be ready"
  sleep 3
done

echo "[wait.sh] $(date) - $HOST ready."
exec $CLI
