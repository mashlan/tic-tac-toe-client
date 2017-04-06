#!/bin/bash

#ID=6 TOKEN= scripts/sign-out.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/sign-out/$ID"
curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=$TOKEN"

# data output from curl doesn't have a trailing newline
echo
