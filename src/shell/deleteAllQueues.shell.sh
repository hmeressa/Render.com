#!/bin/bash

for queue in $(sudo rabbitmqctl list_queues --quiet | awk '{print $1}'); do
    sudo rabbitmqctl delete_queue $queue
done
