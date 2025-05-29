import { useCallback } from "react";

const useGeneratePassword = (length, numberAllowed, characterAllowed) => {
    let pass = '';
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';

    if (numberAllowed) {
        str += '1234567890';
    }

    if (characterAllowed) {
        str += '!"£$%^&*()-=+_[]#;{}|<>?:@';
    }

    for (let i=1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length+1);
        pass += str.charAt(char);
    }

    return pass;
}

export default useGeneratePassword;