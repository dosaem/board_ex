#!/bin/bash
rsync -avr . -e ssh ubuntu@13.124.138.86:~/app/board/ --exclude=node_modules
