create database if not exists iot;
use iot;

create table if not exists logs(
    id integer auto_increment primary key,  
    uuid varchar(50), 
    name varchar(50), 
    timestamp varchar(50)
);


