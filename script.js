
* { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; -webkit-tap-highlight-color: transparent; }

body {
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #31103f 100%);
    color: #f8fafc; min-height: 100vh; padding-bottom: 90px; overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
}

@keyframes bounceIn {
    0% { opacity: 0; transform: translate(-50%, -30px) scale(0.9); }
    60% { opacity: 1; transform: translate(-50%, 5px) scale(1.03); }
    100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
}

.bg-orb-1 {
    position: fixed; top: -100px; left: -100px; width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(0,0,0,0) 70%);
    border-radius: 50%; z-index: 0; pointer-events: none;
}
.bg-orb-2 {
    position: fixed; bottom: 5px; right: -100px; width: 350px; height: 350px;
    background: radial-gradient(circle, rgba(99,102,241,0.35) 0%, rgba(0,0,0,0) 70%);
    border-radius: 50%; z-index: 0; pointer-events: none;
}

#announcementBanner {
    background: linear-gradient(90deg, #ec4899, #8b5cf6); color: white; text-align: center;
    padding: 8px 14px; font-size: 0.85rem; font-weight: 700; display: none; position: relative; z-index: 10;
}

#maintenanceScreen {
    display: none; position: fixed; top:0; left:0; width:100%; height:100%;
    background: #0f172a; z-index: 9999; text-align: center; padding: 50px 20px;
    flex-direction: column; align-items: center; justify-content: center;
}
#maintenanceScreen h1 { font-family: 'Outfit', sans-serif; font-size: 2.5rem; color: #f472b6; margin-bottom: 15px; }

