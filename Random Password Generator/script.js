        const passwordBox = document.getElementById("Password");

        const length = 24;
        const upperCase = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ";
        const lowerCase = "abcçdefgğhıijklmnoöprsştuüvyz";
        const numbers = "0123456789";
        const symbols = "+-*/&%=!?@#$^~()[]{}<>\\|\"'`;:";

        const allChars = upperCase + lowerCase + numbers + symbols;

        function createPassword() {
            let password = "";
            password += upperCase[Math.floor(Math.random() * upperCase.length)];
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
            password += numbers[Math.floor(Math.random() * numbers.length)];
            password += symbols[Math.floor(Math.random() * symbols.length)];

            // Geri kalan karakterleri tamamla
            while (password.length < length) {
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }

            // Karakterleri karıştır (opsiyonel ama daha güvenli)
            password = password.split('').sort(() => 0.5 - Math.random()).join('');

            passwordBox.value = password;
        }


        function copyPassword(){
            passwordBox.select();
            document.execCommand("copy");
            console.log("The password has been copied.")
        }