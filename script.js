/* ==========================================================================
   Mie Ayam Jawir - Official Website Logic
   Full Responsive Integration (iPhone, Tablet, Cinema Screen)
   ========================================================================== */

// --- Initial Cart Data: Starts Empty (0 items) ---
let cart = [];

// --- Currency Formatter ---
function formatRupiah(number) {
    return 'Rp' + number.toLocaleString('id-ID');
}

// --- Render Cart Items & Visibility ---
function renderCart() {
    const orderSection = document.getElementById('daftar-pesanan');
    const container = document.getElementById('orderItemsContainer');
    const badge = document.getElementById('cartBadge');
    const mobileCartCount = document.getElementById('mobileCartCount');
    const countBadge = document.getElementById('orderItemCountBadge');
    const totalDisplay = document.getElementById('totalPriceDisplay');
    
    if (!orderSection || !container) return;

    // Sembunyikan daftar pesanan jika keranjang masih kosong (0)
    if (cart.length === 0) {
        orderSection.classList.add('order-section-hidden');
        if (badge) {
            badge.textContent = '0';
            badge.classList.add('is-zero');
        }
        if (mobileCartCount) mobileCartCount.textContent = '0';
        if (countBadge) countBadge.textContent = '0 Menu';
        if (totalDisplay) totalDisplay.textContent = 'Rp0';
        container.innerHTML = '';
        return;
    }

    // Tampilkan bagian daftar pesanan jika ada item
    orderSection.classList.remove('order-section-hidden');

    let totalItems = 0;
    let totalPrice = 0;
    let html = '';

    cart.forEach((item, index) => {
        totalItems += item.qty;
        totalPrice += item.price * item.qty;

        html += `
            <div class="order-item-card" data-index="${index}">
                <div class="order-item-left">
                    <!-- Ikon bintang pada order list sesuai panduan wireframe -->
                    <svg class="order-star-icon" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    <div class="order-item-details">
                        <span class="order-item-name">${item.name}</span>
                        <span class="order-item-desc">${item.desc}</span>
                        <span class="order-item-price">${formatRupiah(item.price)}</span>
                    </div>
                </div>

                <div class="order-item-right">
                    <div class="qty-control">
                        <button class="btn-qty" onclick="changeQty(${index}, -1)" aria-label="Kurangi Jumlah">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="btn-qty" onclick="changeQty(${index}, 1)" aria-label="Tambah Jumlah">+</button>
                    </div>
                    <button class="btn-delete-item" onclick="removeItem(${index})" title="Hapus menu ini">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    if (badge) {
        badge.textContent = totalItems;
        badge.classList.remove('is-zero');
    }
    if (mobileCartCount) mobileCartCount.textContent = totalItems;
    if (countBadge) countBadge.textContent = `${totalItems} Menu`;
    if (totalDisplay) totalDisplay.textContent = formatRupiah(totalPrice);
}

// --- Handler Klik Keranjang di Navbar ---
function handleNavbarCartClick() {
    if (cart.length === 0) {
        showToast('Keranjang pesanan masih kosong. Yuk pilih menu favoritmu!');
        const menuElem = document.getElementById('menu');
        if (menuElem) {
            menuElem.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        const orderSection = document.getElementById('daftar-pesanan');
        if (orderSection) {
            orderSection.classList.remove('order-section-hidden');
            orderSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// --- Add to Cart ---
function addToCart(id, name, price, desc) {
    const existingIndex = cart.findIndex(item => item.id === id);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            qty: 1,
            desc: desc
        });
    }

    renderCart();
    showToast(`✓ ${name} berhasil ditambahkan ke keranjang!`);

    // Otomatis scroll perlahan ke daftar pesanan jika baru pertama kali menambah item
    const orderSection = document.getElementById('daftar-pesanan');
    if (orderSection && cart.length === 1 && cart[0].qty === 1) {
        setTimeout(() => {
            orderSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}

// --- Change Quantity ---
function changeQty(index, delta) {
    if (cart[index]) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            const removed = cart.splice(index, 1);
            showToast(`${removed[0].name} dihapus dari pesanan.`);
        }
        renderCart();
    }
}

// --- Remove Item ---
function removeItem(index) {
    if (cart[index]) {
        const removed = cart.splice(index, 1);
        renderCart();
        showToast(`${removed[0].name} dihapus.`);
    }
}

// --- Filter Menu Tabs ---
function filterMenu(category, btn) {
    const cards = document.querySelectorAll('.menu-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// --- Toast Notification ---
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msg = document.getElementById('toastMessage');
    if (!toast || !msg) return;

    msg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// --- Checkout Modal & WhatsApp Action ---
function proceedCheckout() {
    if (cart.length === 0) {
        showToast('Keranjang pesanan masih kosong. Silakan pilih menu!');
        return;
    }

    const modal = document.getElementById('checkoutModal');
    const modalSummary = document.getElementById('modalOrderSummary');
    const sellerNotes = document.getElementById('sellerNotes').value.trim();

    let total = 0;
    let html = '';

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        html += `
            <div class="modal-order-row">
                <span>${item.name} x ${item.qty}</span>
                <span>${formatRupiah(subtotal)}</span>
            </div>
        `;
    });

    if (sellerNotes) {
        html += `
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed #CBD5E1; font-size: 0.85rem; color: #475569;">
                <strong>Catatan Penjual:</strong> "${sellerNotes}"
            </div>
        `;
    }

    html += `
        <div class="modal-total-row">
            <span>Total Pembayaran</span>
            <span>${formatRupiah(total)}</span>
        </div>
    `;

    modalSummary.innerHTML = html;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('checkoutModal');
    if (modal) modal.classList.remove('active');
}

function sendToWhatsApp() {
    const sellerNotes = document.getElementById('sellerNotes').value.trim();
    let total = 0;
    
    let text = `Halo Mie Ayam Jawir (Pluit), saya ingin memesan:\n\n`;
    cart.forEach((item, i) => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        text += `${i + 1}. ${item.name} (${item.qty}x) = ${formatRupiah(subtotal)}\n`;
    });

    if (sellerNotes) {
        text += `\n*Catatan untuk Penjual:* ${sellerNotes}\n`;
    }

    text += `\n*Total Harga: ${formatRupiah(total)}*`;
    text += `\n*Lokasi Pengantaran / Ambil Sendiri:* Pluit Sakti & Sekitarnya`;
    text += `\nMohon konfirmasi pesanan saya. Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    const phoneNumber = '6281234567890';
    const waUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

    window.open(waUrl, '_blank');
    closeModal();
}

// ==========================================================================
// 1. HERO HOMEPAGE VIDEO PLAYER (Tampilan Awal)
// ==========================================================================
function initHeroVideo() {
    const video = document.getElementById('heroVideo');
    const playBtn = document.getElementById('heroPlayBtn');
    const playIcon = document.getElementById('heroPlayIcon');
    const muteBtn = document.getElementById('heroMuteBtn');
    const muteIcon = document.getElementById('heroMuteIcon');
    const soundLabel = document.getElementById('soundLabel');

    if (!video) return;

    // Autoplay handling
    video.play().catch(() => {
        console.log('Autoplay waiting for user gesture');
    });

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                playIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
            } else {
                video.pause();
                playIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
            }
        });
    }

    if (muteBtn) {
        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            if (video.muted) {
                muteIcon.innerHTML = `
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                `;
                if (soundLabel) soundLabel.textContent = 'Buka Suara';
            } else {
                muteIcon.innerHTML = `
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                `;
                if (soundLabel) soundLabel.textContent = 'Senyapkan';
                video.volume = 1.0;
            }
        });
    }
}

