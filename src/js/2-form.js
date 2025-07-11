const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// 1. Об'єкт formData
let formData = {
  email: '',
  message: '',
};

// 2. Завантаження даних із localStorage при старті
loadFormData();

// 3. Слухач події input
form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim(); // обрізаємо пробіли
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 4. Слухач події submit
form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData); // виводимо актуальні значення
  localStorage.removeItem(STORAGE_KEY); // очищаємо сховище
  formData = { email: '', message: '' }; // скидаємо formData
  form.reset(); // очищаємо форму
});

// 🔄 Функція для завантаження збережених даних у форму
function loadFormData() {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      formData = JSON.parse(saved);
      if (formData.email) form.elements.email.value = formData.email;
      if (formData.message) form.elements.message.value = formData.message;
    } catch (e) {
      console.error('Помилка при читанні з localStorage:', e);
    }
  }
}
