// 悬浮窗功能
document.addEventListener('DOMContentLoaded', function() {
    const popupOverlay = document.getElementById('popup-overlay');
    const popupConfirm = document.getElementById('popup-confirm');
    const popupCancel = document.getElementById('popup-cancel');
    
    // 显示悬浮窗
    popupOverlay.style.display = 'flex';
    
    // 确定按钮点击事件
    popupConfirm.addEventListener('click', function() {
        // 跳转到指定网页，这里设置为login.html，你可以修改为你需要的URL
        window.location.href = 'https://qm.qq.com/q/K4aFTBYyUs';
    });
    
    // 取消按钮点击事件
    popupCancel.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
    
    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 添加CTA按钮悬停效果
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', () => {
            ctaButton.style.transform = 'translateY(-2px)';
            ctaButton.style.boxShadow = '0 15px 30px -5px rgba(99, 102, 241, 0.4)';
        });
        
        ctaButton.addEventListener('mouseleave', () => {
            ctaButton.style.transform = 'translateY(0)';
            ctaButton.style.boxShadow = '0 10px 25px -5px rgba(99, 102, 241, 0.3)';
        });
    }
});