// ==========================================================================
// 2. ABOUT SECTION VIDEO & AUDIO PLAYER
// Sesuai Wireframe: "1 video tentang mie ayam jawir & 1 audio yang menyertai video"
// ==========================================================================
function initAboutVideoPlayer() {
    const video = document.getElementById('aboutVideo');
    if (!video) return;

    const playBtn = document.getElementById('playBtn');
    const overlay = document.getElementById('videoOverlay');
    const ctrlPlayPause = document.getElementById('ctrlPlayPause');
    const ctrlPlayIcon = document.getElementById('ctrlPlayIcon');
    const progressBar = document.getElementById('progressBar');
    const progressFill = document.getElementById('progressFill');
    const timeDisplay = document.getElementById('timeDisplay');
    const ctrlMuteAudio = document.getElementById('ctrlMuteAudio');
    const volumeIcon = document.getElementById('volumeIcon');
    const ctrlFullscreen = document.getElementById('ctrlFullscreen');
    const videoPlayerBox = document.getElementById('videoPlayer');

    function togglePlay() {
        if (video.paused) {
            video.play().then(() => {
                overlay.classList.add('is-playing');
                ctrlPlayIcon.innerHTML = `<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`;
            }).catch(err => console.log('Video play error:', err));
        } else {
            video.pause();
            overlay.classList.remove('is-playing');
            ctrlPlayIcon.innerHTML = `<polygon points="5 3 19 12 5 21 5 3"></polygon>`;
        }
    }

    if (playBtn) playBtn.addEventListener('click', togglePlay);
    if (overlay) overlay.addEventListener('click', togglePlay);
    if (ctrlPlayPause) ctrlPlayPause.addEventListener('click', togglePlay);

    // Update progress bar & time
    video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const percent = (video.currentTime / video.duration) * 100;
        if (progressFill) progressFill.style.width = `${percent}%`;

        const curM = Math.floor(video.currentTime / 60);
        const curS = Math.floor(video.currentTime % 60);
        const durM = Math.floor(video.duration / 60) || 0;
        const durS = Math.floor(video.duration % 60) || 0;
        if (timeDisplay) {
            timeDisplay.textContent = `${curM}:${curS < 10 ? '0' : ''}${curS} / ${durM}:${durS < 10 ? '0' : ''}${durS}`;
        }
    });

    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            if (video.duration) {
                video.currentTime = pos * video.duration;
            }
        });
    }

    if (ctrlMuteAudio) {
        ctrlMuteAudio.addEventListener('click', () => {
            video.muted = !video.muted;
            if (video.muted) {
                volumeIcon.innerHTML = `
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <line x1="23" y1="9" x2="17" y2="15"></line>
                    <line x1="17" y1="9" x2="23" y2="15"></line>
                `;
            } else {
                volumeIcon.innerHTML = `
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                `;
            }
        });
    }

    if (ctrlFullscreen && videoPlayerBox) {
        ctrlFullscreen.addEventListener('click', () => {
            if (!document.fullscreenElement) {
                videoPlayerBox.requestFullscreen().catch(err => console.log(err));
            } else {
                document.exitFullscreen();
            }
        });
    }
}

