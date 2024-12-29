const portInput = document.getElementById('port');
const checkButton = document.getElementById('check');
const responseElement = document.getElementById('response');

checkButton.addEventListener('click', async () => {
    const port = portInput.value.trim();

    if (!port || isNaN(port)) {
        responseElement.textContent = 'Please enter a valid port number.';
        return;
    }

    try {
        const res = await fetch(`http://localhost:3000/check-port?port=${port}`);
        if (!res.ok) throw new Error('Failed to check port');
        const data = await res.json();

        if (data.available) {
            responseElement.textContent = `Port ${port} is available.`;
        } else {
            responseElement.textContent = `Port ${port} is in use.`;
        }
    } catch (err) {
        responseElement.textContent = `Error: ${err.message}`;
        console.error(err);
    }
});
