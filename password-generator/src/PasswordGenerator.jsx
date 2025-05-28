import React, { useState, useCallback } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
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

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-center mb-8">
            Password Generator
        </h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Generated Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="text"
              placeholder="Your password will appear here"
              value={password}
              readOnly
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-green-300" onClick={copyToClipboard}>Copy to clipboard</button>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="length">
              Password Length: {length}
            </label>
            <input
              className="w-full"
              id="length"
              type="range"
              min="6"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />

            {length>10 ? <p className='text-green-500'>Password Strength: Strong</p> : <p className='text-red-500'>Password Strength: Weak</p>}
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed(!numberAllowed)}
              />
              <span className="ml-2">Include Numbers</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center text-gray-700">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={characterAllowed}
                onChange={() => setCharacterAllowed(!characterAllowed)}
              />
              <span className="ml-2">Include Special Characters</span>
            </label>
          </div>

          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-green-300" 
            type="button"
            onClick={generatePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;