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
-- thêm người dùng 
INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien) 
VALUES 
('user1@example.com', 'password123', 'Người Dùng 1', 25, 'image1.jpg'),
('user2@example.com', 'password123', 'Người Dùng 2', 28, 'image2.jpg'),
('user3@example.com', 'password123', 'Người Dùng 3', 30, 'image3.jpg'),
('user4@example.com', 'password123', 'Người Dùng 4', 22, 'image4.jpg'),
('user5@example.com', 'password123', 'Người Dùng 5', 24, 'image5.jpg'),
('user6@example.com', 'password123', 'Người Dùng 6', 27, 'image6.jpg');

-- thêm ảnh 
INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id)
VALUES 
  ('image1.jpg', 'https://upanh.tv/image/uvqN3a', 'Hình ảnh đầu tiên', 1),
  ('image2.jpg', 'path/to/image2.jpg', 'Hình ảnh thứ hai', 2),
  ('image3.jpg', 'path/to/image3.jpg', 'Hình ảnh thứ ba', 3),
  ('image4.jpg', 'path/to/image4.jpg', 'Hình ảnh thứ tư', 4),
  ('image5.jpg', 'path/to/image5.jpg', 'Hình ảnh thứ năm', 5),
  ('image6.jpg', 'path/to/image6.jpg', 'Hình ảnh thứ sáu', 6);
  -- Thêm bình luận
INSERT INTO binh_luan (nguoi_dung_id, hinh_id, noi_dung)
VALUES 
  (1, 1, 'Bình luận của người dùng 1 về hình ảnh 1'),
  (2, 2, 'Bình luận của người dùng 2 về hình ảnh 2'),
  (3, 3, 'Bình luận của người dùng 3 về hình ảnh 3'),
  (4, 4, 'Bình luận của người dùng 4 về hình ảnh 4'),
  (5, 5, 'Bình luận của người dùng 5 về hình ảnh 5');

SELECT * FROM binh_luan
-- Thêm dữ liệu vào bảng lưu ảnh
INSERT INTO luu_anh (nguoi_dung_id, hinh_id)
VALUES 
  (1, 1),  -- Người dùng 1 lưu ảnh 1
  (2, 2),  -- Người dùng 2 lưu ảnh 2
  (3, 3),  -- Người dùng 3 lưu ảnh 3
  (4, 4),  -- Người dùng 4 lưu ảnh 4
  (5, 5),  -- Người dùng 5 lưu ảnh 5
  (6, 6);  -- Người dùng 6 lưu ảnh 6