header { position: relative; z-index: 1; text-align: center; padding: 30px 20px 15px; }
.badge {
    display: inline-block; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2); border-radius: 30px; padding: 6px 16px;
    font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: #f472b6; margin-bottom: 12px;
}
header h1 {
    font-family: 'Outfit', sans-serif; font-size: 2.3rem; font-weight: 800;
    background: linear-gradient(to right, #ffffff, #f472b6, #38bdf8);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;
    cursor: pointer; user-select: none; transition: transform 0.2s;
}
header h1:active { transform: scale(0.98); }
header p { font-size: 0.9rem; color: #94a3b8; font-weight: 500; }

.social-bar { display: flex; justify-content: center; gap: 15px; margin-top: 15px; position: relative; z-index: 1; }
.social-btn {
    background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 8px 16px; border-radius: 20px; color: #fff; font-size: 0.85rem; font-weight: 600;
    text-decoration: none; display: flex; align-items: center; gap: 8px; backdrop-filter: blur(10px);
    transition: all 0.25s ease;
}
.social-btn:hover { background: rgba(255, 255, 255, 0.2); border-color: #f472b6; transform: translateY(-2px); }

.container { max-width: 480px; margin: 20px auto; padding: 0 16px; position: relative; z-index: 1; }

.glass-card {
    background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px; padding: 24px; margin-bottom: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.section-title {
    font-family: 'Outfit', sans-serif; font-size: 1.2rem; font-weight: 700;
    color: #fff; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;
}

.category-filter { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 12px; scrollbar-width: none; }
.category-filter::-webkit-scrollbar { display: none; }
.cat-pill {
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); padding: 6px 14px;
    border-radius: 20px; font-size: 0.78rem; font-weight: 600; color: #cbd5e1; cursor: pointer; white-space: nowrap; transition: 0.2s;
}
.cat-pill.active, .cat-pill:hover { background: #ec4899; border-color: #ec4899; color: #fff; }

.cake-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.cake-card {
    position: relative;
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px; overflow: hidden; text-align: center; padding: 12px; 
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; justify-content: space-between;
}
.cake-card:hover { border-color: #f472b6; background: rgba(244, 114, 182, 0.1); transform: translateY(-4px); }
.cake-card img { width: 100%; height: 95px; object-fit: cover; border-radius: 12px; margin-bottom: 8px; }
.cake-card h4 { font-size: 0.85rem; font-weight: 700; color: #f8fafc; margin-bottom: 4px; }
.cake-card p { font-size: 0.75rem; color: #f472b6; font-weight: 600; margin-bottom: 8px; }
.btn-add-cart {
    background: linear-gradient(135deg, #ec4899, #db2777); color: white; border: none;
    padding: 7px 12px; border-radius: 10px; font-size: 0.75rem; font-weight: 700; cursor: pointer; width: 100%; transition: 0.2s;
}
.btn-add-cart:active { transform: scale(0.95); }

/* Out of Stock Badge & Button State */
.sold-out-tag {
    position: absolute; top: 18px; right: 18px;
    background: rgba(239, 68, 68, 0.92); color: #fff;
    font-size: 0.65rem; font-weight: 800; padding: 3px 8px;
    border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4); z-index: 2;
}
.btn-add-cart.disabled-stock {
    background: rgba(148, 163, 184, 0.2);
    color: #94a3b8;
    border: 1px solid rgba(148, 163, 184, 0.3);
    cursor: not-allowed;
}

/* Floating Cart Bar */
.floating-cart {
    position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
    background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white;
    padding: 12px 24px; border-radius: 35px; display: flex; align-items: center; justify-content: space-between;
    width: 90%; max-width: 440px; box-shadow: 0 10px 30px rgba(236, 72, 153, 0.5);
    z-index: 99; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.floating-cart:hover { transform: translateX(-50%) scale(1.03); }
.cart-left { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 0.95rem; }
.cart-badge { background: #fff; color: #ec4899; padding: 2px 8px; border-radius: 12px; font-size: 0.8rem; }

/* Reviews Section */
.reviews-container { display: flex; flex-direction: column; gap: 12px; max-height: 250px; overflow-y: auto; padding-right: 4px; }
.review-card {
    background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px; padding: 14px;
}
.review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
.review-name { font-size: 0.9rem; font-weight: 700; color: #fff; }
.review-stars { color: #fbbf24; font-size: 0.75rem; }
.review-text { font-size: 0.82rem; color: #cbd5e1; line-height: 1.4; }

label { font-size: 0.8rem; font-weight: 600; color: #cbd5e1; display: block; margin: 16px 0 6px; text-transform: uppercase; letter-spacing: 0.5px; }

select, input, textarea {
    width: 100%; padding: 14px 16px; border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.15); background: rgba(15, 23, 42, 0.6);
    color: #fff; font-size: 0.95rem; outline: none; transition: all 0.25s;
}
select option { background: #0f172a; color: #fff; }
select:focus, input:focus, textarea:focus {
    border-color: #f472b6; box-shadow: 0 0 15px rgba(244, 114, 182, 0.3); background: rgba(15, 23, 42, 0.8);
}

.cart-active-banner {
    display: none; background: rgba(34, 197, 94, 0.12); border: 1px solid rgba(34, 197, 94, 0.4);
    color: #4ade80; padding: 10px 12px; border-radius: 12px; font-size: 0.8rem; margin-top: 8px;
    justify-content: space-between; align-items: center;
}

.price-box {
    background: linear-gradient(135deg, rgba(244,114,182,0.15), rgba(99,102,241,0.15));
    border: 1px solid rgba(244, 114, 182, 0.3); border-radius: 20px; padding: 20px; text-align: center; margin-top: 25px;
}
.price-box p { font-size: 0.8rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; }
.price-box span {
    font-family: 'Outfit', sans-serif; font-size: 2.4rem; font-weight: 800;
    background: linear-gradient(to right, #f472b6, #38bdf8);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: block; margin-top: 4px;
}

.btn-order {
    width: 100%; background: linear-gradient(135deg, #22c55e, #16a34a); color: white; border: none;
    padding: 18px; border-radius: 16px; font-size: 1.1rem; font-weight: 800; cursor: pointer;
    margin-top: 20px; text-transform: uppercase; letter-spacing: 1px;
    display: flex; align-items: center; justify-content: center; gap: 10px;
    box-shadow: 0 0 25px rgba(34, 197, 94, 0.4); transition: 0.2s;
}
.btn-order:active { transform: scale(0.97); }

.floating-support {
    position: fixed; bottom: 85px; right: 20px; background: #25D366; color: white;
    width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center;
    justify-content: center; font-size: 24px; box-shadow: 0 5px 20px rgba(37, 211, 102, 0.5);
    z-index: 90; text-decoration: none; transition: 0.25s;
}
.floating-support:hover { transform: scale(1.1); }

/* LIVE ORDER NOTIFICATION TOAST */
#liveAlertToast {
    display: none; position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
    background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 14px 24px;
    border-radius: 30px; z-index: 99999; font-weight: bold; box-shadow: 0 10px 30px rgba(236,72,153,0.6);
    animation: bounceIn 0.5s; text-align: center;
}

/* MODALS */
#cartModal, #passwordModal, #adminModal, #trackerModal, #invoiceModal {
    display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); z-index: 10000; overflow-y: auto; padding: 20px 15px;
}
#passwordModal, #cartModal, #trackerModal, #invoiceModal { align-items: center; justify-content: center; }

.modal-box {
    background: linear-gradient(145deg, #1e1b4b, #0f172a); border: 2px solid rgba(244, 114, 182, 0.4);
    border-radius: 24px; max-width: 420px; width: 100%; padding: 24px; color: #fff;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7); max-height: 90vh; overflow-y: auto;
}
.modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; }
.modal-header h3 { font-family: 'Outfit', sans-serif; font-size: 1.3rem; color: #f472b6; }
.close-btn { background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; color: #f87171; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; font-weight: 700; display: flex; align-items: center; justify-content: center; }

.cart-item-row { display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 10px 12px; border-radius: 12px; margin-bottom: 8px; font-size: 0.85rem; }
.cart-controls { display: flex; align-items: center; gap: 8px; }
.cart-controls button { background: rgba(255,255,255,0.1); border: none; color: #fff; width: 24px; height: 24px; border-radius: 6px; cursor: pointer; font-weight: bold; }

.admin-box {
    background: linear-gradient(145deg, #1e1b4b, #0f172a); border: 2px solid rgba(244, 114, 182, 0.4);
    border-radius: 28px; max-width: 480px; margin: 20px auto; padding: 28px; color: #fff;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6);
}

/* Admin Revenue Stats Grid */
.admin-stats-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 18px;
}
.admin-stat-card {
    background: linear-gradient(135deg, rgba(236,72,153,0.15), rgba(56,189,248,0.12));
    border: 1px solid rgba(244, 114, 182, 0.35);
    border-radius: 16px; padding: 14px 12px; text-align: center;
}
.admin-stat-card p { font-size: 0.72rem; color: #cbd5e1; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
.admin-stat-card h4 { font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: #4ade80; }

.btn-admin-act {
    background: linear-gradient(135deg, #ec4899, #db2777); color: white; border: none;
    padding: 14px 18px; border-radius: 14px; font-weight: 700; cursor: pointer; margin-top: 12px; width: 100%;
}

.order-history-box { background: rgba(0,0,0,0.3); border-radius: 12px; padding: 12px; margin-top: 10px; max-height: 180px; overflow-y: auto; font-size: 0.8rem; color: #cbd5e1; }
.order-item { border-bottom: 1px solid rgba(255,255,255,0.1); padding: 10px 0; }
.manage-list-item { display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.25); padding: 8px 12px; border-radius: 10px; margin-bottom: 6px; font-size: 0.82rem; gap: 8px; }

.footer-text { text-align: center; font-size: 0.8rem; color: #64748b; margin-top: 20px; }

/* Clean Bill Print Styling */
@media print {
    body * { visibility: hidden; }
    #invoiceModal, #invoicePrintArea, #invoicePrintArea * { visibility: visible; }
    #invoiceModal { position: absolute; left: 0; top: 0; width: 100%; background: #fff !important; padding: 0; }
    #invoicePrintArea { box-shadow: none !important; border: 1px solid #000 !important; max-width: 100% !important; width: 100% !important; }
    .no-print { display: none !important; }
}
