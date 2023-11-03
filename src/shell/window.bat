@echo off

rem List and delete RabbitMQ queues
for /f "tokens=1" %%q in ('rabbitmqctl.bat list_queues -q') do (
    rabbitmqctl.bat delete_queue %%q
)
