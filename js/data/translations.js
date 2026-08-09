/**
 * translations.js
 * All copy for the site lives here, keyed by data-i18n path.
 * Add a new language by adding a new top-level key (e.g. "fr")
 * and mirroring every path found under "vi" / "en".
 */
const TRANSLATIONS = {
  vi: {
    nav: {
      button: "Liên hệ",
      1: "Trang Chủ",
      2: "Về tnt",
      3: "Dịch Vụ",
      4: "Website Mẫu",
    },
    hero: {
      eyebrow: "TNT SOFTWARE",
      headline: "Tư vấn &amp; Thiết kế phần mềm",
      subhead:
        "tnt. đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số",
      cta: "Khám phá ngay",
      scrollHint: "Xem thêm",
    },
    solutions: {
      eyebrow: "GIẢI PHÁP",
      headline: "Chúng tôi cung cấp mọi giải pháp phần mềm",
      sub: "Từ nền tảng số đến ứng dụng di động, mỗi giải pháp đều được xây dựng đo ni đóng giày.",
      card1: {
        title: "Chuyển đổi số",
        desc: "Số hoá quy trình vận hành, giúp doanh nghiệp bạn thích nghi và tăng trưởng trong kỷ nguyên số.",
      },
      card2: {
        title: "Website",
        desc: "Landing page, website doanh nghiệp, hệ thống quản lý và ứng dụng web hiệu suất cao.",
        items: ["Landing Page", "Website doanh nghiệp", "Hệ thống quản lý", "Ứng dụng Web"],
      },
      card3: {
        title: "Ứng dụng điện thoại",
        desc: "Ứng dụng di động mượt mà, đa nền tảng cho Android và iOS.",
        items: ["Android", "iOS", "Flutter"],
      },
    },
    workflow: {
      eyebrow: "QUY TRÌNH",
      headline: "Hành trình hợp tác cùng TNT",
      sub: "Sáu bước rõ ràng, minh bạch",
      steps: [
        { number: "Bước 1", title: "Lấy yêu cầu", desc: "Chúng tôi lắng nghe mục tiêu, ràng buộc và tầm nhìn của bạn." },
        { number: "Bước 2", title: "Danh sách tính năng &amp; Báo giá", desc: "Đề xuất phạm vi công việc rõ ràng kèm báo giá minh bạch." },
        { number: "Bước 3", title: "Đặt cọc &amp; Bắt đầu", desc: "Xác nhận hợp tác và chính thức khởi động dự án." },
        {
          number: "Bước 4", title: "Demo &amp; Feedback",
          desc: "Xem trước sản phẩm, góp ý và tinh chỉnh cùng đội ngũ TNT.",
          note: "Nếu phát sinh yêu cầu tính năng mới, chúng tôi sẽ gửi báo giá bổ sung minh bạch trước khi thực hiện.",
        },
        { number: "Bước 5", title: "Bàn giao", desc: "Sản phẩm hoàn chỉnh, sẵn sàng vận hành được bàn giao cho bạn." },
        {
          number: "Bước 6", title: "Bảo hành",
          desc: "Miễn phí 1 tháng hoặc trọn đời nếu dùng hosting TNT"
        },
      ],
    },
    customers: {
      eyebrow: "KHÁCH HÀNG",
      headline: "Khách hàng của chúng tôi",
      buttontitle: "Xem Website",
      sub: "Những thương hiệu đã tin tưởng TNT trong hành trình chuyển đổi số.",
      c1: { name: "FW Group", tag: "Ngành Nhà hàng", loc: "Bà Rịa - Vũng Tàu, Việt Nam" },
      c2: { name: "Pension Hohenau", tag: "Nghỉ dưỡng", loc: "Salzburg, Áo" },
      c3: { name: "Phòng tranh Điểm Sắc", tag: "Phòng tranh nghệ thuật", loc: "Hồ Chí Minh, Việt Nam" },
    },
    pricing: {
      eyebrow: "GÓI DỊCH VỤ",
      headline: "Chọn gói phù hợp với bạn",
      sub: "Minh bạch, linh hoạt và phù hợp với mọi quy mô doanh nghiệp.",
      featuresTitle: "Bạn sẽ nhận được gì?",
      basic: {
        name: "Gói Cơ bản",
        items: ["Chỉ Landing Page (Tĩnh)", "Form liên hệ qua Email", "Bàn giao trong vài ngày hoặc 1,2 tuần"],
        price: "2 - 10 triệu đ",
        priceSuffix: "+ Chi phí Hosting",
        cta: "Liên hệ tư vấn",
        desc: "Phù hợp cho doanh nghiệp vừa và nhỏ chỉ có nhu cầu cần 1 website để khách hàng tham khảo hoặc dùng để quảng cáo. Không có nhu cầu sử dụng website để vận hành.",
        f1: "Website Landing Page (Tĩnh)",
        f1_desc: "Thiết kế một trang duy nhất hiển thị toàn bộ thông tin quan trọng một cách bắt mắt, chuẩn SEO để chạy quảng cáo.",
        f2: "Form liên hệ tự động",
        f2_desc: "Khách hàng để lại thông tin, hệ thống sẽ gửi thẳng email thông báo về hòm thư cá nhân của bạn.",
        f3: "Triển khai siêu tốc",
        f3_desc: "Cam kết bàn giao sản phẩm hoàn thiện và có thể sử dụng ngay trong vòng vài ngày hoặc tối đa 1-2 tuần.",
      },
      pro: {
        name: "Gói Nâng cao",
        badge: "Phổ biến nhất",
        items: ["Landing Page", "Trang quản trị (Admin)", "Quản lý linh hoạt nhiều role, web, app", "Bàn giao trong vài tuần đến vài tháng"],
        price: "10 - 50 triệu đ",
        priceSuffix: "+ Chi phí Hosting",
        cta: "Liên hệ tư vấn",

        desc: "Phù hợp cho doanh nghiệp vừa và nhỏ có nhu cầu áp dụng CRM vào vận hành để số hóa công việc thủ công. Tiện lợi cho cả nhân viên và khách hàng sử dụng.",
        f1: "Website chuyên nghiệp (Đa trang)",
        f1_desc: "Hệ thống nhiều trang con (Giới thiệu, Dịch vụ, Blog) được liên kết chặt chẽ để tối ưu trải nghiệm người dùng.",
        f2: "Trang quản trị (Admin Dashboard)",
        f2_desc: "Cung cấp tài khoản cấp cao để bạn tự do thay đổi nội dung, hình ảnh, viết bài mà không cần phải biết về lập trình.",
        f3: "Hệ thống phân quyền (Role) linh hoạt",
        f3_desc: "Tích hợp CRM quản lý data khách hàng. Phân quyền rõ ràng cho từng tài khoản: Nhân viên, Quản lý, Người dùng.",
        f4: "Đảm bảo an toàn hệ thống",
        f4_desc: "Dự án được xây dựng kỹ lưỡng, bàn giao trong vài tuần đến vài tháng đảm bảo tính ổn định và bảo mật cao.",
      },
      vip: {
        name: "VIP++",
        items: ["Ứng dụng Web doanh nghiệp", "Nghiệp vụ phức tạp", "Cơ sở dữ liệu lớn", "Nhiều giai đoạn phát triển (vài năm)"],
        price: "Từ 50 triệu đ",
        priceSuffix: "+ Chi phí Hosting",
        cta: "Liên hệ tư vấn",

        desc: "Đây là một doanh nghiệp lớn có nhu cầu vận hành cả một bộ máy với quy trình phức tạp, cần thời gian nghiên cứu và giải pháp lâu dài. Ứng dụng công nghệ là điều bắt buộc để có thể quản lý bộ máy tránh thất thoát.",
        f1: "Ứng dụng Web Doanh nghiệp (Enterprise)",
        f1_desc: "Xây dựng kiến trúc phần mềm chạy hoàn toàn trên nền web, bảo mật khắt khe, tốc độ xử lý siêu nhanh.",
        f2: "Giải quyết nghiệp vụ phức tạp",
        f2_desc: "Số hóa toàn bộ quy trình làm việc rườm rà, thủ công của doanh nghiệp thành hệ thống tự động logic.",
        f3: "Chịu tải Cơ sở dữ liệu lớn",
        f3_desc: "Thiết kế Data Model tối ưu cho lượng dữ liệu khổng lồ, không xảy ra hiện tượng chậm lag khi scale-up.",
        f4: "Nhiều giai đoạn phát triển",
        f4_desc: "Triển khai dự án chia làm nhiều Phase, thời gian phát triển dài hạn (đơn vị tính bằng năm) kèm cam kết bảo trì.",
        cta: "Liên hệ tư vấn"
      },
    },
    contact: {
      eyebrow: "LIÊN HỆ",
      headline: "Liên hệ với chúng tôi",
      sub: "Kể cho chúng tôi nghe về dự án của bạn, TNT sẽ phản hồi trong vòng 24 giờ.",
      emailLabel: "Email",
      phoneLabel: "Điện thoại",
      socialLabel: "Kết nối với chúng tôi",
      form: {
        name: "Tên",
        namePh: "Nguyễn Văn A",
        contact: "Email hoặc SĐT",
        contactPh: "ban@email.com hoặc 09xx xxx xxx",
        message: "Lời nhắn",
        messagePh: "Hãy kể cho chúng tôi về dự án của bạn...",
        submit: "Gửi lời nhắn",
        sending: "Đang gửi...",
        success: "Đã gửi thành công! Chúng tôi sẽ liên hệ sớm.",
        errorRequired: "Vui lòng điền đầy đủ thông tin.",
        errorPhone: "Định dạng số điện thoại không hợp lệ (ví dụ: 09xx xxx xxx).",
        errorEmail: "Định dạng email không hợp lệ.",
        packageLabel: "Gói đã chọn",
        packageAdvice: "Cần Tư Vấn",
        packageBasic: "Gói Cơ bản",
        packagePro: "Gói Nâng cao",
        packageVip: "VIP++",
        errorSystem: "Có lỗi xảy ra, vui lòng thử lại sau."
      },
    },
    footer: {
      tagline: "Tư vấn &amp; thiết kế phần mềm cho doanh nghiệp Việt Nam và quốc tế.",
      linksTitle: "Liên kết",
      contactTitle: "Liên hệ",
      rights: "Đã đăng ký bản quyền.",
      copied: "Đã copy! ✔",
    },

    // ABOUT PAGE TRANSLATIONS - VN
    about: {
      hero: {
        line1: "KIẾN TẠO",
        line2: "PHẦN MỀM",
        line3: "ĐỊNH HÌNH",
        line4: "TƯƠNG LAI"
      },
      intro: {
        label: "ABOUT",
        p1: "Chúng tôi hiện là một đội ngũ freelance đam mê công nghệ, được đại diện bởi Trần Ngọc Thắng. Dù ở những bước đi đầu tiên, chúng tôi tự hào mang đến những sản phẩm phần mềm chất lượng cao với sự tận tâm tuyệt đối.",
        p2: "Với quy mô nhỏ gọn, chi phí vận hành của TNT gần như bằng không. Lợi thế này được chuyển hóa trực tiếp thành mức giá cực kỳ cạnh tranh cho doanh nghiệp của bạn, trong khi chất lượng vẫn được bảo đảm tiêu chuẩn."
      },
      statement: {
        p1: "KẾT HỢP KINH NGHIỆM ĐA QUỐC GIA VỚI",
        p2: "TƯ DUY ĐỘT PHÁ",
        p3: "CHÚNG TÔI TẠO RA SẢN PHẨM",
        p4: "VƯỢT MỌI GIỚI HẠN."
      },
      pillars: {
        p1: {
          title: "TỐI ƯU",
          desc: "Mô hình làm việc linh hoạt giúp cắt giảm chi phí thừa, mang lại sản phẩm chất lượng cao với ngân sách hợp lý nhất."
        },
        p2: {
          title: "SÁNG TẠO",
          desc: "Tận dụng công nghệ hiện đại nhất để xây dựng giải pháp đo ni đóng giày, giải quyết triệt để bài toán doanh nghiệp."
        },
        p3: {
          title: "KẾT NỐI",
          desc: "Quy trình làm việc minh bạch, giao tiếp liên tục đảm bảo bạn luôn nắm bắt từng nhịp độ phát triển của dự án."
        }
      },
      team: {
        p1: "TRONG TƯƠNG LAI, CHÚNG TÔI HƯỚNG TỚI MỤC TIÊU TRỞ THÀNH CÔNG TY",
        p2: "CÔNG NGHỆ HÀNG ĐẦU."
      },
      overlap: {
        bg: "CRAFTING THE UNCONVENTIONAL • "
      },
      marquee: "TƯ DUY ĐỘT PHÁ • GIÁ TRỊ THỰC TẾ • "
    }
  },

  en: {
    nav: {
      button: "Contact",
      1: "Home",
      2: "About",
      3: "Services",
      4: "Website Template",
    },
    hero: {
      eyebrow: "TNT SOFTWARE",
      headline: "Software Consulting",
      subhead:
        "tnt. partners with businesses on the journey of digital transformation",
      cta: "Explore now",
      scrollHint: "Scroll to explore",
    },
    solutions: {
      eyebrow: "SOLUTIONS",
      headline: "We deliver every software solution your business needs",
      sub: "From digital platforms to mobile apps, every solution is built to measure.",
      card1: {
        title: "Digital Transformation",
        desc: "Digitize your operations so your business can adapt and grow in the digital era.",
      },
      card2: {
        title: "Website",
        desc: "Landing pages, corporate sites, management systems and high-performance web apps.",
        items: ["Landing Page", "Corporate Website", "Management System", "Web Application"],
      },
      card3: {
        title: "Mobile App",
        desc: "Smooth, cross-platform mobile experiences for Android and iOS.",
        items: ["Android", "iOS", "Flutter"],
      },
    },
    workflow: {
      eyebrow: "WORKFLOW",
      headline: "The journey of working with TNT",
      sub: "Six clear, transparent steps",
      steps: [
        { number: "Step 1", title: "Gather requirements", desc: "We listen to your goals, constraints and vision." },
        { number: "Step 2", title: "Feature list &amp; Quotation", desc: "A clear scope of work with a transparent quote." },
        { number: "Step 3", title: "Deposit &amp; Kickoff", desc: "Confirm the partnership and officially start the project." },
        {
          number: "Step 4",
          title: "Demo &amp; Feedback",
          desc: "Preview the product, share feedback and refine it with the TNT team.",
          note: "If new feature requests come up, we'll send a transparent additional quote before proceeding.",
        },
        { number: "Step 5", title: "Handover", desc: "The finished, production-ready product is delivered to you." },
        {
          number: "Step 6",
          title: "Warranty",
          desc: "We stay by your side long after delivery.",
        },
      ],
    },
    customers: {
      eyebrow: "CUSTOMERS",
      headline: "Our customers",
      buttontitle: "Visit Website",
      sub: "Brands that have trusted TNT on their digital transformation journey.",
      c1: { name: "FW Group", tag: "Restaurant Industry", loc: "Ba Ria - Vung Tau,Vietnam" },
      c2: { name: "Pension Hohenau", tag: "Hospitality", loc: "Salzburg, Austria" },
      c3: { name: "Diem Sac Gallery", tag: "Art Gallery", loc: "Ho Chi Minh, Vietnam" },
    },
    pricing: {
      eyebrow: "SERVICE PACKAGES",
      headline: "Choose the plan that fits you",
      sub: "Transparent, flexible, and suitable for businesses of all sizes.",
      featuresTitle: "What you'll get",
      basic: {
        name: "Basic",
        items: ["Landing Page", "Email contact form", "Delivery within a few days"],
        price: "80 - 400 USD",
        priceSuffix: "+ Hosting",
        cta: "Talk to us",
        desc: "Suitable for small and medium-sized businesses that only need a website for customers to refer to or for advertising purposes. No need to use the website for operations.",
        f1: "Landing Page (Static)",
        f1_desc: "A single-page design that showcases all important information in an eye-catching way, optimized for SEO and advertising.",
        f2: "Automated Contact Form",
        f2_desc: "Customers leave their information, and the system sends notifications directly to your personal email inbox.",
        f3: "Rapid Deployment",
        f3_desc: "We guarantee the delivery of a complete product that can be used immediately within a few days or a maximum of 1-2 weeks.",
      },
      pro: {
        name: "Advanced",
        badge: "Most popular",
        items: ["Landing Page", "Admin dashboard", "Flexible management", "Delivery in a few weeks"],
        price: "400 - 2000 USD",
        priceSuffix: "+ Hosting",
        cta: "Talk to us",

        desc: "Suitable for small and medium-sized businesses that want to apply CRM to their operations to digitize manual work. Convenient for both employees and customers.",
        f1: "Professional Website (Multi-page)",
        f1_desc: "A system of multiple subpages (About, Services, Blog) that are closely linked to optimize user experience.",
        f2: "Admin Dashboard",
        f2_desc: "Provides a high-level account for you to freely change content, images, and write posts without needing programming knowledge.",
        f3: "Flexible Role System",
        f3_desc: "Integrates CRM to manage customer data. Clear permissions for each account: Employee, Manager, User.",
        f4: "System Security",
        f4_desc: "The project is built meticulously, delivered in a few weeks to a few months, ensuring stability and high security.",
      },
      vip: {
        name: "VIP++",
        items: ["Enterprise web application", "Complex business logic", "Large database", "Multiple development phases"],
        price: "2000 USD++",
        priceSuffix: "+ Hosting",
        cta: "Talk to us",
        desc: "This is a large enterprise that needs to operate an entire system with complex processes, requiring long-term research and solutions. Technology application is essential to manage the system and prevent losses.",
        f1: "Enterprise Web Application",
        f1_desc: "Build a web-based software architecture that is highly secure and ultra-fast.",
        f2: "Complex Business Logic",
        f2_desc: "Digitize the entire cumbersome, manual workflow of the business into an automated system.",
        f3: "Large Database Handling",
        f3_desc: "Design an optimized data model for massive amounts of data, preventing slowdowns when scaling up.",
        f4: "Multiple Development Phases",
        f4_desc: "Implement the project in multiple phases, with long-term development (measured in years) and maintenance commitments.",

      },
    },
    contact: {
      eyebrow: "CONTACT",
      headline: "Get in touch with us",
      sub: "Tell us about your project — TNT will respond within 24 hours.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      socialLabel: "Connect with us",
      form: {
        name: "Name",
        namePh: "John Doe",
        contact: "Email or phone",
        contactPh: "you@email.com or 09xx xxx xxx",
        message: "Message",
        messagePh: "Tell us about your project...",
        submit: "Send message",
        sending: "Sending...",
        success: "Sent successfully! We'll be in touch soon.",
        errorRequired: "Please fill in all fields.",
        errorPhone: "Invalid phone format (e.g., 09xx xxx xxx).",
        errorEmail: "Invalid email format.",
        packageLabel: "Selected Package",
        packageAdvice: "Need Consultation",
        packageBasic: "Basic Package",
        packagePro: "Advanced Package",
        packageVip: "VIP++",
        errorSystem: "An error occurred, please try again later."
      },
    },
    footer: {
      tagline: "Software consulting &amp; design for Vietnamese and international businesses.",
      linksTitle: "Links",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      copied: "Copied! ✔",
    },
    // ABOUT PAGE TRANSLATIONS - EN
    about: {
      hero: {
        line1: "CRAFTING",
        line2: "SOFTWARE",
        line3: "SHAPING",
        line4: "THE FUTURE"
      },
      intro: {
        label: "ABOUT",
        p1: "We are currently a passionate freelance tech team represented by Tran Ngoc Thang. Even in our early stages, we pride ourselves on delivering high-quality software products with absolute dedication.",
        p2: "With a compact size, TNT's operational costs are almost zero. This advantage translates directly into extremely competitive pricing for your business, while quality remains guaranteed to standard."
      },
      statement: {
        p1: "COMBINING MULTINATIONAL EXPERIENCE WITH",
        p2: "BREAKTHROUGH THINKING",
        p3: "WE CREATE PRODUCTS THAT",
        p4: "DEFY ALL LIMITS."
      },
      pillars: {
        p1: {
          title: "OPTIMIZE",
          desc: "A flexible working model helps cut redundant costs, delivering high-quality products with the most reasonable budget."
        },
        p2: {
          title: "CREATE",
          desc: "Leveraging the most modern technologies to build tailor-made solutions that thoroughly solve business challenges."
        },
        p3: {
          title: "CONNECT",
          desc: "Transparent workflows and continuous communication ensure you are always up-to-date with every beat of the project's development."
        }
      },
      team: {
        p1: "IN THE FUTURE, WE AIMS TO BECOME A LEADING",
        p2: "TECH COMPANY."
      },
      overlap: {
        bg: "CRAFTING THE UNCONVENTIONAL • "
      },
      marquee: "BREAKTHROUGH THINKING • REAL VALUE • "
    }
  },
};