// ==========================================================================
// 3. MOBILE & TABLET DRAWER NAVIGATION
// ==========================================================================
function initMobileNavigation() {
    const toggleBtn = document.getElementById('mobileMenuToggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileNavBackdrop');
    const closeBtn = document.getElementById('mobileNavClose');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, #mobileNavOrderBtn');

    function openDrawer() {
        drawer.classList.add('active');
        backdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        drawer.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            closeDrawer();

            if (href === '#daftar-pesanan' && cart.length === 0) {
                e.preventDefault();
                showToast('Keranjang pesanan masih kosong. Yuk pilih menu favoritmu!');
                const menuSec = document.getElementById('menu');
                if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// --- DOM Ready Initializer ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi Keranjang Kosong (Sembunyi)
    renderCart();

    // 2. Inisialisasi Video Intro di Tampilan Awal (Homepage)
    initHeroVideo();

    // 3. Inisialisasi Video Player di Bagian About
    initAboutVideoPlayer();

    // 4. Inisialisasi Navigasi Mobile Drawer
    initMobileNavigation();

    // 5. Smooth Anchor Link Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    e.preventDefault();
                    if (targetId === '#daftar-pesanan' && cart.length === 0) {
                        showToast('Keranjang pesanan masih kosong. Silakan pilih menu!');
                        const menuSec = document.getElementById('menu');
                        if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
                        return;
                    }

                    targetElem.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
