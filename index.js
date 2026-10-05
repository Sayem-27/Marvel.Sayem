function nextPage(pageNumber) {
    if (!validateCurrentPage(pageNumber - 1)) {
        alert("Please fill out all required fields!");
        return;
    }
    hideAllPages();
    document.getElementById(`page-${pageNumber}`).classList.remove('hidden');
    document.getElementById('step-badge').innerText = `Page ${pageNumber} of 3`;
}

function prevPage(pageNumber) {
    hideAllPages();
    document.getElementById(`page-${pageNumber}`).classList.remove('hidden');
    document.getElementById('step-badge').innerText = `Page ${pageNumber} of 3`;
}

function hideAllPages() {
    for (let i = 1; i <= 3; i++) {
        const page = document.getElementById(`page-${i}`);
        if (page) page.classList.add('hidden');
    }
}

function validateCurrentPage(currentPageNum) {
    const currentPageDiv = document.getElementById(`page-${currentPageNum}`);
    const inputs = currentPageDiv.querySelectorAll('input[required], select[required]');
    for (let input of inputs) {
        if (!input.checkValidity()) {
            input.reportValidity();
            return false;
        }
    }
    return true;
}

// Form Submit Handler
function handleFormSubmit(event) {
    event.preventDefault();

    document.getElementById('heroForm').classList.add('hidden');
    document.getElementById('stepIndicator').classList.add('hidden');
    document.getElementById('successCard').classList.remove('hidden');

    // 1.5 seconds nantar prothom Donkey meme popup dakhva
    setTimeout(() => {
        document.getElementById('memeModal').classList.remove('hidden');
    }, 1500);
}

// Open Messi & 4 Cry Options Modal
function openCrySelection() {
    document.getElementById('memeModal').classList.add('hidden');
    document.getElementById('cryModal').classList.remove('hidden');
}

// Trigger Final Video / Laugh Modal
function triggerFinalVideo() {
    document.getElementById('cryModal').classList.add('hidden');
    document.getElementById('videoModal').classList.remove('hidden');

    const sound = document.getElementById('laughSound');
    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(e => console.log("Audio play blocked"));
    }
}

// Reset Entire Process
function restartEntireProcess() {
    document.getElementById('videoModal').classList.add('hidden');
    document.getElementById('successCard').classList.add('hidden');
    
    document.getElementById('heroForm').reset();
    document.getElementById('heroForm').classList.remove('hidden');
    document.getElementById('stepIndicator').classList.remove('hidden');
    
    prevPage(1);
}
// Trigger Fullscreen Broken Display Prank
function triggerFinalVideo() {
    // আগের মোডাল হাইড করুন
    document.getElementById('cryModal').classList.add('hidden');
    
    // ফুলস্ক্রিন ব্রোকেন ডিসপ্লে দেখান
    const brokenModal = document.getElementById('brokenScreenModal');
    brokenModal.classList.remove('hidden');

    // অপশনাল: ইউজার ফুল স্ক্রিন ছবিতে ক্লিক করলে প্র্যাঙ্ক রিসেট হয়ে আবার শুরু থেকে আসবে
    brokenModal.onclick = function() {
        brokenModal.classList.add('hidden');
        restartEntireProcess();
    };
}

// Restart Process Logic
function restartEntireProcess() {
    document.getElementById('successCard').classList.add('hidden');
    document.getElementById('heroForm').reset();
    document.getElementById('heroForm').classList.remove('hidden');
    document.getElementById('stepIndicator').classList.remove('hidden');
    
    prevPage(1);
}
function triggerFinalVideo() {
    // ১. আগের মোডাল থাকলে হাইড করুন
    const cryModal = document.getElementById('cryModal');
    if (cryModal) cryModal.classList.add('hidden');
    
    // ২. ফুলস্ক্রিন ব্রোকেন ডিসপ্লে ওপেন করুন
    const brokenModal = document.getElementById('brokenScreenModal');
    if (brokenModal) {
        brokenModal.classList.remove('hidden');

        // ছবির ওপর ক্লিক করলে আবার শুরু থেকে স্টার্ট হবে
        brokenModal.onclick = function() {
            brokenModal.classList.add('hidden');
            restartEntireProcess();
        };
    }
}