# Dự Án Công Nghệ Thông Tin
Alumni Management Application Development

## Thông tin thành viên
* Nguyễn Trọng Kiên - 52000892
* Trần Trung Hiếu - 52000888

## Bắt đầu

### B1: Clone project về máy

```
git clone [https://github.com/vssntk/final-project.git]
```

!!! Lưu ý:

- Cần cài đặt git trước khi clone project
- Phải thiết lập tài khoản github trước khi clone project

Chỉnh sửa các file sau cho phù hợp với máy người chấm:
- .env
- credentials.js


### B2: Cài node_modules

```shell
npm install
```

### B3: Chạy project (Sử dụng CMD)

1. Bật chế độ Debug (Optional)

```shell
set DEBUG=final-project:*
```

2. Set port (Default: 3000, Optional)

```shell
set PORT=8080
```

3. Chạy project

```shell 
npm start
```

### B4: Truy cập project
- Trang chủ: http://localhost:8080 (Nếu bạn đã set port là 8080)

### B5: Tài khoản đăng nhập
Bạn hãy đăng nhập bằng tài khỏa admin mặc định: admin/admin để login vào hệ thống

### B6: Import Database
 - Import thủ công bằng các file json trong thưc mục database (khi chạy web sẽ tự động cài tạo database và các collection, ta mở MongoDB Compass để import các file vào collection tương ứng)
### Chạy code các module
