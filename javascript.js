/*javascript validation */
const email = document.getElementById('username');
		const password = document.getElementById('password');
			function validateForm() {
				if (!email.checkValidity()) {
					alert('Please enter a valid email address.');
					return false;
				}
				if (password.value.length < 8) {
					alert('Password must be at least 8 characters long.');
					return false;
				}
				return true;
				}

				document.querySelector('form').addEventListener('submit', function(event) {
					if (!validateForm()) {
						event.preventDefault();
				}
});
/*Icon code eye hide and show javascript*/
				
					function pass(){
					var password = document.getElementById("password");
					var eye = document.getElementById("eye");
					if(password.type==="password")
					{
						password.type="text"
						eye.classList.remove("fa-eye-slash");
						eye.classList.add("fa-eye");

					}
					else{
						password.type="password"
						eye.classList.remove("fa-eye");
						eye.classList.add("fa-eye-slash");
					}
				}
