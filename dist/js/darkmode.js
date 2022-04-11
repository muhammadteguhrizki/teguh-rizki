//Dark Mode
function toggleDarkTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light');
    document.documentElement.classList.remove('dark');
  } else {
    localStorage.setItem('theme', 'dark');
    document.documentElement.classList.add('dark');
  }
}
document.querySelector('.btn-dark').addEventListener('click', toggleDarkTheme);

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}
