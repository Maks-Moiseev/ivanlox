// Базовый URL для API (замените на ваш)
const API_URL = 'http://your-backend-api-url.com';

// Проверка авторизации при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    // Инициализация форм
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', loginUser);
    }
    
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', registerUser);
    }
    
    if (document.getElementById('logoutBtn')) {
        document.getElementById('logoutBtn').addEventListener('click', logoutUser);
    }
    
    if (document.getElementById('deleteAccountBtn')) {
        document.getElementById('deleteAccountBtn').addEventListener('click', deleteAccount);
    }
});

// Проверка авторизации
function checkAuth() {
    const token = localStorage.getItem('token');
    const currentPage = window.location.pathname.split('/').pop();
    
    if (token) {
        // Если пользователь авторизован
        if (currentPage === 'login.html' || currentPage === 'register.html') {
            window.location.href = 'profile.html';
        }
        
        // Загружаем данные профиля
        if (currentPage === 'profile.html') {
            loadProfile();
        }
    } else {
        // Если пользователь не авторизован
        if (currentPage === 'profile.html') {
            window.location.href = 'login.html';
        }
    }
}

// Загрузка профиля
function loadProfile() {
    const token = localStorage.getItem('token');
    
    // Здесь должен быть запрос к вашему API
    // Пример:
    /*
    fetch(`${API_URL}/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('profileFullName').textContent = data.full_name;
        document.getElementById('profileUsername').textContent = data.username;
        document.getElementById('profileEmail').textContent = data.email;
        document.getElementById('profileGender').textContent = getGenderText(data.gender);
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Ошибка загрузки профиля', 'error');
    });
    */
    
    // Заглушка для демонстрации
    const userData = {
        full_name: "Иванов Иван Иванович",
        username: "ivanov",
        email: "ivanov@example.com",
        gender: "male"
    };
    
    document.getElementById('profileFullName').textContent = userData.full_name;
    document.getElementById('profileUsername').textContent = userData.username;
    document.getElementById('profileEmail').textContent = userData.email;
    document.getElementById('profileGender').textContent = getGenderText(userData.gender);
}

// Вход пользователя
function loginUser(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Здесь должен быть запрос к вашему API
    // Пример:
    /*
    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = 'profile.html';
        } else {
            showMessage(data.message || 'Ошибка входа', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Ошибка входа', 'error');
    });
    */
    
    // Заглушка для демонстрации
    localStorage.setItem('token', 'demo-token');
    showMessage('Вход выполнен успешно!', 'success');
    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 1000);
}

// Регистрация пользователя
function registerUser(e) {
    e.preventDefault();
    
    const formData = {
        username: document.getElementById('regUsername').value,
        password: document.getElementById('regPassword').value,
        email: document.getElementById('email').value,
        full_name: document.getElementById('fullName').value,
        gender: document.getElementById('gender').value
    };
    
    // Здесь должен быть запрос к вашему API
    // Пример:
    /*
    fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showMessage('Регистрация успешна! Теперь вы можете войти.', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        } else {
            showMessage(data.message || 'Ошибка регистрации', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('Ошибка регистрации', 'error');
    });
    */
    
    // Заглушка для демонстрации
    showMessage('Регистрация успешна! Теперь вы можете войти.', 'success');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}

// Выход пользователя
function logoutUser() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}

// Удаление аккаунта
function deleteAccount() {
    if (confirm('Вы уверены, что хотите удалить свой аккаунт? Это действие нельзя отменить.')) {
        const token = localStorage.getItem('token');
        
        // Здесь должен быть запрос к вашему API
        /*
        fetch(`${API_URL}/delete-account`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.removeItem('token');
                showMessage('Аккаунт успешно удален', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1000);
            } else {
                showMessage(data.message || 'Ошибка удаления аккаунта', 'error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Ошибка удаления аккаунта', 'error');
        });
        */
        
        // Заглушка для демонстрации
        localStorage.removeItem('token');
        showMessage('Аккаунт успешно удален', 'success');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
}

// Вспомогательные функции
function getGenderText(gender) {
    const genders = {
        'male': 'Мужской',
        'female': 'Женский',
        'other': 'Другой'
    };
    return genders[gender] || gender;
}

function showMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
    
    const main = document.querySelector('main');
    main.insertBefore(messageDiv, main.firstChild);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}