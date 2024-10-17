import React, { useState } from 'react';
import { Input } from 'antd-mobile';
import { escapeHtml } from '../utils/security';

const SecureInput: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleChange = (value: string) => {
        setInput(value);
        setOutput(escapeHtml(value));
    };

    return (
        <div>
            <h3>Secure Input Demo (XSS Prevention)</h3>
            <Input
                placeholder="Enter some text (try including HTML)"
                value={input}
                onChange={handleChange}
            />
            <p>Escaped output: {output}</p>
        </div>
    );
};

export default SecureInput;