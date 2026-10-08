# BEAUTY MOMENT — VISION 61

Vision 61 kế thừa toàn bộ nền Vision 60 và tinh chỉnh riêng **menu “Lịch của tôi” của tài khoản Khách hàng** theo nguyên tắc: **ẩn khỏi giao diện, không xóa dữ liệu nghiệp vụ**.

## Thay đổi chính trong Vision 61

### 1. Thứ tự hiển thị mới
- **Nhóm 1 — Lịch đang theo dõi:** mọi lịch chưa Hoàn thành, gồm lịch mới đặt, lịch Chờ xác nhận, lịch Đã nhận và các lịch tương lai. Nhóm này luôn ở đầu và sắp xếp lịch mới tạo gần nhất lên trước.
- **Nhóm 2 — Chờ khách đánh giá:** lịch đã được Quản lý đánh dấu Hoàn thành nhưng khách chưa chốt đánh giá.
- **Nhóm 3 — Đã chốt đánh giá:** lịch đã Hoàn thành và đã xác nhận đánh giá, chỉ tiếp tục hiển thị trong 24 giờ kể từ `ratingFinalizedAt`.

### 2. Tự động ẩn theo thời gian
- Lịch **đã Hoàn thành nhưng chưa chốt đánh giá**: sau **48 giờ kể từ `completedAt`** sẽ tự ẩn khỏi danh sách đang hiển thị.
- Lịch **đã Hoàn thành và đã chốt đánh giá**: sau **24 giờ kể từ `ratingFinalizedAt`** sẽ tự ẩn.
- Việc ẩn được tính động khi mở/render lại trang và có bộ hẹn giờ kiểm tra mỗi phút khi cửa sổ “Lịch của tôi” đang mở.

### 3. Không xóa lịch khỏi hệ thống
Vision 61 **không `delete` appointment** khi quá 24/48 giờ. Dữ liệu lịch vẫn nằm trong `beauty_appointments_v29` để không làm đứt các luồng:
- Doanh thu và báo cáo dựa trên lịch Hoàn thành.
- Hồ sơ/CRM khách hàng và lịch sử phục vụ.
- Thống kê nhân viên, đánh giá, phản hồi dịch vụ.
- Luồng thông báo, chăm sóc phản hồi và các tham chiếu appointment ID.
- Các luồng quản lý lịch và lịch sử nghiệp vụ khác.

Đây là **ẩn theo giao diện tài khoản Khách**, không phải xóa nghiệp vụ.

### 4. Kho “Lịch đã ẩn”
Trong “Lịch của tôi” có nút **“Lịch đã ẩn (N)”**. Khách có thể mở kho này bất cứ lúc nào. Các lịch chưa chốt đánh giá vẫn giữ nguyên nút chấm sao và xác nhận để khách đánh giá muộn nếu muốn.

Khi một lịch ẩn chưa chốt được khách đánh giá và xác nhận:
- `ratingFinalized = true`
- `ratingFinalizedAt = thời điểm hiện tại`
- Lịch quay lại danh sách đang hiển thị trong 24 giờ theo quy tắc mới.

### 5. Lịch sử đã chốt không bị mất
Lịch đã chốt đánh giá rồi sau 24 giờ chỉ rời khỏi danh sách chính. Khách vẫn có thể mở **Lịch đã ẩn** để tra cứu.

### 6. Tương thích Vision 60
Giữ nguyên các nền tảng đã có của Vision 60, gồm:
- Booking Engine dùng chung Khách hàng/Quản lý.
- Thời gian đệm nằm trong tổng thời gian dịch vụ.
- Staff Availability Engine: một nhân viên là tài nguyên thời gian; lịch Chờ xác nhận đã chọn NV vẫn giữ NV.
- Khóa xung đột nhân viên theo khoảng thời gian.
- Luồng Quản lý đồng ý/từ chối/Hoàn thành.
- Phản hồi dịch vụ, đánh giá, AI sentiment/care workflow.
- Lưu trữ lịch từ chối của phía Quản lý sau khi hết ngày phục vụ.
- Tài khoản Nhân viên và các menu đã xây dựng.

---

# BEAUTY MOMENT — VISION 60

Vision 60 kế thừa trực tiếp Vision 59 và bắt đầu xây dựng **giao diện làm việc riêng cho tài khoản Nhân viên**, không dùng lại luồng nhìn của Khách hàng hay Quản lý.

## 1. Tài khoản Nhân viên test được lưu sẵn
- Họ tên: **Nguyễn Thị Nhung**
- SĐT: **0964369316**
- Mật khẩu: **Nhung123456789@@**

Khi chọn vai trò **Nhân viên → Đăng nhập**, các trường sẽ được điền sẵn để test nhanh. Vision 60 cũng liên kết tài khoản này với hồ sơ Nhân viên cùng tên/SĐT; nếu chưa có hồ sơ thì tạo hồ sơ test tương ứng. Nếu hồ sơ đã bị Quản lý xóa và nằm trong lưu trữ thì hệ thống không tự tạo lại hồ sơ hoạt động.

## 2. Menu riêng của Nhân viên
Sau khi đăng nhập Nhân viên, thanh menu đổi thành:
1. **Tổng quan**
2. **Lịch của tôi**
3. **Dịch vụ & quy trình**
4. **Ca làm việc**
5. **Đánh giá của tôi**
6. **Thông báo**

