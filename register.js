// DOM元素
const registerForm = document.getElementById('registerForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');
const agreementCheckbox = document.getElementById('userAgreement');
const submitBtn = document.getElementById('submitBtn');
const loginLink = document.getElementById('loginLink');

// 错误信息元素
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmError = document.getElementById('confirm-error');

// 表单验证函数
function validateForm() {
    const isUsernameValid = usernameInput.checkValidity();
    const isEmailValid = emailInput.checkValidity();
    const isPasswordValid = passwordInput.checkValidity();
    const isAgreementChecked = agreementCheckbox.checked;
    const isConfirmValid = passwordInput.value === confirmInput.value;
    
    // 显示/隐藏错误信息
    usernameError.style.display = isUsernameValid ? 'none' : 'block';
    emailError.style.display = isEmailValid ? 'none' : 'block';
    passwordError.style.display = isPasswordValid ? 'none' : 'block';
    confirmError.style.display = isConfirmValid ? 'none' : 'block';
    
    // 更新按钮状态
    submitBtn.disabled = !(isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid && isAgreementChecked);
    
    return isUsernameValid && isEmailValid && isPasswordValid && isConfirmValid && isAgreementChecked;
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
    usernameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmInput.addEventListener('input', validateForm);
    agreementCheckbox.addEventListener('change', validateForm);
});

// 表单提交处理
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    // 模拟注册请求
    submitBtn.disabled = true;
    submitBtn.textContent = '注册中...';
    
    setTimeout(() => {
        alert('注册成功！即将跳转到登录页面');
        window.location.href = 'login.html';
    }, 1500);
});

// 登录链接点击（直接跳转，优化体验）
loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'login.html';
});

// 社交登录按钮点击
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const platform = this.textContent === 'G' ? 'Google' :
                       this.textContent === '微' ? '微信' : 'GitHub';
        alert(`即将通过${platform}注册`);
    });
});
