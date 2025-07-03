// DOM元素
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const agreementCheckbox = document.getElementById('userAgreement');
const submitBtn = document.getElementById('submitBtn');
const registerLink = document.getElementById('registerLink');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// 表单验证函数
function validateForm() {
    const isEmailValid = emailInput.checkValidity();
    const isPasswordValid = passwordInput.checkValidity();
    const isAgreementChecked = agreementCheckbox.checked;
    
    // 显示/隐藏错误信息
    emailError.style.display = isEmailValid ? 'none' : 'block';
    passwordError.style.display = isPasswordValid ? 'none' : 'block';
    
    // 更新按钮状态
    submitBtn.disabled = !(isEmailValid && isPasswordValid && isAgreementChecked);
    
    return isEmailValid && isPasswordValid && isAgreementChecked;
}

// 页面加载时自动勾选（核心改进）
document.addEventListener('DOMContentLoaded', function() {
    // 检查本地存储中是否有同意记录
    if (localStorage.getItem('agreedToTerms') === 'true') {
        agreementCheckbox.checked = true;
        // 触发验证，更新按钮状态
        validateForm();
    }

    // 实时表单验证
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    agreementCheckbox.addEventListener('change', validateForm);
});

// 表单提交处理
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    // 模拟登录请求
    submitBtn.disabled = true;
    submitBtn.textContent = '登录中...';
    
    setTimeout(() => {
        alert('登录功能已关闭，正在开放SVIP用户注册功能！');
        submitBtn.textContent = '登录';
        submitBtn.disabled = false;
        // 实际项目中跳转到主页
        // window.location.href = 'dashboard.html';
    }, 1500);
});

// 注册链接点击
registerLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'register.html'; // 直接跳转注册页
});

// 社交登录按钮点击
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const platform = this.textContent === 'G' ? 'Google' :
                       this.textContent === '微' ? '微信' : 'GitHub';
        alert(`即将通过${platform}登录`);
    });
});
// 折叠窗功能
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
        
        // 关闭其他打开的折叠窗
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// 保留原有的表单验证和提交逻辑
// ... (原有的表单验证代码保持不变)