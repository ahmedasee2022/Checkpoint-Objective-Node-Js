const generateRandomPassword = ()=> {
    const password = generatePassword.generate(
        {
            length: 10,
            number: true,
            symbols: true,
            uppercase: true,
            excludeSimilarCharacters: true,
        }
    );
    console.log('Generated password:',password);
};
generateRandomPassword();
