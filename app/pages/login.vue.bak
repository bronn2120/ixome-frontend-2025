async submitLogin() {
  try {
    const response = await fetch('http://127.0.0.1:5003/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: this.username, password: this.password })
    });
    const data = await response.json();
    if (data.status === 'success') {
      localStorage.setItem('jwt', data.jwt);
      this.$router.push('/support');
    } else {
      console.error('Login failed:', data.message);
    }
  } catch (error) {
    console.error('Login error:', error);
  }
}