<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validasi Formulir</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }

        .form-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background-color: white;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h2 {
            text-align: center;
            color: indianred;
        }

        form label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
        }

        form input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        form button {
            width: 100%;
            padding: 10px;
            margin-top: 15px;
            background-color: indianred;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        form button:hover {
            background-color: darkred;
        }

        .error {
            color: red;
            font-size: 0.9em;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Formulir Validasi</h2>
        <form id="myForm">
            <label for="name">Nama:</label>
            <input type="text" id="name" name="name">
            <span id="nameError" class="error"></span>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            <span id="emailError" class="error"></span>

            <label for="phone">Nomor Telepon:</label>
            <input type="text" id="phone" name="phone">
            <span id="phoneError" class="error"></span>

            <button type="submit">Kirim</button>
        </form>
    </div>

    <script>
        document.getElementById("myForm").addEventListener("submit", function(event) {
            let isValid = true;

            // Ambil nilai dari input
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();

            // Reset pesan error
            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("phoneError").textContent = "";

            // Validasi Nama
            if (name === "") {
                document.getElementById("nameError").textContent = "Nama harus diisi!";
                isValid = false;
            }

            // Validasi Email
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (email === "") {
                document.getElementById("emailError").textContent = "Email harus diisi!";
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Format email tidak valid!";
                isValid = false;
            }

            // Validasi Nomor Telepon
            const phonePattern = /^[0-9]{10,15}$/;
            if (phone === "") {
                document.getElementById("phoneError").textContent = "Nomor telepon harus diisi!";
                isValid = false;
            } else if (!phonePattern.test(phone)) {
                document.getElementById("phoneError").textContent = "Nomor telepon harus berupa angka (10-15 digit)!";
                isValid = false;
            }

            // Jika tidak valid, cegah pengiriman formulir
            if (!isValid) {
                event.preventDefault();
            }
        });
    </script>
</body>
</html>
