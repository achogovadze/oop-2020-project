USE oop2020;

DROP TABLE IF EXISTS apartment_info;
DROP TABLE IF EXISTS apartment_rules;
DROP TABLE IF EXISTS booking_history;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS apartments;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	user_id int primary key auto_increment,
    first_name char(128),
    last_name char(128),
    birth_date date,
    email char(128),
    password char(255),
    phone_number char(128),
    country char(128),
    city char(128),
    address char(128),
    email_verified int default 0,
    user_role char(128)
);

CREATE TABLE apartments (
	apartment_id int primary key auto_increment,
    user_id int
);

CREATE TABLE apartment_info (
	apartment_id int,
    country char(128),
    city char(128),
    address char(128),
    price_usd double,
    property_type char(128),
    project_type char(128),
    additional_space char(128),
    additional_footage double,
    square_footage double,
    building_materials char(128),
    room_height double,
    floor_level int,
    bedrooms_num int,
    beds_num int,
    bathrooms_num int,
    private_bathroom int,
    wifi int,
    water char(128),
    gas char(128),
    electricity char(128),
    air_conditioning int,
    heating char(128),
    washing_machine int,
    oven int,
    dishwasher int,
    dryer int,
    desk int,
    balcony int,
    elevator int,
    parking int,
    vehicle_charger int,
    pool int,
    is_available int,
    apartment_status char(128),
    latitude double,
    longitude double
);

CREATE TABLE apartment_rules (
	apartment_id int,
    couples_allowed int,
    pets_allowed int,
    students_allowed int,
    smoking_allowed int,
    women_only int,
    men_only int,
    extend_duration int
);

CREATE TABLE bookings (
	booking_id int primary key auto_increment,
    apartment_id int,
    user_id int,
    check_in_date date,
    check_out_date date,
    total_price double,
    payment_currency char(128)
);

CREATE TABLE booking_history (
	booking_id int,
    apartment_id int,
    user_id int,
    check_in_date date,
    check_out_date date,
    total_price double,
    payment_currency char(128),
    cleaning_num int,
    negative_behaviour char(255),
    rating int
);

CREATE TABLE images (
  apartment_id int,
  image_link TEXT
);

ALTER TABLE apartments add constraint user_id_fk foreign key (user_id) references users (user_id);

ALTER TABLE apartment_info add constraint apartment_id_fk foreign key (apartment_id) references apartments (apartment_id);

ALTER TABLE apartment_rules add constraint apartment_id_fk2 foreign key (apartment_id) references apartments (apartment_id);

ALTER TABLE bookings add constraint apartment_id_fk3 foreign key (apartment_id) references apartments (apartment_id);

ALTER TABLE booking_history add constraint user_id_fk2 foreign key (user_id) references users (user_id);

ALTER TABLE booking_history add constraint booking_id_fk foreign key (booking_id) references users (user_id);

ALTER TABLE booking_history add constraint apartment_id_fk4 foreign key (apartment_id) references users (user_id);

ALTER TABLE images add constraint apartment_id_fk5 foreign key (apartment_id) references apartments (apartment_id);