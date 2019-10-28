create database if not exists iot;
use iot;

create table if not exists logs(
    id integer auto_increment primary key,  
    uuid varchar(50), 
    name varchar(50), 
    timestamp varchar(50)
);

create table if not exists buslist(
    name varchar(64) primary key
);

create table if not exists whitelist(
    uuid varchar(64) primary key,
    name varchar(64)
);

