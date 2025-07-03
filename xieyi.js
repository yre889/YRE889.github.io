// 获取URL参数
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// DOM元素
const termsContent = document.getElementById('termsContent');
const privacyContent = document.getElementById('privacyContent');
const agreementTitle = document.getElementById('agreementTitle');
const backBtn = document.getElementById('backBtn');
const agreeBtn = document.getElementById('agreeBtn');

// 根据参数显示不同内容
document.addEventListener('DOMContentLoaded', function() {
    const type = getUrlParam('type');
    
    if (type === 'privacy') {
        termsContent.style.display = 'none';
        privacyContent.style.display = 'block';
        agreementTitle.textContent = '隐私政策';
    } else {
        termsContent.style.display = 'block';
        privacyContent.style.display = 'none';
        agreementTitle.textContent = '用户服务协议';
    }
});

// 返回按钮事件
backBtn.addEventListener('click', function() {
    window.history.back() || (window.location.href = 'login.html');
});

// 同意按钮事件（核心改进：存储同意状态）
agreeBtn.addEventListener('click', function() {
    // 存储用户已同意协议的状态到本地存储
    localStorage.setItem('agreedToTerms', 'true');
    // 返回上一页（登录/注册页）
    window.history.back() || (window.location.href = 'login.html');
});
