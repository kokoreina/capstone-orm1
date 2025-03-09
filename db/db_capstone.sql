CREATE DATABASE IF NOT EXISTS db_capstone;
USE db_capstone;
-- table users

CREATE TABLE IF NOT EXISTS nguoi_dung (
    nguoi_dung_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    mat_khau VARCHAR(255) NOT NULL,
    ho_ten VARCHAR(255) NOT NULL,
    tuoi INT,
    anh_dai_dien VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS hinh_anh (
    hinh_id INT PRIMARY KEY AUTO_INCREMENT,
    ten_hinh VARCHAR(255) NOT NULL,
    duong_dan VARCHAR(255) NOT NULL,
    mo_ta VARCHAR(255),
    nguoi_dung_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id) ON DELETE CASCADE
);



CREATE TABLE binh_luan (
    binh_luan_id INT PRIMARY KEY AUTO_INCREMENT,
    nguoi_dung_id INT,
    hinh_id INT,
    ngay_binh_luan TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    noi_dung TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id) ON DELETE CASCADE,
    FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id) ON DELETE CASCADE
);


CREATE TABLE luu_anh (
    nguoi_dung_id INT,
    hinh_id INT,
    ngay_luu TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (nguoi_dung_id, hinh_id),
    FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id) ON DELETE CASCADE,
    FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id) ON DELETE CASCADE
);


