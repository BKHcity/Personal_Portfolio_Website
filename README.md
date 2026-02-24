# Website Giới Thiệu Bản Thân

Website giới thiệu bản thân với thiết kế hiện đại, responsive và đẹp mắt.

## Tính năng

- ✅ Thiết kế hiện đại và đẹp mắt
- ✅ Responsive trên mọi thiết bị
- ✅ Smooth scrolling navigation
- ✅ Animation khi scroll
- ✅ Form liên hệ
- ✅ Hiệu ứng hover đẹp mắt

## Cách sử dụng

1. Mở file `index.html` trong trình duyệt
2. Tùy chỉnh nội dung theo thông tin của bạn:
   - Thay thế `[Tên của bạn]`, `[Chức danh/Nghề nghiệp]`, v.v.
   - Cập nhật thông tin liên hệ
   - Thêm dự án và kỹ năng của bạn
   - Thay đổi màu sắc trong file `style.css` nếu muốn

## Tùy chỉnh

### Thay đổi màu sắc

Mở file `style.css` và chỉnh sửa các biến CSS trong phần `:root`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Thêm avatar

Thay thế phần `.avatar` trong HTML bằng hình ảnh của bạn:

```html
<div class="avatar" style="background-image: url('path/to/your/image.jpg'); background-size: cover;"></div>
```

### Setup EmailJS để gửi email thật

Để form liên hệ có thể gửi email thật, bạn cần setup EmailJS:

1. Đăng ký tài khoản tại [emailjs.com](https://www.emailjs.com/)
2. Tạo một service (chọn Gmail hoặc SMTP)
3. Tạo một template email với các biến:
   - `{{from_name}}` - Tên người gửi
   - `{{from_email}}` - Email người gửi
   - `{{message}}` - Nội dung tin nhắn
4. Lấy Public Key, Service ID, và Template ID
5. Mở file `script.js` và thay thế:
   - `'YOUR_PUBLIC_KEY'` bằng Public Key của bạn
   - `'YOUR_SERVICE_ID'` bằng Service ID
   - `'YOUR_TEMPLATE_ID'` bằng Template ID

Sau khi setup, form sẽ gửi email đến `buikimhai2.4@gmail.com` khi có ai đó liên hệ.

## Cấu trúc file

- `index.html` - File HTML chính
- `style.css` - File CSS cho styling
- `script.js` - File JavaScript cho các tương tác

## Trình duyệt hỗ trợ

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Tự do sử dụng cho mục đích cá nhân và thương mại.

