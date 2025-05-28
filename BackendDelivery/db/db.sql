USE delivery;
-- Table structure for table `users`

CREATE TABLE users(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(180) NOT NULL UNIQUE,
    nombre VARCHAR(90) NOT NULL,
    apellido VARCHAR(90) NOT NULL,
    telefono VARCHAR(90) NOT NULL,
    imge VARCHAR(255) null,
    password VARCHAR(90) NOT NULL,
    created_at timestamp(0) NOT NULL,
    update_at timestamp(0) NOT NULL
);
