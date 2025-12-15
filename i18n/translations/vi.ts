import { Translations } from '../index';

export const vi: Translations = {
    ui: {
        hero: {
            available: 'Sẵn sàng làm việc',
            downloadPdf: 'Tải xuống PDF',
            contactMe: 'Liên hệ',
            contactInfo: 'Thông tin liên hệ',
            phone: 'Điện thoại',
            email: 'Email',
            address: 'Địa chỉ',
        },
        sections: {
            experience: 'Kinh nghiệm làm việc',
            skills: 'Kỹ năng kỹ thuật',
            projects: 'Dự án tiêu biểu',
            education: 'Học vấn',
        },
        projects: {
            project: 'Dự án',
            techStack: 'Công nghệ',
            keyFeatures: 'Tính năng chính',
            allFeatures: 'Tất cả tính năng',
            responsibilities: 'Trách nhiệm',
            viewDetails: 'Nhấn để xem chi tiết',
        },
        footer: {
            rights: 'Bản quyền được bảo lưu',
            builtWith: 'Xây dựng với React & Tailwind CSS',
        },
        nav: {
            portfolio: 'Hồ sơ',
        },
    },
    data: {
        name: 'HUỲNH MAI AN PHÚ',
        role: 'Lập trình viên Mobile (Flutter/Dart, Android Kotlin)',
        summary: 'Lập trình viên Mobile chuyên về Flutter/Dart và Android Kotlin. Có kinh nghiệm xây dựng ứng dụng thương mại điện tử, thu mua đổi cũ, quản lý nhân sự/chấm công; tích hợp REST API, Firebase, Supabase, FPT eKYC SDK và Payoo SDK. Thành thạo làm việc theo Scrum, code review cơ bản, multi-flavor builds, tập trung vào hiệu năng, ổn định và trải nghiệm người dùng.',
        experience: [
            {
                role: 'Lập trình viên Mobile',
                company: 'Toyar Inc Việt Nam',
                period: 'Tháng 5/2025 – Hiện tại',
                description: [
                    'Phát triển các tính năng chính cho ứng dụng 2Hand FidoBox (thu mua & sàn thương mại) sử dụng Flutter/Dart.',
                    'Triển khai danh mục → thương hiệu → model, chi tiết sản phẩm, giỏ hàng & thanh toán, voucher, nhận hàng tại cửa hàng, theo dõi đơn hàng và hỗ trợ khách hàng.',
                    'Tích hợp REST API với Dio, backend Supabase, Firebase (Auth/Crashlytics/FCM), lưu trữ offline-first (Isar/Hive) và caching kiểu SWR.',
                    'Xây dựng quy trình chẩn đoán thiết bị 12 bước (Wi-Fi, Bluetooth, GPS, sinh trắc học, lưới cảm ứng, camera, phím âm lượng, loa/mic, rung, tai nghe) với plugin Kotlin native cho cảm biến/NFC/Bluetooth/nhiệt và quét IMEI.',
                    'Tích hợp FPT eKYC SDK để xác minh danh tính trong quy trình thu mua/đăng ký người dùng.',
                    'Tích hợp Payoo Payment SDK cho thanh toán trực tuyến trong quy trình checkout (thanh toán đơn hàng, trạng thái giao dịch).',
                    'Tối ưu hiệu năng (phân trang, lazy loading, skeleton/shimmer, memoized selectors), cải thiện TTI, ổn định build/release (AGP/Gradle/NDK, giảm kích thước APK/AAB).',
                    'Làm việc chặt chẽ với Product/Backend/QA theo Scrum (planning, review, retro) và duy trì tài liệu kỹ thuật.',
                ],
            },
            {
                role: 'Lập trình viên Mobile',
                company: 'Lean Solutions (Giải pháp tinh gọn)',
                period: 'Tháng 2/2025 – Tháng 5/2025',
                description: [
                    'Phối hợp với team để phát triển tính năng cho ứng dụng doanh nghiệp sử dụng Flutter & GetX.',
                    'Xây dựng màn hình hiển thị dữ liệu, form nhập liệu và luồng người dùng phức tạp với giao diện responsive cho Android & iOS.',
                    'Sử dụng GetX cho quản lý state, điều hướng và tối ưu hiệu năng.',
                    'Tham gia kiểm thử thủ công, sửa lỗi và đề xuất cải tiến UX.',
                ],
            },
            {
                role: 'Thực tập sinh Lập trình Mobile',
                company: 'Xưởng thực hành FPT Polytechnic',
                period: 'Tháng 12/2024 – Tháng 1/2025',
                description: [
                    'Hỗ trợ phát triển ứng dụng di động: triển khai giao diện, xây dựng tính năng và kiểm thử cơ bản.',
                    'Làm việc với team qua Google Meet, Zalo và tài liệu chia sẻ để theo dõi công việc.',
                ],
            },
        ],
        skills: [
            {
                category: 'Ngôn ngữ',
                items: ['Dart', 'Kotlin', 'Java (Android)', 'Flutter'],
            },
            {
                category: 'Mobile',
                items: ['Flutter (đa nền tảng)', 'Android (Kotlin/Java)', 'Native Plugin (MethodChannel)'],
            },
            {
                category: 'SDK & Tích hợp',
                items: ['Firebase (Auth, Crashlytics, FCM)', 'Supabase/REST', 'FPT eKYC SDK', 'Payoo Payment SDK'],
            },
            {
                category: 'Lưu trữ',
                items: ['Isar', 'Hive', 'SQLite'],
            },
            {
                category: 'Công cụ',
                items: ['Android Studio', 'Git/GitHub', 'Figma', 'Adobe Photoshop/Illustrator', 'Microsoft Office'],
            },
            {
                category: 'Phương pháp',
                items: ['Agile/Scrum', 'CI/CD cơ bản (GitHub Actions)', 'Gradle/AGP multi-flavor'],
            },
        ],
        education: {
            school: 'Cao đẳng FPT Polytechnic',
            major: 'Lập trình Di động',
            period: 'Tháng 1/2020 – Tháng 1/2023',
            gpa: '7.6',
            details: [
                'Tập trung vào Lập trình Di động với Flutter/Dart và Android Kotlin.',
                'Hoàn thành các môn OOP, Cấu trúc dữ liệu, REST API, Firebase, UI/UX và Agile/Scrum.',
                'Xây dựng nhiều ứng dụng bao gồm prototype thương mại điện tử và ứng dụng chẩn đoán thiết bị.',
            ],
        },
        projects: [
            {
                name: '2HAND FIDOBOX (Thu mua & Sàn thương mại)',
                company: 'Toyar Inc',
                period: 'Tháng 5/2025 – Tháng 10/2025',
                techStack: 'Flutter (Dart), GetX, Dio, Supabase/REST, Firebase (Auth/Crashlytics/FCM), Isar/Hive, Kotlin native plugin (MethodChannel), Google Maps Flutter, Geolocator, Camera, Image Picker, Local Auth, GitHub Actions, Gradle/AGP (multi-flavor)',
                features: [
                    'Danh mục → thương hiệu → model, PDP, giỏ hàng & thanh toán, voucher, nhận tại cửa hàng, theo dõi đơn, hỗ trợ.',
                    'Chẩn đoán thiết bị 12 bước (Wi-Fi, Bluetooth, GPS, sinh trắc học, lưới cảm ứng, camera, phím âm lượng, loa/mic, rung, tai nghe) + quét IMEI & API xác minh bên ngoài.',
                    'Hàng đợi thu mua local với đồng bộ offline-first, retry/backoff, giải quyết xung đột theo timestamp/ETag.',
                    'Thông báo (FCM), skeleton/shimmer, lazy load, bay vào giỏ; báo cáo crash & logs.',
                    'FPT eKYC SDK: xác minh danh tính người dùng/thiết bị trong quy trình thu mua.',
                    'Payoo Payment SDK: thanh toán bảo mật, theo dõi giao dịch trong checkout.',
                ],
                responsibilities: [
                    'Triển khai UI + logic nghiệp vụ, thiết kế cache/DB local, tích hợp API & SDK.',
                    'Viết test cases (unit/integration/manual), tối ưu hiệu năng và UX.',
                    'Hỗ trợ CI/build pipeline và duy trì tài liệu.',
                ],
            },
            {
                name: 'ỨNG DỤNG QUẢN LÝ NHÂN SỰ VÀ CHẤM CÔNG',
                company: 'Lean Solutions',
                period: 'Tháng 3/2025 – Tháng 5/2025',
                techStack: 'Flutter, GetX, Dio, SQLite, Firebase, fl_chart, Google Maps Flutter, Geolocator, Geocoding, Image Picker, Flutter Image Editor',
                features: [
                    'Check-in/check-out với vị trí GPS và chụp ảnh để xác minh.',
                    'Quản lý nhân viên (hồ sơ, phân công công việc, lọc theo khu vực/phòng ban).',
                    'Phân tích & báo cáo: chấm công/doanh thu hiển thị theo ngày/tuần/tháng với biểu đồ tương tác.',
                    'Giao diện responsive (flutter_screenutil), hiệu ứng shimmer, snapping sheet, minh họa SVG.',
                ],
                responsibilities: [
                    'Dẫn dắt thiết kế UI/UX trong Figma và triển khai tính năng chấm công chính.',
                    'Tích hợp vị trí & camera, xây dựng biểu đồ và logic lọc, cấu trúc codebase (MVC + feature-based).',
                    'Tham gia kiểm thử, code review và tài liệu.',
                ],
            },
            {
                name: 'QUOTE PULSE (FLUTTER)',
                period: 'Tháng 1/2025 – Tháng 2/2025',
                techStack: 'Flutter, Isar',
                features: [
                    'Duyệt/tìm kiếm trích dẫn, lưu vào bộ sưu tập, chỉnh sửa/quản lý trích dẫn đã lưu, chia sẻ lên mạng xã hội.',
                    'Thêm trích dẫn tùy chỉnh, thông báo Toast cho các tương tác.',
                ],
                responsibilities: [
                    'Thiết kế UI, triển khai tính năng chính (tìm kiếm, lưu, chia sẻ, CRUD), quản lý database local.',
                ],
            },
        ],
    },
};
