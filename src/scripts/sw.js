self.addEventListener('push', (event) => {
    console.log('Service worker pushing...');

    async function chainPromise() {
        await self.registration.showNotification('Ada Story baru nih buat kamu!', {
            body: 'Test buat kamu!',
        });
    }

    event.waitUntil(chainPromise());
})