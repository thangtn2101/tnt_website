/**
 * main.js
 * Navbar behaviour, scroll-reveal, hero particles, the workflow
 * scroll-driven timeline, and contact-form validation.
 * No external dependencies — vanilla DOM + IntersectionObserver + Lenis.
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Lenis Smooth Scroll Setup (Loại bỏ giật lag)                       */
  /* ------------------------------------------------------------------ */
  let lenis;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  /* ------------------------------------------------------------------ */
  /* Navbar: shrink + blur on scroll, mobile menu toggle                 */
  /* ------------------------------------------------------------------ */
  function initNavbar() {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;

    const onScroll = () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();

    // Sử dụng Lenis scroll thay vì window scroll
    if (lenis) {
      lenis.on('scroll', onScroll);
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    const burger = navbar.querySelector(".navbar__burger");
    if (burger) {
      burger.addEventListener("click", () => {
        navbar.classList.toggle("is-menu-open");
      });
    }

    navbar.querySelectorAll(".navbar__mobile-panel a").forEach((link) => {
      link.addEventListener("click", () => navbar.classList.remove("is-menu-open"));
    });
  }

  /* ------------------------------------------------------------------ */
  /* Smooth scroll for in-page anchor links                              */
  /* ------------------------------------------------------------------ */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();

        if (lenis) {
          lenis.scrollTo(target);
        } else {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Scroll-reveal via IntersectionObserver                              */
  /* ------------------------------------------------------------------ */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* Hero ambient particles (generated once, CSS handles the drift)      */
  /* ------------------------------------------------------------------ */
  function initHeroParticles() {
    const field = document.querySelector("[data-particle-field]");
    if (!field) return;

    const count = window.innerWidth < 720 ? 16 : 32;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "hero__particle";
      const left = Math.random() * 100;
      const duration = 14 + Math.random() * 14;
      const delay = Math.random() * -20;
      const size = 2 + Math.random() * 2.5;
      p.style.left = left + "%";
      p.style.bottom = -Math.random() * 20 + "px";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.animationDuration = duration + "s";
      p.style.animationDelay = delay + "s";
      frag.appendChild(p);
    }
    field.appendChild(frag);
  }

  /* ------------------------------------------------------------------ */
  /* Workflow — Cinematic Vertical Scroll Timeline                       */
  /* ------------------------------------------------------------------ */
  function initWorkflowTimeline() {
    const timeline = document.querySelector("[data-workflow-timeline]");
    if (!timeline) return;

    const fill = timeline.querySelector(".workflow__track-fill");
    const steps = Array.from(timeline.querySelectorAll(".workflow-step"));

    function update() {
      const rect = timeline.getBoundingClientRect();
      const vh = window.innerHeight;

      // 1. Tính toán thanh vạch sáng chạy xuống (Progress Bar)
      const start = vh * 0.7;
      const total = rect.height;
      const traveled = start - rect.top;

      let progress = total > 0 ? traveled / total : 0;
      progress = Math.max(0, Math.min(1, progress));

      if (fill) {
        fill.style.transform = `scaleY(${progress})`;
      }

      // 2. Kích hoạt từng step khi lọt vào tầm ngắm (Focus Zone)
      const focusStart = vh * 0.75; // Điểm bắt đầu sáng
      const focusEnd = vh * 0.25;   // Qua điểm này sẽ hết sáng (is-passed)

      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();

        // Điểm node (vòng tròn số) của step hiện tại
        const nodeY = stepRect.top + 60;

        // Active: Đang nằm giữa màn hình
        const inFocus = nodeY <= focusStart && nodeY >= focusEnd;
        // Passed: Đã cuộn qua
        const isPassed = nodeY < focusEnd;

        step.classList.toggle("is-active", inFocus);
        step.classList.toggle("is-passed", isPassed || (inFocus && nodeY < focusStart));

      });
    }

    update();

    if (typeof lenis !== 'undefined') {
      lenis.on('scroll', update);
    } else {
      window.addEventListener("scroll", update, { passive: true });
    }
    window.addEventListener("resize", update);
  }

  /* ------------------------------------------------------------------ */
  /* Contact form — lightweight client-side validation + success state   */
  /* ------------------------------------------------------------------ */
  /* ------------------------------------------------------------------ */
  /* Contact form — Lightweight validation + EmailJS Integration         */
  /* ------------------------------------------------------------------ */
  /* ------------------------------------------------------------------ */
  /* Contact form — Lightweight validation + EmailJS Integration         */
  /* ------------------------------------------------------------------ */
  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const status = form.querySelector("[data-form-status]");
    const submitBtn = form.querySelector("[data-form-submit]");
    const packageSelect = document.getElementById("package");

    // 1. Tự động chọn gói khi khách click từ section Pricing
    document.querySelectorAll("[data-package]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (packageSelect) {
          packageSelect.value = btn.getAttribute("data-package");
        }
      });
    });

    // 2. Hàm kiểm tra định dạng lấy lỗi từ biến dict (ngôn ngữ hiện tại)
    function validateEmailOrPhone(value, dict) {
      const trimmedValue = value.trim();
      const isNumeric = /^\d+$/.test(trimmedValue);

      if (isNumeric) {
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(trimmedValue)) {
          return { isValid: false, message: dict.contact.form.errorPhone };
        }
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(trimmedValue)) {
          return { isValid: false, message: dict.contact.form.errorEmail };
        }
      }
      return { isValid: true };
    }

    // 3. Xử lý gửi Form
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;

      // Lấy bộ dịch theo ngôn ngữ hiện tại (VI hoặc EN)
      const dict = TRANSLATIONS[window.TNT_I18N.getLang()];

      // Validation
      form.querySelectorAll("[data-required]").forEach((field) => {
        const wrapper = field.closest(".form-field");
        const errorMsg = wrapper.querySelector(".form-field__error");

        if (!field.value.trim()) {
          valid = false;
          wrapper.classList.add("has-error");
          errorMsg.textContent = dict.contact.form.errorRequired; // Gắn text lỗi required
        } else if (field.id === "reach") {
          const check = validateEmailOrPhone(field.value, dict); // Truyền dict vào để lấy lỗi
          if (!check.isValid) {
            valid = false;
            wrapper.classList.add("has-error");
            errorMsg.textContent = check.message;
          } else {
            wrapper.classList.remove("has-error");
          }
        } else {
          wrapper.classList.remove("has-error");
        }
      });

      if (!valid) return;

      submitBtn.disabled = true;
      const originalLabel = submitBtn.textContent;
      submitBtn.textContent = dict.contact.form.sending || "Đang gửi...";

      // Gửi data qua EmailJS
      const selectedPackageName = packageSelect.options[packageSelect.selectedIndex].text;
      const emailValue = document.getElementById("reach").value.trim();

      emailjs.send("service_u43d1tp", "template_s1tq3lh", {
        title: document.getElementById("name").value,
        cus_name: document.getElementById("name").value,
        cus_email: emailValue,
        package_name: selectedPackageName,
        message: document.getElementById("message").value,
      })
        .then(function (response) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
          status.textContent = dict.contact.form.success || "Đã gửi thành công!";
          status.style.backgroundColor = "var(--gradient-soft)";
          status.style.color = "var(--text-primary)";
          status.classList.add("is-visible");

          document.getElementById("contactForm").reset();
          setTimeout(() => status.classList.remove("is-visible"), 5000);
        }, function (error) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalLabel;
          status.textContent = dict.contact.form.errorSystem;
          status.style.backgroundColor = "#fff5f7";
          status.style.color = "#e0507a";
          status.classList.add("is-visible");

          console.log("FAILED...", error);
          setTimeout(() => status.classList.remove("is-visible"), 5000);
        });
    });

    // Clear error khi khách đang nhập
    form.querySelectorAll("[data-required]").forEach((field) => {
      field.addEventListener("input", () => field.closest(".form-field").classList.remove("has-error"));
    });
  }

  /* ------------------------------------------------------------------ */
  /* Hero Interactive: 3D Tilt & Spotlight (Tương tác background & chữ) */
  /* ------------------------------------------------------------------ */
  function initHeroInteractive() {
    const hero = document.querySelector(".hero");
    const heroContent = document.querySelector(".hero__content");

    if (!hero || !heroContent) return;

    // Tạo thẻ div cho hiệu ứng ánh sáng
    const spotlight = document.createElement("div");
    spotlight.className = "hero__spotlight";
    hero.appendChild(spotlight);

    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Di chuyển Spotlight
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;

      // Tính toán góc nghiêng 3D cho phần Text (Tilt effect)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5; // Giới hạn góc nghiêng tối đa 5 độ
      const rotateY = ((x - centerX) / centerX) * 5;

      heroContent.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Trả lại vị trí cũ khi chuột rời đi
    hero.addEventListener("mouseleave", () => {
      heroContent.style.transform = `rotateX(0deg) rotateY(0deg)`;
      heroContent.style.transition = `transform 0.5s ease`; // Thêm ease để nhả chuột ra mượt hơn
      setTimeout(() => {
        heroContent.style.transition = `transform 0.1s linear`;
      }, 500);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Khởi tạo toàn bộ chức năng khi trang đã parse xong HTML            */
  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initSmoothAnchors();
    initReveal();
    initHeroParticles();
    initWorkflowTimeline();
    initContactForm();
    initHeroInteractive();
    initCopyLinks(); 
  });

})();


/* ------------------------------------------------------------------ */
  /* Click to Copy (Footer Links)                                        */
  /* ------------------------------------------------------------------ */
  function initCopyLinks() {
    const copyLinks = document.querySelectorAll(".copy-link");
    
    copyLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Ngăn chặn hành vi nhảy trang của href="#"
        
        const textToCopy = link.getAttribute("data-copy");
        
        // Ghi nội dung vào Clipboard
        navigator.clipboard.writeText(textToCopy).then(() => {
          // Lưu lại nội dung gốc (thangn.tran... hoặc +84...)
          const originalText = link.textContent;
          const dict = TRANSLATIONS[window.TNT_I18N.getLang()];
          
          // Đổi chữ và màu để báo hiệu thành công
          link.textContent = dict.footer.copied;
          link.style.color = "#ff5fc7"; // Đổi sang màu hồng gradient brand
          link.style.pointerEvents = "none"; // Tránh click liên tục nhiều lần
          
          // Trả lại trạng thái cũ sau 2 giây
          setTimeout(() => {
            link.textContent = originalText;
            link.style.color = "";
            link.style.pointerEvents = "auto";
          }, 2000);
        }).catch(err => {
          console.error("Không thể copy: ", err);
        });
      });
    });
  }