Nhân viên không nhìn thấy các menu quản trị tài chính, CRM toàn bộ khách, hồ sơ nhân viên khác hoặc cấu hình hệ thống.

## 3. Tổng quan công việc
Hiển thị nhanh:
- số khách được phân trong ngày;
- dịch vụ đang phục vụ;
- số dịch vụ Nhân viên đã hoàn thành phần phục vụ;
- giờ mở tiệm hôm nay;
- khách tiếp theo;
- danh sách lịch trong ngày.

## 4. Lịch của tôi
Chỉ lấy các booking được gắn đúng `serviceStaffId`/Nhân viên phục vụ của tài khoản đang đăng nhập.

Nhân viên có trạng thái công việc riêng:
- **Chờ phục vụ**
- **Bắt đầu phục vụ**
- **Đã xong phần phục vụ**

`Đã xong phần phục vụ` của Nhân viên **không đồng nghĩa** với cột `HOÀN THÀNH` của Quản lý. Chỉ Quản lý mới chốt Hoàn thành nghiệp vụ để dữ liệu Doanh thu/CRM được ghi nhận theo logic cũ.

Khi Nhân viên đánh dấu đã xong phần phục vụ, Quản lý nhận một thông báo trong chuông.

## 5. Dịch vụ & quy trình
Danh sách dịch vụ đang ON được đọc trực tiếp từ cùng nguồn dữ liệu dịch vụ của Quản lý. Giá, thời lượng, ảnh, mô tả và từng bước quy trình tự cập nhật khi Quản lý sửa dịch vụ.

## 6. Ca làm việc
Vision 60 hiển thị:
- giờ mở tiệm hôm nay;
- ngoại lệ giờ mở tiệm do Quản lý đã cấu hình;
- lịch giờ mở tiệm 7 ngày tới;
- thông tin ngày làm việc chính thức của Nhân viên nếu đã có.

Ca cá nhân/ngày nghỉ riêng chưa tự suy đoán; giao diện hiện tham chiếu giờ vận hành chung của tiệm để tránh tạo dữ liệu ca không có nguồn quản lý.

## 7. Đánh giá của tôi
Nhân viên chỉ xem dữ liệu của chính mình:
- điểm trung bình;
- tổng lượt đã phục vụ và được Quản lý Hoàn thành;
- số đánh giá;
- thống kê 1–5 sao;
- số đánh giá trong quý hiện tại;
- phản hồi dịch vụ của các lịch mình phục vụ.

Phản hồi tiêu cực được làm nổi bật để Nhân viên nhận biết nhưng Nhân viên không có quyền sửa đánh giá hoặc phản hồi của khách.

## 8. Thông báo Nhân viên
Vai trò Nhân viên được nối vào hệ thống thông báo dùng chung.
- Khi Quản lý phân công một lịch cho Nhân viên có tài khoản, Nhân viên nhận thông báo.
- Khi lịch được chuyển sang Nhân viên khác, Nhân viên cũ nhận thông báo.
- Khi khách hủy lịch đã được phân, Nhân viên nhận thông báo.
- Khi Nhân viên hoàn thành phần phục vụ, Quản lý nhận thông báo.

Menu **Thông báo** trong giao diện Nhân viên và biểu tượng chuông cùng đọc một nguồn `localStorage` chung.

## 9. Đồng bộ nhiều tab
Phiên đăng nhập vẫn tách theo từng tab bằng `sessionStorage`. Dữ liệu nghiệp vụ dùng `localStorage`, vì vậy khi Quản lý phân lịch/sửa nhân viên/sửa dịch vụ/đổi giờ mở tiệm ở tab khác, giao diện Nhân viên đang mở sẽ tự render lại dữ liệu tương ứng.

> Đây vẫn là bản HTML offline dùng để kiểm thử luồng nghiệp vụ. Khi đưa lên Web/App thật, các quyền và thao tác booking cần được xác thực phía server/database.


## Vision 60 — Staff Availability + thời gian đệm
- Tổng quan Nhân viên hiển thị cả lịch hôm nay và lịch tương lai đã được xác nhận/phân công.
- Staff Availability Engine khóa trùng nhân viên theo khoảng thời gian, không phụ thuộc dịch vụ/bàn/khách. Lịch Chờ xác nhận đã chọn NV vẫn giữ NV.
- Khách và Quản lý đều dùng cùng bộ kiểm tra; danh sách NV bận bị khóa và hệ thống kiểm tra lại ngay trước khi lưu.
- Đổi lịch tự kiểm tra NV cũ; nếu khung mới trùng lịch thì tự bỏ gán để chọn lại.
- Thời gian đệm mặc định 10 phút nằm bên trong tổng thời lượng hiện hữu. Ví dụ 60 phút = 50 phút phục vụ + 10 phút đệm. Không cộng thêm vào Booking Engine.
- Cửa sổ đặt lịch hiển thị 3 dòng: phục vụ khách / thời gian đệm / tổng thời gian. Quản lý có thể chỉnh thời gian đệm riêng từng dịch vụ mà không thay đổi tổng thời gian.
