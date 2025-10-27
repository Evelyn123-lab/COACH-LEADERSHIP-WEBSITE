// ========== Handle Login Form ==========
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;
        const role = loginForm.role.value;

        if (email && password && role) {
            alert(`Logged in as ${role}`);
            
            if (role === 'user') {
                window.location.href = "user-dashboard.html";
            } else if (role === 'coach') {
                window.location.href = "coach-dashboard.html";
            }
        } else {
            alert("Please fill in all fields and select a role.");
        }
    });
}

// ========== Handle Registration Form ==========
const registerForm = document.getElementById('registerForm');

if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = registerForm.name.value;
        const email = registerForm.email.value;
        const password = registerForm.password.value;
        const role = registerForm.role.value;

        if (name && email && password && role) {
            alert("Registration successful! Please login.");
            window.location.href = "login.html";
        } else {
            alert("Please fill in all fields and select a role.");
        }
    });
}
document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop the form from submitting normally

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      role: form.role.value
    };

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Registration successful!');
        form.reset(); // Clear form
      } else {
        alert('❌ Error: ' + data.message);
      }
    } catch (err) {
      console.error(err);
      alert('❌ Something went wrong.');
    }
  });
