function control_c {
  echo -en "\n## Caught SIGINT; Clean up and Exit \n"
  pm2 delete all
  exit $?
}
trap "control_c" SIGINT
trap "control_c" SIGTERM

pm2 delete all
pm2 start --no-daemon

