const images = [
    '1.png','2.png','3.png','4.jpg','5.jpg','6.jpg',
    '7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg',
    '13.jpg','14.jpg','15.png','16.png','17.png','18.png','19.png','20.png'
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua carousel yang ada di halaman
    const carousels = document.querySelectorAll(".movie-carousel");
  
    carousels.forEach((carousel) => {
      const movieList = carousel.querySelector(".movie-list");
      const prevButton = carousel.querySelector(".prev");
      const nextButton = carousel.querySelector(".next");
  
      if (!movieList || !prevButton || !nextButton) {
        return; // Lewati jika ada carousel yang tidak lengkap
      }
  
      // Event listener untuk tombol NEXT
      nextButton.addEventListener("click", () => {
        // Hitung seberapa jauh harus scroll
        // Kita scroll sejauh 80% dari lebar area yang terlihat
        const scrollAmount = movieList.clientWidth * 0.8;
        movieList.scrollLeft += scrollAmount;
      });
  
      // Event listener untuk tombol PREV
      prevButton.addEventListener("click", () => {
        // Hitung seberapa jauh harus scroll
        const scrollAmount = movieList.clientWidth * 0.8;
        movieList.scrollLeft -= scrollAmount;
      });
    });
    // =================================== 
        // --- KODE BARU UNTUK DROPDOWN PROFIL ---
    // ===================================
    const profile = document.querySelector(".profile");
    const dropdown = document.querySelector(".dropdown");

    if (profile) {
      profile.addEventListener("click", function (event) {
        // Hentikan 'click' agar tidak langsung ditangkap oleh 'window'
        event.stopPropagation();
        // Tambah/hapus class 'active'
        profile.classList.toggle("active");
      });
    }

    // Menutup dropdown jika pengguna mengklik di luar area
    window.addEventListener("click", function () {
      if (profile && profile.classList.contains("active")) {
        profile.classList.remove("active");
      }
    });

    // Hentikan penutupan jika pengguna mengklik di dalam dropdown
    if (dropdown) {
      dropdown.addEventListener("click", function (event) {
        // Ini agar saat Anda klik "Masuk" atau "Daftar", menunya
        // tidak langsung tertutup sebelum link-nya sempat diproses
        event.stopPropagation();
      });
    }
  });
  